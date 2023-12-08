import React, { useState } from "react";
import { IoAddSharp } from "react-icons/io5";

type Props = {};

const Faq = (props: Props) => {
  const [showAnswers, setShowAnswers] = useState<boolean[]>([]);

  const toggleAnswer = (index: number) => {
    const updatedShowAnswers = [...showAnswers];
    updatedShowAnswers[index] = !updatedShowAnswers[index];
    setShowAnswers(updatedShowAnswers);
  };

  return (
    <div
      id="faq"
      className="p-5 py-10 flex flex-col items-center justify-center bg-[#1E202Dff] "
    >
      <h1 className="montserrat-subheading text-4xl mb-6 text-gray-400  pb-2 ">
        FAQ
      </h1>
      <div
        className="xl:p-14 xl:px-20 bg-[#2d2f3e] transition-all ease-linear md:w-[790px] lg:w-[900px] p-5 rounded-md
       shadow-lg flex flex-col items-start justify-center"
      >
        <h4
          onClick={() => toggleAnswer(0)}
          className={`${showAnswers[0]} text-left justify-between w-full  
        lg:text-lg cursor-pointer flex items-center
         montserrat-subheading py-4 text-gray-400 gap-16`}
        >
          1: what is Wrats?
          <span>
            {showAnswers[0] ? (
              <IoAddSharp
                color="#ee6f08"
                className="lg:text-4xl text-3xl rotate-45 transition-all duration-100"
              />
            ) : (
              <IoAddSharp
                color="#ee6f08"
                className="lg:text-4xl text-3xl duration-100"
              />
            )}
          </span>
        </h4>
        {showAnswers[0] && (
          <p className=" w-[90%] px-4  pb-5  montserrat-subheading text-gray-400 text-left">
            Wrats is a privacy solution allows the receiver to receive funds privately by sharing a linq with the sender.

          </p>
        )}
        <h4
          onClick={() => toggleAnswer(1)}
          className={`${showAnswers[1]} text-left justify-between w-full  
        lg:text-lg cursor-pointer flex items-center
         montserrat-subheading py-4 text-gray-400 gap-16`}
        >
          2: How does wRats ensure the privacy and confidentiality of financial
          transactions?
          <span>
            {showAnswers[1] ? (
              <IoAddSharp
                color="#ee6f08"
                className="lg:text-4xl text-3xl rotate-45 transition-all duration-100"
              />
            ) : (
              <IoAddSharp
                color="#ee6f08"
                className="lg:text-4xl text-3xl duration-100"
              />
            )}
          </span>
        </h4>
        {showAnswers[1] && (
          <p className=" w-[90%] px-4  pb-5  montserrat-subheading text-gray-400 text-left">
            wRats employs secure stealth addresses and a one-time public key
            mechanism, making it hard to trace or monitor
            transactions by anyone else other than the receipent. This ensures enhanced privacy and
            confidentiality.
          </p>
        )}
       
        <h4
          onClick={() => toggleAnswer(3)}
          className={`${showAnswers[3] && "dark:text-[#09d8a1]"
            } text-left justify-between w-full dark:text-gray-400 dark:hover:text-[white] dark:hover:shadow-lg 
        lg:text-lg cursor-pointer flex items-center
         montserrat-subheading py-4 text-gray-400 gap-16`}
        >
          4: How do I generate a unique keys in wRats?
          <span>
            {showAnswers[3] ? (
              <IoAddSharp
                color="#ee6f08"
                className="lg:text-4xl text-3xl rotate-45 transition-all duration-100"
              />
            ) : (
              <IoAddSharp
                color="#ee6f08"
                className="lg:text-4xl text-3xl duration-100"
              />
            )}
          </span>
        </h4>
        {showAnswers[3] && (
          <p className=" w-[90%] px-4  pb-5  montserrat-subheading text-gray-400 text-left">
            Simply click the "generate" button , and  unique wRats key will be
            generated for you . Make sure to save the accompanying secret
            in a secure place for future use .
          </p>
        )}
       
  
     


      </div>
    </div>
  );
};

export default Faq;