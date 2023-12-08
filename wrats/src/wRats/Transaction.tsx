import React, { useState } from "react";
import Transfer from "./Transfer";
import {Scan} from "./Scan"

import { useContext } from "react";
import { AppContext } from "./Container";
import Withdraw from "./Withdraw";

type Props = {};

const Transactions = (props: Props) => {

  const { setShow ,show} = useContext(AppContext);
  const [buttonStatus, setButtonStatus] = useState({
    transfer: true,
    Scan: false,
    withdraw: false,
    
  });

  const [masterkey, setmasterkey] = useState<string | any>("");
  const [amountTowithdraw, setamountTowithdraw] = useState<string | any>("");

  const handleTransferClick = () => {
    setButtonStatus({
      Scan: false,
      withdraw: false,
      transfer: true,
    });
    setShow("transfer");
  };

  const handleScanClick = () => {
    setButtonStatus({
      Scan: true,
      withdraw: false,
      transfer: false,
    });
    setShow("Scan");
  };

  const handleWithdrawClick = () => {
    setButtonStatus({
      withdraw: true,
      Scan: false,
      transfer: false,
    });
    setShow("withdraw");
  };

  return (
    <div
      className="flex flex-col  backdrop-blur-[50px]
      hover:backdrop-blur-lg"
    >
      <div
        className="max-w-[500px] mx-auto flex montserrat-subheading
        text-[1.4rem] pb-2 border-bgGray font-extrabold"
      >
        <button
          onClick={handleTransferClick}
          className={`text-left sm:px-6 py-1 border-b-1 border-gray-500
        ${buttonStatus.transfer
              ? "shadow-2xl border-b-2 border-[#ee6f08] text-transparent bg-clip-text bg-[#ee6f08]"
              : "text-gray-400"
            }`}
        >
          Transfer
        </button>
        <button
          onClick={handleScanClick}
          className={`px-6 py-1  border-b-1 border-gray-500
          ${buttonStatus.Scan
              ? "shadow-2xl border-b-2 border-[#ee6f08] text-transparent bg-clip-text bg-[#ee6f08]"
              : "text-gray-400"
            }`}
        >
          Scan
        </button>
        <button
          onClick={handleWithdrawClick}
          className={`sm:px-6 py-1 border-b-1 border-gray-500
          ${buttonStatus.withdraw
              ? "shadow-2xl border-b-2 border-[#ee6f08] text-transparent bg-clip-text bg-[#ee6f08]"
              : "text-gray-400"
            }`}
        >
          Withdraw
        </button>
      </div>
      {/* below buttons */}
      <div className="py-1 xl:w-[400px] md:w-[80%] mx-auto w-[87%]">
        {buttonStatus.transfer ? (
          <Transfer />
        ) : buttonStatus.Scan ? (
          <Scan
            setamountTowithdraw={setamountTowithdraw}
            amountTowithdraw={amountTowithdraw}
            setmasterkey={setmasterkey}
            show={show}
            withdrawFunction={handleWithdrawClick}
          />
        ) : (
          <Withdraw
            amountTowithdraw={amountTowithdraw}
            masterkey={masterkey}
            setmasterkey={setmasterkey}
          />
        )}
      </div>
    </div>
  );
};

export default Transactions;