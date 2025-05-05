import React from "react";
import { FaArrowUp } from "react-icons/fa6";
function Landing() {
  return (
    <div className="w-full h-screen pt-1 ">
      <div className="textstructure mt-40 px-20">
        <div className="masker">
          <h1 className="uppercase text-9xl leading-[0.9] tracking-tight font-medium  ">
            we create
          </h1>
        </div>
        <div className="masker flex gap-1">
          <div className="w-[8vw] h-[11vh] bg-red-500 mt-6 rounded-md"></div>
          <h1 className="uppercase text-9xl leading-[0.9] tracking-tight font-medium  ">
            eye-opening
          </h1>
        </div>
        <div className="masker">
          <h1 className="uppercase text-9xl leading-[0.9] tracking-tight font-medium  ">
            presentations
          </h1>
        </div>
      </div>
      <div className="w-full h-[1px] bg-gray-400 mt-16"></div>
      <div className="flex justify-between p-20 pt-5  bg-[#F1F1F1] font-light  ">
        <p>For public and private companies</p>
        <p>From the first pitch to IPO</p>
        <div className="flex gap-5 ">
          <button className="border-1 rounded-3xl flex justify-center p-3 cursor-pointer hover:bg-black hover:text-amber-50">
            start the project
          </button>
          <div className="border-1 rounded-full flex justify-center p-3">
            <FaArrowUp />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Landing;
