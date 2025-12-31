import React from "react";
import { FaRegCopyright } from "react-icons/fa6";
import { GB } from "country-flag-icons/react/3x2"; // Great Britain

const CopyRight = () => {
  return (
    <div className="bg-[#DEE2E7]">
      <div className="w-[86%] mx-auto p-4">
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-2">
            <FaRegCopyright className="text-gray-500"/>
            <p className="text-gray-500">2023 Ecommerce.</p>
          </div>
          <div className="flex items-center gap-2">
            <GB className="size-6"/>
            <p>English</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CopyRight;
