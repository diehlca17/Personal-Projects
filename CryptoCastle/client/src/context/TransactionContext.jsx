import React, { useEffect, useState } from 'react';
import { ethers } from "ethers";

import { contractABI, contractAddress } from '../utils/constants';


// TransactionContext
export const TransactionContext = React.createContext();

// Ethereum object opens metamask wallet
const { ethereum } = window;

// Get Ethereum Contract using contractAddress, contractABI, and signer
const getEthereumContract = () => {

    // Select Provider
    const provider = new ethers.providers.Web3Provider(ethereum);

    // Signer
    const signer = provider.getSigner();

    // transactionContract
    const transactionContract = new ethers.Contract(contractAddress, contractABI, signer);

    return transactionContract;

}

// TransactionProvider 
export const TransactionsProvider = ({ children }) => {
    const [formData, setformData] = useState({ addressTo: "", amount: "", keyword: "", message: "" });
    const [currentAccount, setCurrentAccount] = useState("");
    const [isLoading, setIsLoading] = useState(false);
    const [transactionCount, setTransactionCount] = useState(localStorage.getItem('transactionCount'));
    const [transactions, setTransactions] = useState([]);

    const handleChange = (e, name) => {
        setformData((prevState) => ({ ...prevState, [name]: e.target.value }));

    }

    // getAllTransactions from selected current account
    const getAllTransactions = async () => {
        try {

            // If no ethereum object found, Metamask needs to be installed
            if (!ethereum) return alert("Please install MetaMask.");
            const transactionContract = getEthereumContract();
            const availableTransactions = await transactionContract.getAllTransactions();
            const structuredTransactions = availableTransactions.map((transaction) => ({
                addressTo: transaction.receiver,
                addressFrom: transaction.sender,
                timestamp: new Date(transaction.timestamp.toNumber() * 1000).toLocaleString(),
                message: transaction.message,
                keyword: transaction.keyword,
                amount: parseInt(transaction.amount._hex) / (10 ** 18)
              }));

            console.log(structuredTransactions);
            setTransactions(structuredTransactions);

            console.log(availableTransactions);
        } catch (error) {
            console.log(error);
        }
    }


    // checkIfWalletIsConnected async function
    const checkIfWalletIsConnected = async () => {
        try {

            // If no ethereum object found, Metamask needs to be installed
            if (!ethereum) return alert("Please install MetaMask.");

            const accounts = await ethereum.request({ method: "eth_accounts" });

            if (accounts.length) {
                setCurrentAccount(accounts[0]);

                getAllTransactions();
            } else {
                console.log("No accounts found");
            }
        } catch (error) {
            console.log(error);
        }
    };

    // checkIfTransactionsExist async function
    const checkIfTransactionsExists = async () => {
        try {
            if (ethereum) {
                const transactionsContract = getEthereumContract();
                const currentTransactionCount = await transactionsContract.getTransactionCount();

                window.localStorage.setItem("transactionCount", transactionCount);
            }
        } catch (error) {
            console.log(error);

            throw new Error("No ethereum object");
        }
    };

    // sendTransaction async function
    const sendTransaction = async () => {

        try {

            // If no ethereum object found, Metamask needs to be installed
            if (!ethereum) return alert("Please install MetaMask");

            const { addressTo, amount, keyword, message } = formData;
            const transactionContract = getEthereumContract();
            const parsedAmount = ethers.utils.parseEther(amount);

            // Transaction Details
            await ethereum.request({
                method: 'eth_sendTransaction',
                params: [{
                    from: currentAccount,
                    to: addressTo,
                    gas: '0x5208', //21000 gwei
                    value: parsedAmount._hex, //0.00001
                }]
            });

            // Get transaction hash
            const transactionHash = await transactionContract.addToBlockchain(addressTo, parsedAmount, message, keyword);

            // Transaction happening
            setIsLoading(true);
            console.log(`Loading - ${transactionHash.hash}`);
            await transactionHash.wait();
            setIsLoading(false);
            console.log(`Success - ${transactionHash.hash}`);
            alert("Success! Your transaction has been posted.");

            const transactionCount = await transactionContract.getTransactionCount();

            setTransactionCount(transactionCount.toNumber());

        } catch (error) {
            console.log(error);
        }
    }

    // connectWallet async function
    const connectWallet = async () => {
        try {

            // If no ethereum object found, Metamask needs to be installed
            if (!ethereum) return alert("Please install MetaMask");
            const accounts = await ethereum.request({ method: "eth_requestAccounts" });
            setCurrentAccount(accounts[0]);

        } catch (error) {
            console.log(error);

            throw new error("No ethereum object.");
        }
    }

    useEffect(() => {
        checkIfWalletIsConnected();
        checkIfTransactionsExists();
    }, []);

    return (
        <TransactionContext.Provider value={{ connectWallet, currentAccount, formData, setformData, handleChange, sendTransaction, transactions, isLoading }}>
            { children}
        </TransactionContext.Provider>
    )
}