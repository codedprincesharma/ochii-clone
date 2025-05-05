import React from "react";

export const about = () => {
  return (
    <>
      <div className=" w-full py-10 bg-[#CDEA68] rounded-t-3xl">
        <h1 className=" text-5xl font-medium tracking-tighter p-20 text-start">
          Ochi is a strategic presentation agency for forward-thinking{" "}
          <span className=" underline">businesses that</span> need to raise
          funds, sell prod­ucts, ex­plain com­plex ideas, and hire great
          peo­ple.
        </h1>
        <div className=" w-full border-t-1 p-10 text-2xl font-sans gap-20 border-zinc-500  flex flex-1/3  ">
          <p className=" w-[70%]">What you can expect:</p>
          <p className=" w-30%] ">
            We partner with the companies and startups who make the world go
            round — they drive the net-zero economy, revolutionize crypto
            treasury management, build photonic chips, and open Michelin-starred
            restaurants.
          </p>
          <p className="w-[40%]  mt-50">S: Instagram Behance Facebook Linkedin</p>
        </div>
        <div className=" w-full border-t-1 border-zinc-500 flex">
          <div className="w-1/2 p-10 capitalize ">
            <h1 className="text-5xl font-bold">our Approach:</h1>
            <button className="bg-black text-white font-semibold text-2xl mt-5 border p-3 rounded-full cursor-pointer hover:bg-amber-100 hover:text-black flex">
              Read More
              <div className="w-3 bg-amber-50 h-3 rounded-full ml-7 mt-3 hover:bg-black"></div>
            </button>
          </div>
          <div className="w-1/2 h-[70vh] p-8 mt-8 mr-10 rounded-3xl bg-[url(https://ochi.design/wp-content/uploads/2022/05/Homepage-Photo-1326x939.jpg)] bg-cover"></div>
        </div>
      </div>
    </>
  );
};

export default about;
