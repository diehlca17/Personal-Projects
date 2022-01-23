import React, { useContext } from 'react';
import { TransactionContext } from '../context/TransactionContext';
import { dummyData } from '../utils/dummyData';
import { shortenAddress } from '../utils/shortenAddress';
import useFetch from '../hooks/useFetch';

// TransactionCard to be rendered
const TransactionCard = ({ addressTo, addressFrom, timestamp, message, keyword, amount, url }) => {

    const gifUrl = useFetch({ keyword });

    return (
        <div className="bg-[#181918] m-4 flex flex-1
      2xl:min-w-[450px]
      2xl:max-w-[500px]
      sm:min-w-[270px]
      sm:max-w-[300px]
      min-w-full
      flex-col p-3 rounded-md hover:shadow-2xl"
        >
            <div className="flex flex-col items-center w-full mt-3">

                <div className="w-full mb-6 p-2">

                    {/* Address From */}
                    <a href={`https://ropsten.etherscan.io/address/${addressFrom}`} target="_blank" rel="noreferrer">
                        <p className="text-emerald-700 text-base">From: {shortenAddress(addressFrom)}</p>
                    </a>

                    {/* Address To */}
                    <a href={`https://ropsten.etherscan.io/address/${addressTo}`} target="_blank" rel="noreferrer">
                        <p className="text-emerald-700 text-base">To: {shortenAddress(addressTo)}</p>
                    </a>

                    {/* Amount ETH */}
                    <p className="text-emerald-200	 text-base">Amount: {amount} ETH</p>
                    < br />

                    {/* Message */}
                    {message && (
                        <>
                            <br />
                            <p className="text-lime-100 text-base">Message: {message}</p>
                        </>
                    )}

                    <br />

                    {/* Gif */}
                    <img
                        src={gifUrl || url}
                        alt="nature"
                        className="w-full h-64 2xl:h-96 rounded-md shadow-lg object-cover"
                    />

                </div>

                <div className="bg-black p-3 px-5 w-max rounded-3xl -mt-5 shadow-2">
                    {/* Timestamp */}
                    <p className="text-[#37c7da] font-bold">{timestamp}</p>
                </div>
            </div>

        </div>
    )
}

// Transactions Component
const Transactions = () => {
    const { currentAccount, transactions } = useContext(TransactionContext);

    return (
        <div className="flex w-full justify-center items-center 2xl:px-20 gradient-bg-transactions">

            {/* If account is not connected, connect account to see latest transactions on selected network */}
            <div className="flex flex-col md:p-12 py-12 px-4">
                {currentAccount ? (
                    <h3 id="transaction" className="text-emerald-200 text-3xl text-center my-2">Latest Transactions </h3>
                ) : (
                        <h3 id="transaction" className="text-emerald-200 text-3xl text-center my-2">Connect account to see latest transactions </h3>
                    )
                }

                {/* TransactionCard Rendering */}
                <div className="flex flex-wrap justify-center items-center mt-10">
                    {transactions.reverse().map((transaction, i) => (
                        <TransactionCard key={i} {...transaction} />
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Transactions;