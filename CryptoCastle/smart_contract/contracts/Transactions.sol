// SPDX-License-Identifier: UNLICENSED

pragma solidity ^0.8.0;

// Transactions Contract
contract Transactions {
    uint256 transactionCount;

    // event
    event Transfer(address from, address receiver, uint amount, string message, uint256 timestamp, string keyword);

    // TransferStruct data
    struct TransferStruct{
        address sender;
        address receiver;
        uint amount;
        string message;
        uint256 timestamp;
        string keyword;
    }

    // Array transactions
    TransferStruct[] transactions;

    // addToBlockchain() function with parameters payable receiver, amount, message, keyword
    function addToBlockchain(address payable receiver, uint amount, string memory message, string memory keyword) public {
        transactionCount += 1;
        transactions.push(TransferStruct(msg.sender, receiver, amount, message, block.timestamp, keyword));

        emit Transfer(msg.sender, receiver, amount, message, block.timestamp, keyword);
    }

    // getAllTransactions() function returns transactions
    function getAllTransactions() public view returns (TransferStruct[] memory) {
        return transactions;
    }

    // getTransactionCount() function returns transactionCount
    function getTransactionCount() public view returns (uint256) {
        return transactionCount;
    }
}
