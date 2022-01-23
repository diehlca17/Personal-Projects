import logo from '../../images/cryptocastlelogo.png';

const Footer = () => {
    return (
        <div id="footer" className="w-full flex md:justify-center items-between items-center flex-col p-4 gradient-bg-footer">
            <div className="w-full flex sm:flex-row flex-col justify-between items-center my-4">
                <div className="flex flex-[0.5] justify-center items-center">
                    <a href="#home"><img src={logo} alt="logo" className="w-32"></img></a>
                </div>
                <div className="flex flex-1 justify-evenly items-center flex-wrap sm:md-0 md-5 w-4">
                    <p className="text-lime-200 text-base text-center mx-2 cursor-pointer"><a href="#welcome">Welcome</a></p>
                    <p className="text-lime-200 text-base text-center mx-2 cursor-pointer"><a href="#services">Services</a></p>
                    <p className="text-lime-200 text-base text-center mx-2 cursor-pointer"><a href="#transaction">Transactions</a></p>
                    <p className="text-lime-200 text-base text-center mx-2 cursor-pointer"><a href="#footer">Contact Us</a></p>
                </div>
            </div>
            <div className="flex justify-center items-center flex-col mt-5">
                <p className="text-white text-sm text-center">Come join us!</p>
                <p className="text-white text-sm text-center font-medium mt-2">info@cryptocastledapp.com</p>
            </div>

            <div className="sm:w-[90%] w-full h-[0.25px] bg-gray-400 mt-5 " />

            <div className="sm:w-[90%] w-full flex justify-between items-center mt-3">
                <p className="text-white text-left text-xs">@cryptocastledapp.com</p>
                <p className="text-white text-right text-xs">All rights reserved</p>
            </div>
        </div>
    )
}

export default Footer;