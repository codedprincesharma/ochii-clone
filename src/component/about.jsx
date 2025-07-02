import React from "react";

const About = () => {
  return (
    <>
      <div className="w-full py-10 bg-[#CDEA68] rounded-t-3xl">
        {/* Heading */}
        <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-medium tracking-tighter px-6 sm:px-10 md:px-20 text-start leading-tight">
          Ochi is a strategic presentation agency for forward-thinking{" "}
          <span className="underline">businesses that</span> need to raise funds,
          sell prod­ucts, ex­plain com­plex ideas, and hire great peo­ple.
        </h1>

        {/* Expectation Section */}
        <div className="w-full border-t border-zinc-500 flex flex-col lg:flex-row gap-10 px-6 sm:px-10 md:px-20 py-10 text-lg sm:text-xl font-sans">
          <p className="w-full lg:w-[30%] font-semibold">What you can expect:</p>
          <p className="w-full lg:w-[40%]">
            We partner with the companies and startups who make the world go round — 
            they drive the net-zero economy, revolutionize crypto treasury management, 
            build photonic chips, and open Michelin-starred restaurants.
          </p>
          <p className="w-full lg:w-[30%] mt-4 lg:mt-0">
            S: Instagram • Behance • Facebook • Linkedin
          </p>
        </div>

        {/* Our Approach Section */}
        <div className="w-full border-t border-zinc-500 flex flex-col lg:flex-row">
          {/* Left Text */}
          <div className="w-full lg:w-1/2 px-6 sm:px-10 md:px-20 py-10">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold capitalize">
              our Approach:
            </h1>
            <button className="bg-black text-white font-semibold text-base sm:text-xl mt-6 border px-6 py-3 rounded-full cursor-pointer hover:bg-amber-100 hover:text-black flex items-center">
              Read More
              <div className="w-3 h-3 bg-amber-50 rounded-full ml-4 hover:bg-black"></div>
            </button>
          </div>

          {/* Right Image */}
          <div className="w-full lg:w-1/2 h-[40vh] sm:h-[60vh] md:h-[70vh] p-6 mt-4 lg:mt-8 lg:mr-10 rounded-3xl bg-[url('https://ochi.design/wp-content/uploads/2022/05/Homepage-Photo-1326x939.jpg')] bg-cover bg-center"></div>
        </div>
      </div>
    </>
  );
};

export default About;
