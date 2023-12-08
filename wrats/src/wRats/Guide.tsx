import { useContext } from "react";
import { AppContext } from "./Container";
import { MdVerifiedUser } from "react-icons/md";

type Props = {};

const Instruction = (props: Props) => {
  const { show, totalfunds, totalAddress } = useContext(AppContext);
  return (
    <>
      <div className="sm:w-[50%] md:w-[50%] ml-8 h-full overflow-hidden">
        {show === "transfer" ? (
          <div className="flex text-left flex-col gap-3">
            {" "}
            {/* on Transfer */}
            <h1 className="montserrat-subheading  text-gray-300 font-semibold text-[1.5rem]">
              Transfer
            </h1>
            <div className="w-full py-4 montserrat-heading  text-gray-300 flex flex-col gap-4 items-start">
              <div className="flex space-x-2 ">
                <MdVerifiedUser className="text-[#ee6f08] "size={29} />
                <p className="flex-1">
                Carefully enter the recipient's <b>key</b> into the designated field.

                </p>
              </div>
              <div className="flex space-x-2">
                <MdVerifiedUser className="text-[#ee6f08] "size={29} />
                <p className="flex-1">
                Specify the exact amount and choose the specific token or coin for your transfer.


                </p>
              </div>
              <div className="flex space-x-2">
                <MdVerifiedUser className="text-[#ee6f08] "size={29} />
                <p className="flex-1">
                Securely start the funds transfer by pressing the 'Transfer' button to ensure swift delivery to the stealth address.
                </p>
              </div>
            </div>
            <div className="montserrat-heading  text-gray-300">
              <h4 className="font-semibold text-gray-300 text-[1.1rem]">
                {totalAddress}
              </h4>
              <p>More than {totalAddress} stealth addresses have been generated</p>
            </div>
          </div>
        ) : show === "Scan" ? (
          <div className="flex text-left flex-col gap-3">
            {" "}
            {/* on Accept */}
            <h1 className="montserrat-subheading text-gray-300 font-semibold text-[1.5rem]">
              Scan
            </h1>
            <div className="py-4 montserrat-heading text-gray-300 flex flex-col gap-4 items-start">
              <div className="flex space-x-2">
                <MdVerifiedUser className="text-[#ee6f08] "size={29} />
                <p className="flex-1">
                  Click on the <b>Scan</b> button , paste your <b>secret file key</b> in the designated field
                </p>
              </div>
              <div className="flex space-x-2">
                <MdVerifiedUser className="text-[#ee6f08] "size={29} />
                <p className="flex-1">
                  Click on view transaction to see the list of addresses waiting for you.
                </p>
              </div>

              <div className="flex space-x-2">
                <MdVerifiedUser className="text-[#ee6f08] "size={29} />
                <p className="flex-1">
                  Now copy & save the private key of your stealth addresses and gain access to the funds sent to you.
                </p>
              </div>
            </div>
            <div className="montserrat-heading  text-gray-300 ">
              <h4 className="font-semibold text-[1.1rem]"> {totalfunds}</h4>
              <p>More than {totalfunds} funds have been received</p>
            </div>
          </div>
        )
          :

          <div className="flex text-left flex-col gap-3">
            {" "}
            {/* on Accept */}
            <h1 className="montserrat-subheading text-gray-300 font-semibold text-[1.5rem]">
              Withdraw
            </h1>
            <div className="py-4 montserrat-heading  text-gray-300 flex flex-col gap-4 items-start">
              <div className="flex space-x-2">
                <MdVerifiedUser className="text-[#ee6f08] "size={29} />
                <p className="flex-1">
                Load your saved private key and enter the receipent address to where you wanna withdraw funds
                </p>
              </div>
              <div className="flex space-x-2">
                <MdVerifiedUser className="text-[#ee6f08] "size={29} />
                <p className="flex-1">
                  Click on the <b>Withdraw</b> button to withdraw funds from stealth address.
                </p>
              </div>


            </div>
            <div className="montserrat-heading  text-gray-300 ">
              <h4 className="font-semibold text-[1.1rem]"> {totalfunds}</h4>
              <p>More than {totalfunds} funds have been received</p>
            </div>
          </div>
        }
      </div>
    </>
  );
};

export default Instruction;

/*

*/