import React from "react";

function Eyes() {
  return (
    <div className="eyes w-full h-screen overflow-hidden">
      <div className="relative w-full h-full bg-amber-200 bg-[url('https://ochi.design/wp-content/uploads/2022/05/Top-Viewbbcbv-1-scaled.jpg')] bg-cover bg-center flex items-center justify-center">
        {/* Eye Container */}
        <div className="absolute w-[80%] sm:w-[60%] md:w-[40vw] h-[20vh] md:h-[30vh] flex items-center justify-center gap-6 sm:gap-12">
          {/* Left Eye */}
          <div className="w-[55px] h-[55px] sm:w-[70px] sm:h-[70px] md:w-[80px] md:h-[80px] rounded-full bg-white flex items-center justify-center">
            <div className="w-[30px] h-[30px] sm:w-[40px] sm:h-[40px] md:w-[45px] md:h-[45px] bg-black rounded-full" />
          </div>

          {/* Right Eye */}
          <div className="w-[55px] h-[55px] sm:w-[70px] sm:h-[70px] md:w-[80px] md:h-[80px] rounded-full bg-white flex items-center justify-center">
            <div className="w-[30px] h-[30px] sm:w-[40px] sm:h-[40px] md:w-[45px] md:h-[45px] bg-black rounded-full" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Eyes;
