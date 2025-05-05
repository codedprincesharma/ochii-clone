import React from "react";

function card() {
  return (
    <div className=" w-full h-screen flex bg-zinc-200 gap-5 px-10 items-center">
      <div className="cardcontainer w-1/2 h-[60vh] ">
        <div className=" w-full h-full rounded-2xl bg-[#004D43] flex items-center justify-center">
          <img
            src="https://ochi.design/wp-content/uploads/2022/04/logo002.svg"
            alt=""
          />
        </div>
      </div>
      <div className="cardcontainer w-1/2 h-[60vh] flex gap-5">
        <div className=" w-1/2 h-full rounded-2xl bg-[#08322d] flex items-center justify-center">
          <img
            className=" w-40 h-40 rounded-full"
            src="https://ochi.design/wp-content/uploads/2022/04/logo003.png"
            alt=""
          />
        </div>
        <div className=" w-1/2 h-full rounded-2xl bg-[#1e3430]"></div>
      </div>
    </div>
  );
}

export default card;
