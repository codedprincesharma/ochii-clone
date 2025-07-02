import React from "react";

function Feature() {
  return (
    <div className="w-full flex flex-col px-4 sm:px-6 md:px-8 lg:px-12 py-10 gap-5 bg-[#E6E6E6]">
      {/* Title */}
      <div>
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-mono mt-5 capitalize tracking-tighter">
          Featured projects
        </h1>
        <div className="w-full h-[1px] bg-gray-500 mt-10 md:mt-20"></div>
      </div>

      {/* Cards */}
      <div className="w-full mt-6">
        <div className="flex flex-col md:flex-row gap-8 md:gap-20">
          {/* Card 1 */}
          <div className="w-full md:w-1/2 rounded-xl overflow-hidden">
            <div
              className="w-full h-[250px] sm:h-[350px] md:h-[420px] lg:h-[500px] bg-cover bg-center hover:scale-95 duration-200 rounded-xl cursor-pointer"
              style={{
                backgroundImage:
                  "url(https://ochi.design/wp-content/uploads/2025/02/Salience_Website_cover-1326x1101.png)",
              }}
            ></div>
          </div>

          {/* Card 2 */}
          <div className="w-full md:w-1/2 rounded-xl overflow-hidden">
            <div
              className="w-full h-[250px] sm:h-[350px] md:h-[420px] lg:h-[500px] bg-cover bg-center hover:scale-95 duration-200 rounded-xl cursor-pointer"
              style={{
                backgroundImage:
                  "url(https://ochi.design/wp-content/uploads/2024/08/CS_Website_1-1326x1101.png)",
              }}
            ></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Feature;
