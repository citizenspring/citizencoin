import { expect, use } from "chai";
import { Contract, Signer, BigNumber } from 'ethers';
import { getAddress } from "ethers/lib/utils";
import { ethers, waffle } from "hardhat";
// import { solidity } from "ethereum-waffle";
const { solidity } = waffle;
import { BrusselsCoin } from "../typechain/BrusselsCoin";
import BigNumberJS from 'bignumber.js';

use(solidity);

const DECIMALS = 18;

const getBigNumber = (bigNumber: BigNumber) => {
  const bg = new BigNumberJS(bigNumber.toHexString());
  return bg.shiftedBy(-18).toNumber();
}

const d = new Date();
const now = Math.round(d.getTime()/1000);

const xMonthsAgo = (x: number) => {
  const d = new Date();
  const now = Math.round(d.getTime()/1000);
  return Math.round(d.setDate(d.getDate() - x * 31) / 1000);
}

const xMonthsFromNow = (x: number) => {
  const d = new Date();
  const now = Math.round(d.getTime()/1000);
  return Math.round(d.setDate(d.getDate() + x * 31) / 1000);
}

describe("Brussels Coin", () => {
  let bc: BrusselsCoin;
  let signers: Signer[];
  let Xavier: Signer, Leen: Signer, Julien: Signer, Marc: Signer;
  interface Address {
    [index: string ]: string
  };
  const address: Address = {};

  beforeEach(async () => {
    [Xavier, Leen, Julien, Marc] = await ethers.getSigners();
    address['Xavier'] = await Xavier.getAddress();
    address['Leen'] = await Leen.getAddress();
    address['Julien'] = await Julien.getAddress();
    address['Marc'] = await Marc.getAddress();

    const factory = await ethers.getContractFactory(
      "BrusselsCoin",
      Xavier
    );
    bc = (await factory.deploy()) as BrusselsCoin;
    await bc.deployed();
  });
  
    it("Mint coins and allocate them to the right address", async () => {
      await bc.connect(Xavier).mint(address.Leen, 10000);
      const balance1 = await bc.balanceOf(address.Leen);
      expect(balance1.toNumber()).to.eq(10000);
    });

    it("Takes a 1% transaction fee", async () => {
      await bc.connect(Xavier).mint(address.Leen, 10000);
      await bc.connect(Leen).transfer(address.Julien, 1000);
      const balance1 = await bc.balanceOf(address.Leen);
      const balance2 = await bc.balanceOf(address.Julien);
      const balanceFeeCollector = await bc.balanceOf(address.Xavier);
      expect(balance2.toNumber()).to.eq(1000);
      expect(balance1.toNumber()).to.eq(8990);
      expect(balanceFeeCollector.toNumber()).to.eq(10);
    });

    it("computes demurrage fee for x periods", async () => {
      const _rateDecimals = 6;
      const rate = 1 * (10**(_rateDecimals - 2));
      const startingAmount = 1000;
      let computedRate, demurragedAmount;
      computedRate = await bc.connect(Xavier).computeDemurrageFactor(rate, 1);
      demurragedAmount = computedRate.toNumber() * startingAmount / 10 ** _rateDecimals;
      expect(demurragedAmount).to.eq(990);
      computedRate = await bc.connect(Xavier).computeDemurrageFactor(rate, 2);
      demurragedAmount = computedRate.toNumber() * startingAmount / 10 ** _rateDecimals;
      expect(demurragedAmount).to.eq(980.1);
    });

    it("applies demurrage over 1 month", async () => {
      console.log(">>> feeCollector", address['Xavier']);
      console.log(">>> user account", address['Julien']);
      await bc.connect(Xavier).mint(address.Julien, 1000);
      await bc.connect(Xavier).setBlockTimestampInTheFuture(xMonthsFromNow(1));
      const balance3 = await bc.balanceOf(address.Julien);
      expect(balance3.toNumber()).to.eq(990);
    });

    it("applies demurrage over 6 months", async () => {
      await bc.connect(Xavier).mint(address.Julien, 1000);
      const futureTimestamp = xMonthsFromNow(6);
      await bc.connect(Xavier).setBlockTimestampInTheFuture(futureTimestamp);
      const balance4 = await bc.balanceOf(address.Julien);
      expect(balance4.toNumber()).to.eq(Math.floor(941)); // 1000 * 0.99^6
    });

    it("does not apply demurrage on newly received money", async () => {
      await bc.connect(Xavier).mint(address.Julien, 1000);
      const futureTimestamp = xMonthsFromNow(6);
      await bc.connect(Xavier).setBlockTimestampInTheFuture(futureTimestamp);

      await bc.connect(Julien).transfer(address.Leen, 200);
      const balance5 = await bc.balanceOf(address.Julien);
      expect(balance5.toNumber()).to.eq(739); // 941 - 200 - (0.01 * 200)
      const leenBalance = await bc.balanceOf(address.Leen);
      expect(leenBalance.toNumber()).to.eq(200);
    });

    it("updates demurrage rate", async () => {
      await bc.connect(Xavier).mint(address.Julien, 1000);
      await bc.connect(Xavier).mint(address.Marc, 1000);
      await bc.connect(Xavier).updateDemurrageRate(20000, xMonthsFromNow(2));
      await bc.connect(Xavier).setBlockTimestampInTheFuture(xMonthsFromNow(1));

      await bc.connect(Julien).transfer(address.Leen, 200);
      let balanceJulien = await bc.balanceOf(address.Julien);
      expect(balanceJulien.toNumber()).to.eq(788); // 1000 - (0.01 * 1000 demurrage 1 month) - 200 - (0.01 * 200 fee) = 1000 - 212

      await bc.connect(Xavier).setBlockTimestampInTheFuture(xMonthsFromNow(3));

      let balanceMarc = await bc.balanceOf(address.Marc);
      expect(balanceMarc.toNumber()).to.eq(960); // 1000 - (1000 * 0.01^2 demurrage 2 months * 0.02 demurrage 1 month) = 1000*0.99*0.99*0.98 = 960

      balanceJulien = await bc.balanceOf(address.Julien);
      expect(balanceJulien.toNumber()).to.eq(764); // 788 - (788 * 0.01 demurrage for 1 month * 0.02 demurrage for 1 month) = 788*0.99*0.98 = 764

      await bc.connect(Julien).transfer(address.Leen, 200);
      balanceJulien = await bc.balanceOf(address.Julien);
      expect(balanceJulien.toNumber()).to.eq(562); // 764 - 200 - transaction fee (2)

      const balanceLeen = await bc.balanceOf(address.Leen);
      expect(balanceLeen.toNumber()).to.eq(394); // 200 - (200 * 0.01 demurrage for 1 month * 0.02 demurrage for 1 month) = 200*0.99*0.98 = 194 + 200 received

    });

    it("ignores past demurrage rate", async () => {
      await bc.connect(Xavier).mint(address.Julien, 1000);
      await bc.connect(Xavier).updateDemurrageRate(20000, xMonthsFromNow(1));
      await bc.connect(Xavier).setBlockTimestampInTheFuture(xMonthsFromNow(2));

      await bc.connect(Julien).transfer(address.Leen, 200);      
      await bc.connect(Xavier).setBlockTimestampInTheFuture(xMonthsFromNow(4));

      const balanceLeen = await bc.balanceOf(address.Leen);
      expect(balanceLeen.toNumber()).to.eq(192); // 200 - (200 * 0.02^2 demurrage for 2 months)

    });

    it("adds the demurrage and transaction fees to the feeCollector account", async () => {
      await bc.connect(Xavier).mint(address.Julien, 1000);
      await bc.connect(Xavier).setBlockTimestampInTheFuture(xMonthsFromNow(3)); // +1000*0.01^3 demurrage (30)

      let balanceFeeCollector = await bc.balanceOf(address.Xavier);
      expect(balanceFeeCollector.toNumber()).to.eq(0); // fees are only collected when there is a transaction

      await bc.connect(Julien).transfer(address.Leen, 200); // +1000*0.01^3 demurrage (30) +2 transaction fee

      balanceFeeCollector = await bc.balanceOf(address.Xavier);
      expect(balanceFeeCollector.toNumber()).to.eq(32);
    });
  });
