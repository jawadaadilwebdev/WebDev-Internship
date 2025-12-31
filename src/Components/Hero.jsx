import React from "react";

const Hero = () => {
  let categories = [
    "Automobiles",
    "Clothes and wear",
    "Home interiors",
    "Computer and tech",
    "Tools, equipments",
    "Sports and outdoor",
    "Animal and pets",
    "Machinery tools",
    "More category",
  ];
  return (
    <div className="w-[86%] bg-white rounded-xl border border-gray-200 h-105 mt-6 flex justify-between p-5">
      <div className="w-[21%] flex justify-start items-center">
        <ul className=" flex flex-col gap-4">
        {categories.map((category, index) => (
          <li key={index} className="text-gray-600 hover:text-blue-600 hover:font-semibold transition-all hover:bg-slate-100 w-full cursor-pointer">
            {category}
          </li>
        ))}
        </ul>
      </div>
      <div className="w-[55%] banner relative rounded-sm">
        <div className="absolute left-11 top-22">
            <h3 className="text-[28px]">
                Latest trending
            </h3>
            <h2 className="text-[32px] font-semibold">
                Electronic items
            </h2>
            <button className="text-[12px] bg-white px-2 font-medium py-1.5 rounded-sm mt-3">Learn more</button>
        </div>
      </div>
      <div className="w-[21%] flex flex-col justify-around">
        <div className="w-full bg-[#E3F0FF] h-[40%] rounded-sm flex flex-col justify-center items-center gap-4">
            <div className="flex gap-3">
                <img src="/assets/Avatar.png" alt="" />
                <p>Hi, user <br /> let’s get stated</p>
            </div>
            <button className="py-0.5 w-[90%] rounded bg-blue-500 text-white">Join Now</button>
            <button className="py-0.5 w-[90%] rounded bg-white border border-gray-300">Log In</button>
        </div>
        <div className="w-full bg-[#F38332] h-[27%] rounded-sm text-white pt-3 pl-4"><p>Get US $10 off <br /> with a new <br /> supplier</p></div>
        <div className="w-full bg-[#55BDC3] h-[27%] rounded-sm text-white pt-3 pl-4"><p>Send quotes with <br /> supplier <br /> preferences</p></div>
      </div>

    </div> 
  );
};

export default Hero;
