/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import {
  ethers,
  EventFilter,
  Signer,
  BigNumber,
  BigNumberish,
  PopulatedTransaction,
} from "ethers";
import {
  Contract,
  ContractTransaction,
  Overrides,
  PayableOverrides,
  CallOverrides,
} from "@ethersproject/contracts";
import { BytesLike } from "@ethersproject/bytes";
import { Listener, Provider } from "@ethersproject/providers";
import { FunctionFragment, EventFragment, Result } from "@ethersproject/abi";

interface CitizenCoinInterface extends ethers.utils.Interface {
  functions: {
    "addAdmin(address)": FunctionFragment;
    "adminCount()": FunctionFragment;
    "allowance(address,address)": FunctionFragment;
    "approve(address,uint256)": FunctionFragment;
    "approveExpense(uint16)": FunctionFragment;
    "balanceOf(address)": FunctionFragment;
    "decimals()": FunctionFragment;
    "decreaseAllowance(address,uint256)": FunctionFragment;
    "expenses(uint256)": FunctionFragment;
    "increaseAllowance(address,uint256)": FunctionFragment;
    "name()": FunctionFragment;
    "pendingExpenses()": FunctionFragment;
    "removeAdmin(address)": FunctionFragment;
    "roles(address)": FunctionFragment;
    "submitExpense(string,uint256,address,string)": FunctionFragment;
    "symbol()": FunctionFragment;
    "totalSupply()": FunctionFragment;
    "transfer(address,uint256)": FunctionFragment;
    "transferFrom(address,address,uint256)": FunctionFragment;
    "updateRate(uint256)": FunctionFragment;
    "updateReward(string,uint256)": FunctionFragment;
  };

  encodeFunctionData(functionFragment: "addAdmin", values: [string]): string;
  encodeFunctionData(
    functionFragment: "adminCount",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "allowance",
    values: [string, string]
  ): string;
  encodeFunctionData(
    functionFragment: "approve",
    values: [string, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "approveExpense",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(functionFragment: "balanceOf", values: [string]): string;
  encodeFunctionData(functionFragment: "decimals", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "decreaseAllowance",
    values: [string, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "expenses",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "increaseAllowance",
    values: [string, BigNumberish]
  ): string;
  encodeFunctionData(functionFragment: "name", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "pendingExpenses",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "removeAdmin", values: [string]): string;
  encodeFunctionData(functionFragment: "roles", values: [string]): string;
  encodeFunctionData(
    functionFragment: "submitExpense",
    values: [string, BigNumberish, string, string]
  ): string;
  encodeFunctionData(functionFragment: "symbol", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "totalSupply",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "transfer",
    values: [string, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "transferFrom",
    values: [string, string, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "updateRate",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "updateReward",
    values: [string, BigNumberish]
  ): string;

  decodeFunctionResult(functionFragment: "addAdmin", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "adminCount", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "allowance", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "approve", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "approveExpense",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "balanceOf", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "decimals", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "decreaseAllowance",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "expenses", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "increaseAllowance",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "name", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "pendingExpenses",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "removeAdmin",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "roles", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "submitExpense",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "symbol", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "totalSupply",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "transfer", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "transferFrom",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "updateRate", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "updateReward",
    data: BytesLike
  ): Result;

  events: {
    "Approval(address,address,uint256)": EventFragment;
    "ExpenseApproved(address,uint32,address,address,uint256,string)": EventFragment;
    "ExpenseSubmitted(address,address,uint256,string)": EventFragment;
    "Transfer(address,address,uint256)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "Approval"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "ExpenseApproved"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "ExpenseSubmitted"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "Transfer"): EventFragment;
}

export class CitizenCoin extends Contract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  on(event: EventFilter | string, listener: Listener): this;
  once(event: EventFilter | string, listener: Listener): this;
  addListener(eventName: EventFilter | string, listener: Listener): this;
  removeAllListeners(eventName: EventFilter | string): this;
  removeListener(eventName: any, listener: Listener): this;

  interface: CitizenCoinInterface;

  functions: {
    addAdmin(
      _user: string,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    "addAdmin(address)"(
      _user: string,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    adminCount(overrides?: CallOverrides): Promise<{
      0: number;
    }>;

    "adminCount()"(overrides?: CallOverrides): Promise<{
      0: number;
    }>;

    allowance(
      owner: string,
      spender: string,
      overrides?: CallOverrides
    ): Promise<{
      0: BigNumber;
    }>;

    "allowance(address,address)"(
      owner: string,
      spender: string,
      overrides?: CallOverrides
    ): Promise<{
      0: BigNumber;
    }>;

    approve(
      spender: string,
      amount: BigNumberish,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    "approve(address,uint256)"(
      spender: string,
      amount: BigNumberish,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    approveExpense(
      _expenseIndex: BigNumberish,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    "approveExpense(uint16)"(
      _expenseIndex: BigNumberish,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    balanceOf(
      account: string,
      overrides?: CallOverrides
    ): Promise<{
      0: BigNumber;
    }>;

    "balanceOf(address)"(
      account: string,
      overrides?: CallOverrides
    ): Promise<{
      0: BigNumber;
    }>;

    decimals(overrides?: CallOverrides): Promise<{
      0: number;
    }>;

    "decimals()"(overrides?: CallOverrides): Promise<{
      0: number;
    }>;

    decreaseAllowance(
      spender: string,
      subtractedValue: BigNumberish,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    "decreaseAllowance(address,uint256)"(
      spender: string,
      subtractedValue: BigNumberish,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    expenses(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<{
      fromAddress: string;
      forAddress: string;
      amount: BigNumber;
      description: string;
      date: BigNumber;
      ipfsHash: string;
      isApproved: boolean;
      0: string;
      1: string;
      2: BigNumber;
      3: string;
      4: BigNumber;
      5: string;
      6: boolean;
    }>;

    "expenses(uint256)"(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<{
      fromAddress: string;
      forAddress: string;
      amount: BigNumber;
      description: string;
      date: BigNumber;
      ipfsHash: string;
      isApproved: boolean;
      0: string;
      1: string;
      2: BigNumber;
      3: string;
      4: BigNumber;
      5: string;
      6: boolean;
    }>;

    increaseAllowance(
      spender: string,
      addedValue: BigNumberish,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    "increaseAllowance(address,uint256)"(
      spender: string,
      addedValue: BigNumberish,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    name(overrides?: CallOverrides): Promise<{
      0: string;
    }>;

    "name()"(overrides?: CallOverrides): Promise<{
      0: string;
    }>;

    pendingExpenses(overrides?: CallOverrides): Promise<{
      0: number;
    }>;

    "pendingExpenses()"(overrides?: CallOverrides): Promise<{
      0: number;
    }>;

    removeAdmin(
      _user: string,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    "removeAdmin(address)"(
      _user: string,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    roles(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<{
      0: number;
    }>;

    "roles(address)"(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<{
      0: number;
    }>;

    submitExpense(
      _description: string,
      _amount: BigNumberish,
      _forAddress: string,
      _ipfsHash: string,
      overrides?: PayableOverrides
    ): Promise<ContractTransaction>;

    "submitExpense(string,uint256,address,string)"(
      _description: string,
      _amount: BigNumberish,
      _forAddress: string,
      _ipfsHash: string,
      overrides?: PayableOverrides
    ): Promise<ContractTransaction>;

    symbol(overrides?: CallOverrides): Promise<{
      0: string;
    }>;

    "symbol()"(overrides?: CallOverrides): Promise<{
      0: string;
    }>;

    totalSupply(overrides?: CallOverrides): Promise<{
      0: BigNumber;
    }>;

    "totalSupply()"(overrides?: CallOverrides): Promise<{
      0: BigNumber;
    }>;

    transfer(
      recipient: string,
      amount: BigNumberish,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    "transfer(address,uint256)"(
      recipient: string,
      amount: BigNumberish,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    transferFrom(
      sender: string,
      recipient: string,
      amount: BigNumberish,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    "transferFrom(address,address,uint256)"(
      sender: string,
      recipient: string,
      amount: BigNumberish,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    updateRate(
      _rate: BigNumberish,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    "updateRate(uint256)"(
      _rate: BigNumberish,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    updateReward(
      _type: string,
      _amount: BigNumberish,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    "updateReward(string,uint256)"(
      _type: string,
      _amount: BigNumberish,
      overrides?: Overrides
    ): Promise<ContractTransaction>;
  };

  addAdmin(_user: string, overrides?: Overrides): Promise<ContractTransaction>;

  "addAdmin(address)"(
    _user: string,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  adminCount(overrides?: CallOverrides): Promise<number>;

  "adminCount()"(overrides?: CallOverrides): Promise<number>;

  allowance(
    owner: string,
    spender: string,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  "allowance(address,address)"(
    owner: string,
    spender: string,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  approve(
    spender: string,
    amount: BigNumberish,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  "approve(address,uint256)"(
    spender: string,
    amount: BigNumberish,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  approveExpense(
    _expenseIndex: BigNumberish,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  "approveExpense(uint16)"(
    _expenseIndex: BigNumberish,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  balanceOf(account: string, overrides?: CallOverrides): Promise<BigNumber>;

  "balanceOf(address)"(
    account: string,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  decimals(overrides?: CallOverrides): Promise<number>;

  "decimals()"(overrides?: CallOverrides): Promise<number>;

  decreaseAllowance(
    spender: string,
    subtractedValue: BigNumberish,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  "decreaseAllowance(address,uint256)"(
    spender: string,
    subtractedValue: BigNumberish,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  expenses(
    arg0: BigNumberish,
    overrides?: CallOverrides
  ): Promise<{
    fromAddress: string;
    forAddress: string;
    amount: BigNumber;
    description: string;
    date: BigNumber;
    ipfsHash: string;
    isApproved: boolean;
    0: string;
    1: string;
    2: BigNumber;
    3: string;
    4: BigNumber;
    5: string;
    6: boolean;
  }>;

  "expenses(uint256)"(
    arg0: BigNumberish,
    overrides?: CallOverrides
  ): Promise<{
    fromAddress: string;
    forAddress: string;
    amount: BigNumber;
    description: string;
    date: BigNumber;
    ipfsHash: string;
    isApproved: boolean;
    0: string;
    1: string;
    2: BigNumber;
    3: string;
    4: BigNumber;
    5: string;
    6: boolean;
  }>;

  increaseAllowance(
    spender: string,
    addedValue: BigNumberish,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  "increaseAllowance(address,uint256)"(
    spender: string,
    addedValue: BigNumberish,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  name(overrides?: CallOverrides): Promise<string>;

  "name()"(overrides?: CallOverrides): Promise<string>;

  pendingExpenses(overrides?: CallOverrides): Promise<number>;

  "pendingExpenses()"(overrides?: CallOverrides): Promise<number>;

  removeAdmin(
    _user: string,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  "removeAdmin(address)"(
    _user: string,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  roles(arg0: string, overrides?: CallOverrides): Promise<number>;

  "roles(address)"(arg0: string, overrides?: CallOverrides): Promise<number>;

  submitExpense(
    _description: string,
    _amount: BigNumberish,
    _forAddress: string,
    _ipfsHash: string,
    overrides?: PayableOverrides
  ): Promise<ContractTransaction>;

  "submitExpense(string,uint256,address,string)"(
    _description: string,
    _amount: BigNumberish,
    _forAddress: string,
    _ipfsHash: string,
    overrides?: PayableOverrides
  ): Promise<ContractTransaction>;

  symbol(overrides?: CallOverrides): Promise<string>;

  "symbol()"(overrides?: CallOverrides): Promise<string>;

  totalSupply(overrides?: CallOverrides): Promise<BigNumber>;

  "totalSupply()"(overrides?: CallOverrides): Promise<BigNumber>;

  transfer(
    recipient: string,
    amount: BigNumberish,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  "transfer(address,uint256)"(
    recipient: string,
    amount: BigNumberish,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  transferFrom(
    sender: string,
    recipient: string,
    amount: BigNumberish,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  "transferFrom(address,address,uint256)"(
    sender: string,
    recipient: string,
    amount: BigNumberish,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  updateRate(
    _rate: BigNumberish,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  "updateRate(uint256)"(
    _rate: BigNumberish,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  updateReward(
    _type: string,
    _amount: BigNumberish,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  "updateReward(string,uint256)"(
    _type: string,
    _amount: BigNumberish,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  callStatic: {
    addAdmin(_user: string, overrides?: CallOverrides): Promise<void>;

    "addAdmin(address)"(
      _user: string,
      overrides?: CallOverrides
    ): Promise<void>;

    adminCount(overrides?: CallOverrides): Promise<number>;

    "adminCount()"(overrides?: CallOverrides): Promise<number>;

    allowance(
      owner: string,
      spender: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "allowance(address,address)"(
      owner: string,
      spender: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    approve(
      spender: string,
      amount: BigNumberish,
      overrides?: CallOverrides
    ): Promise<boolean>;

    "approve(address,uint256)"(
      spender: string,
      amount: BigNumberish,
      overrides?: CallOverrides
    ): Promise<boolean>;

    approveExpense(
      _expenseIndex: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    "approveExpense(uint16)"(
      _expenseIndex: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    balanceOf(account: string, overrides?: CallOverrides): Promise<BigNumber>;

    "balanceOf(address)"(
      account: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    decimals(overrides?: CallOverrides): Promise<number>;

    "decimals()"(overrides?: CallOverrides): Promise<number>;

    decreaseAllowance(
      spender: string,
      subtractedValue: BigNumberish,
      overrides?: CallOverrides
    ): Promise<boolean>;

    "decreaseAllowance(address,uint256)"(
      spender: string,
      subtractedValue: BigNumberish,
      overrides?: CallOverrides
    ): Promise<boolean>;

    expenses(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<{
      fromAddress: string;
      forAddress: string;
      amount: BigNumber;
      description: string;
      date: BigNumber;
      ipfsHash: string;
      isApproved: boolean;
      0: string;
      1: string;
      2: BigNumber;
      3: string;
      4: BigNumber;
      5: string;
      6: boolean;
    }>;

    "expenses(uint256)"(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<{
      fromAddress: string;
      forAddress: string;
      amount: BigNumber;
      description: string;
      date: BigNumber;
      ipfsHash: string;
      isApproved: boolean;
      0: string;
      1: string;
      2: BigNumber;
      3: string;
      4: BigNumber;
      5: string;
      6: boolean;
    }>;

    increaseAllowance(
      spender: string,
      addedValue: BigNumberish,
      overrides?: CallOverrides
    ): Promise<boolean>;

    "increaseAllowance(address,uint256)"(
      spender: string,
      addedValue: BigNumberish,
      overrides?: CallOverrides
    ): Promise<boolean>;

    name(overrides?: CallOverrides): Promise<string>;

    "name()"(overrides?: CallOverrides): Promise<string>;

    pendingExpenses(overrides?: CallOverrides): Promise<number>;

    "pendingExpenses()"(overrides?: CallOverrides): Promise<number>;

    removeAdmin(_user: string, overrides?: CallOverrides): Promise<void>;

    "removeAdmin(address)"(
      _user: string,
      overrides?: CallOverrides
    ): Promise<void>;

    roles(arg0: string, overrides?: CallOverrides): Promise<number>;

    "roles(address)"(arg0: string, overrides?: CallOverrides): Promise<number>;

    submitExpense(
      _description: string,
      _amount: BigNumberish,
      _forAddress: string,
      _ipfsHash: string,
      overrides?: CallOverrides
    ): Promise<number>;

    "submitExpense(string,uint256,address,string)"(
      _description: string,
      _amount: BigNumberish,
      _forAddress: string,
      _ipfsHash: string,
      overrides?: CallOverrides
    ): Promise<number>;

    symbol(overrides?: CallOverrides): Promise<string>;

    "symbol()"(overrides?: CallOverrides): Promise<string>;

    totalSupply(overrides?: CallOverrides): Promise<BigNumber>;

    "totalSupply()"(overrides?: CallOverrides): Promise<BigNumber>;

    transfer(
      recipient: string,
      amount: BigNumberish,
      overrides?: CallOverrides
    ): Promise<boolean>;

    "transfer(address,uint256)"(
      recipient: string,
      amount: BigNumberish,
      overrides?: CallOverrides
    ): Promise<boolean>;

    transferFrom(
      sender: string,
      recipient: string,
      amount: BigNumberish,
      overrides?: CallOverrides
    ): Promise<boolean>;

    "transferFrom(address,address,uint256)"(
      sender: string,
      recipient: string,
      amount: BigNumberish,
      overrides?: CallOverrides
    ): Promise<boolean>;

    updateRate(_rate: BigNumberish, overrides?: CallOverrides): Promise<void>;

    "updateRate(uint256)"(
      _rate: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    updateReward(
      _type: string,
      _amount: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    "updateReward(string,uint256)"(
      _type: string,
      _amount: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;
  };

  filters: {
    Approval(
      owner: string | null,
      spender: string | null,
      value: null
    ): EventFilter;

    ExpenseApproved(
      admin: null,
      expenseIndex: null,
      fromAddress: string | null,
      forAddress: string | null,
      amount: null,
      description: null
    ): EventFilter;

    ExpenseSubmitted(
      fromAddress: null,
      forAddress: null,
      amount: null,
      description: null
    ): EventFilter;

    Transfer(from: string | null, to: string | null, value: null): EventFilter;
  };

  estimateGas: {
    addAdmin(_user: string, overrides?: Overrides): Promise<BigNumber>;

    "addAdmin(address)"(
      _user: string,
      overrides?: Overrides
    ): Promise<BigNumber>;

    adminCount(overrides?: CallOverrides): Promise<BigNumber>;

    "adminCount()"(overrides?: CallOverrides): Promise<BigNumber>;

    allowance(
      owner: string,
      spender: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "allowance(address,address)"(
      owner: string,
      spender: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    approve(
      spender: string,
      amount: BigNumberish,
      overrides?: Overrides
    ): Promise<BigNumber>;

    "approve(address,uint256)"(
      spender: string,
      amount: BigNumberish,
      overrides?: Overrides
    ): Promise<BigNumber>;

    approveExpense(
      _expenseIndex: BigNumberish,
      overrides?: Overrides
    ): Promise<BigNumber>;

    "approveExpense(uint16)"(
      _expenseIndex: BigNumberish,
      overrides?: Overrides
    ): Promise<BigNumber>;

    balanceOf(account: string, overrides?: CallOverrides): Promise<BigNumber>;

    "balanceOf(address)"(
      account: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    decimals(overrides?: CallOverrides): Promise<BigNumber>;

    "decimals()"(overrides?: CallOverrides): Promise<BigNumber>;

    decreaseAllowance(
      spender: string,
      subtractedValue: BigNumberish,
      overrides?: Overrides
    ): Promise<BigNumber>;

    "decreaseAllowance(address,uint256)"(
      spender: string,
      subtractedValue: BigNumberish,
      overrides?: Overrides
    ): Promise<BigNumber>;

    expenses(arg0: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;

    "expenses(uint256)"(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    increaseAllowance(
      spender: string,
      addedValue: BigNumberish,
      overrides?: Overrides
    ): Promise<BigNumber>;

    "increaseAllowance(address,uint256)"(
      spender: string,
      addedValue: BigNumberish,
      overrides?: Overrides
    ): Promise<BigNumber>;

    name(overrides?: CallOverrides): Promise<BigNumber>;

    "name()"(overrides?: CallOverrides): Promise<BigNumber>;

    pendingExpenses(overrides?: CallOverrides): Promise<BigNumber>;

    "pendingExpenses()"(overrides?: CallOverrides): Promise<BigNumber>;

    removeAdmin(_user: string, overrides?: Overrides): Promise<BigNumber>;

    "removeAdmin(address)"(
      _user: string,
      overrides?: Overrides
    ): Promise<BigNumber>;

    roles(arg0: string, overrides?: CallOverrides): Promise<BigNumber>;

    "roles(address)"(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    submitExpense(
      _description: string,
      _amount: BigNumberish,
      _forAddress: string,
      _ipfsHash: string,
      overrides?: PayableOverrides
    ): Promise<BigNumber>;

    "submitExpense(string,uint256,address,string)"(
      _description: string,
      _amount: BigNumberish,
      _forAddress: string,
      _ipfsHash: string,
      overrides?: PayableOverrides
    ): Promise<BigNumber>;

    symbol(overrides?: CallOverrides): Promise<BigNumber>;

    "symbol()"(overrides?: CallOverrides): Promise<BigNumber>;

    totalSupply(overrides?: CallOverrides): Promise<BigNumber>;

    "totalSupply()"(overrides?: CallOverrides): Promise<BigNumber>;

    transfer(
      recipient: string,
      amount: BigNumberish,
      overrides?: Overrides
    ): Promise<BigNumber>;

    "transfer(address,uint256)"(
      recipient: string,
      amount: BigNumberish,
      overrides?: Overrides
    ): Promise<BigNumber>;

    transferFrom(
      sender: string,
      recipient: string,
      amount: BigNumberish,
      overrides?: Overrides
    ): Promise<BigNumber>;

    "transferFrom(address,address,uint256)"(
      sender: string,
      recipient: string,
      amount: BigNumberish,
      overrides?: Overrides
    ): Promise<BigNumber>;

    updateRate(_rate: BigNumberish, overrides?: Overrides): Promise<BigNumber>;

    "updateRate(uint256)"(
      _rate: BigNumberish,
      overrides?: Overrides
    ): Promise<BigNumber>;

    updateReward(
      _type: string,
      _amount: BigNumberish,
      overrides?: Overrides
    ): Promise<BigNumber>;

    "updateReward(string,uint256)"(
      _type: string,
      _amount: BigNumberish,
      overrides?: Overrides
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    addAdmin(
      _user: string,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    "addAdmin(address)"(
      _user: string,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    adminCount(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "adminCount()"(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    allowance(
      owner: string,
      spender: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "allowance(address,address)"(
      owner: string,
      spender: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    approve(
      spender: string,
      amount: BigNumberish,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    "approve(address,uint256)"(
      spender: string,
      amount: BigNumberish,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    approveExpense(
      _expenseIndex: BigNumberish,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    "approveExpense(uint16)"(
      _expenseIndex: BigNumberish,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    balanceOf(
      account: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "balanceOf(address)"(
      account: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    decimals(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "decimals()"(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    decreaseAllowance(
      spender: string,
      subtractedValue: BigNumberish,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    "decreaseAllowance(address,uint256)"(
      spender: string,
      subtractedValue: BigNumberish,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    expenses(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "expenses(uint256)"(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    increaseAllowance(
      spender: string,
      addedValue: BigNumberish,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    "increaseAllowance(address,uint256)"(
      spender: string,
      addedValue: BigNumberish,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    name(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "name()"(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    pendingExpenses(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "pendingExpenses()"(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    removeAdmin(
      _user: string,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    "removeAdmin(address)"(
      _user: string,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    roles(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "roles(address)"(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    submitExpense(
      _description: string,
      _amount: BigNumberish,
      _forAddress: string,
      _ipfsHash: string,
      overrides?: PayableOverrides
    ): Promise<PopulatedTransaction>;

    "submitExpense(string,uint256,address,string)"(
      _description: string,
      _amount: BigNumberish,
      _forAddress: string,
      _ipfsHash: string,
      overrides?: PayableOverrides
    ): Promise<PopulatedTransaction>;

    symbol(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "symbol()"(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    totalSupply(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "totalSupply()"(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    transfer(
      recipient: string,
      amount: BigNumberish,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    "transfer(address,uint256)"(
      recipient: string,
      amount: BigNumberish,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    transferFrom(
      sender: string,
      recipient: string,
      amount: BigNumberish,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    "transferFrom(address,address,uint256)"(
      sender: string,
      recipient: string,
      amount: BigNumberish,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    updateRate(
      _rate: BigNumberish,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    "updateRate(uint256)"(
      _rate: BigNumberish,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    updateReward(
      _type: string,
      _amount: BigNumberish,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    "updateReward(string,uint256)"(
      _type: string,
      _amount: BigNumberish,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;
  };
}