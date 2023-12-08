import React from "react";
import Logo from "../Logos/Logo.png";
import { Link } from "react-scroll";

//npm i --save-dev @types/react-scroll
// from-white to-black text-transparent bg-clip-text

type Props = {};

const Navbar = (props: Props) => {
  return (
    <div className="bg-[#1E202Dff] text-white xl:px-28 md:px-22 px-8 p-5 flex : ;
        justify-between items-center"
    >
      {/* logo left */}
      <div className="-ml-6 flex items-center">
        <img src={Logo} alt="" className="w-[109px] h-[104px]" />
        <h1 className="-ml-2 montserrat-subheading sm:text-[1.8rem] font-extrabold text-[1.6rem] text-white">
          wRats
        </h1>
      </div>
      {/* right side */}
     
    </div>
  );
};

export default Navbar;