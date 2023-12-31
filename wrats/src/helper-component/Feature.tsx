import React from "react";

type Props = {
  heading: string;
  subheading: string;
  children: React.ReactNode;
};

const Feature = (props: Props) => {
  return (
    <>
      <div
        className="cursor-default max-w-[650px] bg-[#2d2f3e]  p-3 py-10 md:py-5 rounded-md flex flex-col
         space-y-4 items-center"
      >
        <div className="flex space-y-5 md:flex-col items-center">
          {props.children}
          <h4
            className="montserrat-subheading 
            text-gray-300  md:text-2xl text-xl font-extrabold mb-2"
          >
            {props.heading}
          </h4>
        </div>
        <p
          className="leading-6  w-[75%] md:text-md text-base text-gray-400 
            font-light montserrat-subheading"
        >
          {props.subheading}
        </p>
      </div>
    </>
  );
};

export default Feature;
