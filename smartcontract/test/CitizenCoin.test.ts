import { expect, use } from "chai";
import { Contract, Signer, BigNumber } from 'ethers';
import { getAddress } from "ethers/lib/utils";
import { ethers, waffle } from "hardhat";
// import { solidity } from "ethereum-waffle";
const { solidity } = waffle;
import { CitizenCoin } from "../typechain/CitizenCoin";
import BigNumberJS from 'bignumber.js';

use(solidity);

const DECIMALS = 18;

const getBigNumber = (bigNumber: BigNumber) => {
  const bg = new BigNumberJS(bigNumber.toHexString());
  return bg.shiftedBy(-18).toNumber();
}

describe("Citizen Coin", () => {
  let cc: CitizenCoin;
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

    const citizencoinFactory = await ethers.getContractFactory(
      "CitizenCoin",
      Xavier
    );
    cc = (await citizencoinFactory.deploy(address.Xavier, address.Leen)) as CitizenCoin;
    await cc.deployed();
    await cc.connect(Marc).submitExpense("Test expense", 10000, address.Marc, "");
    const balance1 = await cc.balanceOf(address.Marc);
    expect(balance1.toNumber()).to.eq(0);
    await cc.approveExpense(0);
  });
  
    it("Mint citizen coins for expense approved", async () => {
      expect(getBigNumber(await cc.balanceOf(address.Marc))).to.equal(52);
    });

  it("Total supply includes all rewards", async () => {
    expect(getBigNumber(await cc.totalSupply())).to.eq(53);
  });

  it("Can not transfer from empty account", async () => {
    const ccFromJulienWallet = cc.connect(Julien);
    await expect(ccFromJulienWallet.transfer(address.Xavier, 1)).to.be.reverted;
  });

  it("Calls totalSupply on CitizenCoin contract", async () => {
    const totalSupply = getBigNumber(await cc.totalSupply());
    expect(totalSupply).to.equal(53);
  });

  it("Fails to approve an expense already approved", async () => {
    await expect(cc.approveExpense(0)).to.be.revertedWith('expense already approved');
  });

  it("Rewards the approver of the expense", async () => {
    expect(getBigNumber(await cc.balanceOf(address.Xavier))).to.equal(1);
  });

  it("Julien submits an expense", async () => {
    const JulienSession = cc.connect(Julien);
    let pendingExpenses = await cc.pendingExpenses();
    expect(pendingExpenses).to.equal(0);
    await JulienSession.submitExpense("Beers for the bar", 40000, address.Julien, "");
    pendingExpenses = await cc.pendingExpenses();
    expect(pendingExpenses).to.equal(1);
    await expect(JulienSession.approveExpense(1)).to.be.revertedWith(
      "must be an admin"
    );
    await cc.approveExpense(1);
    pendingExpenses = await cc.pendingExpenses();
    expect(pendingExpenses).to.equal(0);
    expect(getBigNumber(await cc.balanceOf(address.Xavier))).to.equal(2);
    expect(getBigNumber(await cc.balanceOf(await Julien.getAddress()))).to.equal(400 / 2 + 2);
  });

    it('Transfer adds amount to destination account', async () => {
      await cc.connect(Marc).transfer(address.Leen, 10);
      expect(await cc.balanceOf(address.Leen)).to.equal(10);
    });
  
    it('Transfer emits event', async () => {
      await expect(cc.transfer(address.Marc, 1))
        .to.emit(cc, 'Transfer')
        .withArgs(address.Xavier, address.Marc, 1);
    });
  
    it('Can not transfer above the amount', async () => {
      await expect(cc.transfer(address.Marc, 100 * 10**DECIMALS)).to.be.reverted;
    });
  
    it('Can not transfer from empty account', async () => {
      const ccFromOtherWallet = cc.connect(Leen);
      await expect(ccFromOtherWallet.transfer(address.Xavier, 1))
        .to.be.reverted;
    });
  
});
