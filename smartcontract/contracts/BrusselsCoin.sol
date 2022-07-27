// SPDX-License-Identifier: MIT

pragma solidity ^0.8.6;

import "./DemurrageCoin.sol";
import "hardhat/console.sol";

contract BrusselsCoin is DemurrageCoin {
    constructor()
        DemurrageCoin(
            "Brussels Coin",
            "BXL",
            msg.sender, // address to collect the transaction and demurrage fees
            1 * (10**uint256(6 - 2)), // transaction fees (i.e. 1%)
            1 * (10**uint256(6 - 2)), // 1% demurrage rate per period // demurrage fees per period per thousand (i.e. 1%)
            42524 minutes, // demurrage period (1 moon cycle = 29.53059 days = 42,524 minutes)
            block.timestamp
        )
    {}
}
