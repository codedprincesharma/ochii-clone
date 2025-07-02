import React from "react";

function Card() {
  return (
    <div className="w-full min-h-screen flex flex-col md:flex-row bg-zinc-200 gap-5 px-4 sm:px-8 md:px-10 py-10 items-center">
      {/* Left card */}
      <div className="w-full md:w-1/2 h-[40vh] md:h-[60vh]">
        <div className="w-full h-full rounded-2xl bg-[#004D43] flex items-center justify-center">
          <img
            src="https://ochi.design/wp-content/uploads/2022/04/logo002.svg"
            alt="logo"
            className="w-[100px] sm:w-[120px] md:w-[150px]"
          />
        </div>
      </div>

      {/* Right cards container */}
      <div className="w-full md:w-1/2 h-[40vh] md:h-[60vh] flex flex-col sm:flex-row gap-5">
        {/* Top right card */}
        <div className="w-full sm:w-1/2 h-1/2 sm:h-full rounded-2xl bg-[#08322d] flex items-center justify-center">
          <img
            className="w-24 h-24 sm:w-32 sm:h-32 md:w-40 md:h-40 rounded-full"
            src="https://ochi.design/wp-content/uploads/2022/04/logo003.png"
            alt="logo-2"
          />
        </div>

        {/* Bottom right card */}
        <div className="w-full sm:w-1/2 h-1/2 sm:h-full rounded-2xl bg-[#1e3430]" />
      </div>
    </div>
  );
}

export default Card;
