import React from "react";
import { IoIosMail } from "react-icons/io";

const Subscribe = () => {
  return (
    <div className="w-full bg-gray-200 flex justify-center items-center py-10">
      <div className="flex flex-col items-center gap-3">
        <h2 className="text-2xl font-medium">Subscribe on our newsletter</h2>
        <p className="text-gray-500 text-[16px] sm:text-[18px]">
          Get daily news on upcoming offers from many suppliers all over the
          world
        </p>
        <div className="flex items-center gap-3">
          <div className="relative">
            <IoIosMail  className="absolute text-3xl top-1"/>
            <input className="outline-0 py-2 pl-10 rounded-md bg-white w-80 sm:w-100" type="email" placeholder="Email" />
          </div>

          <button className="bg-blue-500 py-2 px-5 rounded-md text-white">Subscribe</button>
        </div>
      </div>
    </div>
  );
};

export default Subscribe;
