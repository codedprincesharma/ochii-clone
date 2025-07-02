import React from "react";
import { FaArrowUp } from "react-icons/fa6";

function Landing() {
  return (
    <div className="w-full min-h-screen pt-1">
      {/* Headline Text */}
      <div className="textstructure mt-20 px-6 md:px-20">
        <div className="masker">
          <h1 className="uppercase text-4xl sm:text-6xl md:text-7xl lg:text-9xl leading-[1] tracking-tight font-medium">
            we create
          </h1>
        </div>
        <div className="masker flex gap-2 items-center">
          <div className="w-[40px] h-[40px] sm:w-[60px] sm:h-[60px] md:w-[8vw] md:h-[11vh] bg-red-500 mt-4 rounded-md"></div>
          <h1 className="uppercase text-4xl sm:text-6xl md:text-7xl lg:text-9xl leading-[1] tracking-tight font-medium">
            eye-opening
          </h1>
        </div>
        <div className="masker">
          <h1 className="uppercase text-4xl sm:text-6xl md:text-7xl lg:text-9xl leading-[1] tracking-tight font-medium">
            presentations
          </h1>
        </div>
      </div>

      {/* Divider */}
      <div className="w-full h-[1px] bg-gray-400 mt-10 md:mt-16"></div>

      {/* Footer Section */}
      <div className="flex flex-col md:flex-row justify-between gap-6 p-6 md:p-20 pt-5 bg-[#F1F1F1] font-light text-base sm:text-lg">
        <p>For public and private companies</p>
        <p>From the first pitch to IPO</p>

        <div className="flex gap-4 flex-wrap md:flex-nowrap">
          <button className="border border-black rounded-3xl px-5 py-2 hover:bg-black hover:text-white transition duration-300">
            start the project
          </button>
          <div className="border border-black rounded-full p-3 flex items-center justify-center">
            <FaArrowUp />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Landing;
