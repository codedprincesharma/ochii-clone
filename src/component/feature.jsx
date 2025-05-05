import React from "react";

function Feature() {
  return (
    <div className="w-full  flex flex-col p-8 gap-5  bg-[#E6E6E6] ">
      <div>
        <h1 className=" text-5xl font-mono mt-5 capitalize tracking-tighter">
          Featured projects
        </h1>
        <div className="w-full h-[1px]  bg-gray-500 mt-20"></div>
      </div>
      <div className="px-10">
        <div className="card w-full h-full flex p-5 gap-20 mt-10 ">
          <div className=" cardcontainer w-1/2 h-120 rounded-xl overflow-hidden l">
            <div className=" w-full h-full cursor-pointer  bg-[url(https://ochi.design/wp-content/uploads/2025/02/Salience_Website_cover-1326x1101.png)] bg-cover hover:scale-95 duration-200 rounded-xl "></div>
          </div>
          <div className=" cardcontainer w-1/2 h-120 overflow-hidden rounded-xl ">
            <div className=" w-full h-full cursor-pointer  rounded-xl bg-[url(https://ochi.design/wp-content/uploads/2024/08/CS_Website_1-1326x1101.png)] bg-cover hover:scale-95 duration-200 "></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Feature;
