import React from "react";
import { useNavigate } from "react-router-dom";
import Logo from "../Logos/Logo.png";
import { Link } from "react-scroll";
import wRatsIcon from "../assets/wRatsIcon.png";
import Banner from "./Banner";


const Header = () => {
  const Valid = () => {
    // if(!window.tronWeb){
    //   alert('Please Install Tron Wallet')
    //   return
    // }
    navigate("/wRats");
  };

  const navigate = useNavigate();
  return (
    <div className="bg-[#1E202Dff] p-4 px-7">

      {/* at the bottom of the logo */}
      <div
        className="md:px-22 flex items-center justify-between space-y-1
        px-3 py-10 text-gray-600 sm:px-5 sm:py-16 md:flex-row xl:px-52"
      >
        {/* left side */}
        <div className="flex flex-col items-start space-y-4">
          <h2
            className="montserrat-subheading text-left text-[1.7rem] font-bold 
          text-gray-200 sm:text-[2.3rem] xl:text-[3.3rem]"
          >
            Stay Anonymous & secure.
          </h2>
          <p
            className="montserrat-small max-w-[400px] break-words
           text-left text-[1.0rem] text-[#FDF0EF] xl:max-w-[480px] xl:text-[1.3rem]"
          >
            Receive Avax and tokens privately by sharing only a unique link !
          </p>
          <div className="pt-1">
            <button
              className="montserrat-subheading  rounded-full   bg-[#ee6f08] p-2 px-6 text-lg font-bold text-[#1E202Dff]  hover:shadow-xl"
              onClick={Valid}
            >
              Launch app
            </button>
          </div>
        </div>
        {/* right image */}
        <div className="flex items-center justify-end ">
          <img
            className="sm:[mt-0] mt-10 h-[250px] rounded-[1.5rem] object-center shadow-2xl
        shadow-[#5e5e5e] md:mt-0 md:w-[480px] lg:h-[246px]
        xl:h-[290px] xl:w-[520px]"
            src={wRatsIcon}
            // height={1000}
            alt=""
          />
        </div>
      </div>

      <Banner />

    </div>


  );
};

export default Header;