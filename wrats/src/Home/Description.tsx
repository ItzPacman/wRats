import React from "react";
// import { MdOutlinePrivacyTip, MdSecurity, MdAlarmOn, MdThumbUpOffAlt } from "react-icons/md";
import wRatsIcon from "../assets/wRatsIcon.png";

const Description = () => {
    return (
        <div className=" montserrat-medium pb-10">
            <div className="flex flex-col items-start px-4">
                {/* Heading */}
                {/* <h2 className="montserrat-heading self-left text-3xl font-semibold  text-gray-400">
          How it works ?
        </h2> */}

                {/* image */}
                <div className="flex flex-col px-8 xl:flex-row-reverse xl:items-center xl:justify-between">
                    <div className="p-4 py-10 md:mx-auto">
                        <img
                            className="w-[789px] rounded-[1rem] outline-none"
                            src={wRatsIcon}
                            alt=""
                        />
                    </div>

                    {/* paragraph */}
                    <div className="montserrat-subheading flex flex-col break-words p-8 xl:w-[40%]">
                        <ul className="list-inside list-disc space-y-6">
                            <li className="mb-2 text-left text-gray-400">
                                <span className="break-words font-semibold text-gray-400">
                                    Step 1 :{" "}
                                </span>
                                Generate a unique Link by clicking the generate
                                button. Make sure to store the keys  in a secure location.
                            </li>
                            <li className="mb-2 text-left text-gray-400">
                                <span className="font-semibold text-gray-400">Step 2 : </span> Share
                                the link with the intended sender.
                            </li>
                            <li className="mb-2 text-left text-gray-400">
                                <span className="font-semibold text-gray-400">Step 3 : </span> The
                                sender will create an stealth address from your shared key and send
                                funds to it using the <b>Transfer</b> button.
                            </li>
                            <li className="mb-2 text-left text-gray-400">
                                <span className="font-semibold text-gray-400">Step 4 : </span> After
                                the funds have been sent, click on <b>Scan</b> or paste your <b>secret Key </b>
                                to retrieve the private key and access the
                                specific stealth address on which the funds have been sent.
                            </li>
                            <li className="mb-2 text-left text-gray-400">
                                <span className="font-semibold text-gray-400">Summary : </span> By
                                following these steps, you can easily and privately receive
                                funds using wRats. Should you have any queries or feedback,
                                please do not hesitate to contact us by our discord for
                                assistance..
                            </li>
                        </ul>
                    </div>

                 
                </div>
            </div>

        </div>


    );
};

export default Description;