import React, { useContext } from 'react';
import { TransactionContext } from '../context/TransactionContext';
import { shortenAddress } from '../utils/shortenAddress';
import { HiMenuAlt4 } from "react-icons/hi";
import { AiOutlineClose } from "react-icons/ai";


import logo from "../../images/cryptocastlelogo.png";
import { Link } from 'react-router-dom';
import Welcome from './Welcome';

// Navbar Component
const Navbar = () => {
  const [toggleMenu, setToggleMenu] = React.useState(false);
  const { connectWallet, currentAccount, formData, sendTransaction, handleChange, isLoading } = useContext(TransactionContext);
  console.log(connectWallet);

  return (
    <nav className="w-full flex md:justify-center justify-between items-center p-4">
      <div id="home" className="md:flex-[0.3] flex-initial justify-center items-center">
        <a href="#home"><img src={logo} tintColor="green" alt="logo" className="w-32 cursor-pointer" /></a>
      </div>
      <ul className="text-lime-200 md:flex hidden list-none flex-row justify-between items-center flex-initial">
      
        <li className="px-5"><a href="#welcome">Welcome</a></li>
        <li className="px-5"><a href="#services">Services</a></li>
        <li className="px-5"><a href="#transaction">Transactions</a></li>
        <li className="px-5 pr-10"><a href="#footer">Contact Us</a></li>

        {/* Check if Wallet is Conneted, Show/Hide Wallet Address */}

        {/* Wallet is not connected */}
        {!currentAccount && (<button
          type="button"
          onClick={connectWallet}
          className="flex flex-row justify-center items-center my-5 bg-[#228B22] p-3 rounded-full cursor-pointer hover:bg-[#006400]">
          <p className="text-lime-200 text-sm font-bold">Connect Wallet</p>
        </button>)}

        {/* Wallet is connected */}
        {currentAccount && (<button
          type="button"
          onClick={connectWallet}
          className="flex flex-row justify-center items-center my-5 bg-[#228B22] p-3 rounded-full cursor-pointer hover:bg-[#006400]">
          <p className="text-lime-200 text-sm font-bold">{shortenAddress(currentAccount)}</p>
        </button>)}
      </ul>

      {/* Screen Responsive */}
      <div className="flex relative">
        {!toggleMenu && (
          <HiMenuAlt4 fontSize={28} className="text-white md:hidden cursor-pointer" onClick={() => setToggleMenu(true)} />
        )}
        {toggleMenu && (
          <AiOutlineClose fontSize={28} className="text-white md:hidden cursor-pointer" onClick={() => setToggleMenu(false)} />
        )}

        {/* Toggle Mobile Menu */}
        {toggleMenu && (
          <ul
            className="z-10 fixed -top-0 -right-2 p-3 w-[70vw] h-screen shadow-2xl md:hidden list-none
            flex flex-col justify-start items-end rounded-md blue-glassmorphism text-white animate-slide-in"
          >
            <li className="text-xl w-full my-2"><AiOutlineClose onClick={() => setToggleMenu(false)} /></li>
            <li className="px-5 py-5"><a href="#welcome">Welcome</a></li>
            <li className="px-5 py-5"><a href="#services">Services</a></li>
            <li className="px-5 py-5"><a href="#transaction">Transactions</a></li>
            <li className="px-5 py-5"><a href="#footer">Contact Us</a></li>
          </ul>
        )}
      </div>
    </nav>
  );
};

export default Navbar;