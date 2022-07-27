// SPDX-License-Identifier: MIT

pragma solidity ^0.8.6;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";
import "hardhat/console.sol";

uint8 constant DECIMALS = 18;

// Example class - a mock class using delivering from ERC20
contract MiniDAOCoin is ERC20 {
    struct Wallet {
        address walletAddress;
        address[] coinAddresses;
    }

    struct Expense {
        address fromAddress; // address of the submitter
        address forAddress; // address of the account that will be reimbursed in citizen coins, can be the same as the `fromAddress` address
        uint256 amount;
        string description;
        address coinAddress; // address of the coin contract
        uint256 date;
        string ipfsHash; // attachment
        address[] approvers;
        string transactionHash; // when paid
    }

    // keep track of all expenses
    Expense[] public expenses;
    // keep track of all wallets holding coins for this mini DAO
    Wallet[] public wallets;

    // uint256 rate = 2 * 10**DECIMALS; // 2 EUR per Citizen Coin
    uint256 reward_approving_expense = 1 * 10**DECIMALS;
    uint256 reward_submitting_expense = 2 * 10**DECIMALS;

    // keeps track of the roles of the different users (0: user, 1: admin, ...)
    mapping(address => uint16) public roles;
    // Keep track of number of admin users
    uint16 public adminCount;
    uint16 public pendingExpenses = 0;

    constructor(address admin1, address admin2) ERC20("Citizen Coin", "CC") {
        require(admin1 != admin2, "Admin accounts must be different");
        require(admin1 != address(0), "Please provide two admin accounts");
        require(admin2 != address(0), "Please provide two admin accounts");
        roles[admin1] = 1;
        roles[admin2] = 1;
        adminCount = 2;
    }

    event ExpenseSubmitted(
        address fromAddress,
        address forAddress,
        uint256 amount,
        string description
    );
    event ExpenseApproved(
        address admin,
        uint32 expenseIndex,
        address indexed fromAddress,
        address indexed forAddress,
        uint256 amount,
        string description
    );

    modifier onlyByAdmin() {
        require(roles[msg.sender] == 1, "must be an admin");
        _;
    }

    function addAdmin(address _user) public onlyByAdmin {
        require(roles[_user] == 0, "user already has admin role");
        roles[_user] = 1;
        adminCount++;
    }

    function removeAdmin(address _user) public onlyByAdmin {
        require(_user != msg.sender, "cannot remove yourself as an admin");
        require(adminCount > 2, "you need at least 2 admins");
        roles[_user] = 0;
        adminCount--;
    }

    /* Update the rate between currency of expenses and citizen coins (1 CC = rate * 1 euro)
     * @param _rate the new rate with 18 decimals
     */
    // function updateRate(uint256 _rate) public onlyByAdmin {
    //     rate = _rate;
    // }

    function updateReward(string memory _type, uint256 _amount)
        public
        onlyByAdmin
    {
        if (
            keccak256(abi.encodePacked(_type)) ==
            keccak256(abi.encodePacked("approving"))
        ) {
            reward_approving_expense = _amount;
        } else if (
            keccak256(abi.encodePacked(_type)) ==
            keccak256(abi.encodePacked("submitting"))
        ) {
            reward_submitting_expense = _amount;
        }
    }

    /**
     * @param _amount in EUR cents
     */
    function submitExpense(
        string memory _description,
        address _coinAddress,
        uint256 _amount,
        address _forAddress,
        string memory _ipfsHash
    ) public payable returns (uint32) {
        require(
            bytes(_description).length > 3,
            "please provide a proper description"
        );
        require(_amount > 0, "expense amount must be greater than zero");
        require(
            _forAddress != address(0),
            "please provide an address to pay to"
        );

        address[] memory approvers;

        Expense memory expense = Expense(
            msg.sender,
            _forAddress,
            _amount,
            _description,
            _coinAddress,
            block.timestamp,
            _ipfsHash,
            approvers,
            ""
        );
        expenses.push(expense);
        pendingExpenses++;

        emit ExpenseSubmitted(msg.sender, _forAddress, _amount, _description);
        return uint32(expenses.length - 1);
    }

    function containsAddress(address[] memory arr, address searchFor)
        private
        pure
        returns (bool)
    {
        for (uint256 i = 0; i < arr.length; i++) {
            if (arr[i] == searchFor) {
                return true;
            }
        }
        return false;
    }

    // we mint a MiniDAOCoin whenever an expense is approved
    function approveExpense(uint16 _expenseIndex) public onlyByAdmin {
        require(
            _expenseIndex >= 0 && _expenseIndex < expenses.length,
            "invalid expense index"
        );
        require(
            containsAddress(expenses[_expenseIndex].approvers, msg.sender),
            "you already approved this expense"
        );
        expenses[_expenseIndex].approvers.push(msg.sender);
        _mint(msg.sender, reward_approving_expense);
        if (expenses[_expenseIndex].approvers.length == 1) {
            pendingExpenses--;
            // We reward the approver and the person that submitted the expense

            // We reward the submitter of the expense
            _mint(
                expenses[_expenseIndex].fromAddress,
                reward_submitting_expense
            );
        }

        // _mint(
        //     expenses[_expenseIndex].forAddress,
        //     ((expenses[_expenseIndex].amount * 10**DECIMALS) / 100 / rate) *
        //         (10**DECIMALS)
        // );

        emit ExpenseApproved(
            msg.sender,
            _expenseIndex,
            expenses[_expenseIndex].fromAddress,
            expenses[_expenseIndex].forAddress,
            expenses[_expenseIndex].amount,
            expenses[_expenseIndex].description
        );
    }
}
