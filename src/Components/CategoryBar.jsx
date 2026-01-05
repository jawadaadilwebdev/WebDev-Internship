import React from "react";
import { FaBars } from "react-icons/fa6";
import { US } from 'country-flag-icons/react/3x2'; // United States



const CategoryBar = () => {
  return (
    <div className="h-14 border-t-2 border-b-2 border-gray-300 flex justify-center items-center">
      <div className="w-[86%]  gap-5 flex items-center justify-start">
        <div>
          <FaBars className="h-5 w-5" />
        </div>
        <div className="flex justify-between w-full">
          <div className="flex gap-3.5 items-center">
            <h4>All category</h4>
            <h4>Hot offers</h4>
            <h4>Gift boxes</h4>
            <h4>Projects</h4>
            <h4>Menu item</h4>
            <select name="" id="" className="outline-0">
              <option value="">Help</option>
              <option value="">More</option>
            </select>
          </div>

          <div className="flex gap-4.5">
            <div className="flex">
              <h4>English</h4>
              <select name="" id="" className="outline-0">
                <option value="">USD</option>
                <option value="">PKr</option>
              </select>
            </div>
            <div className="flex">
              <h4>Ship To</h4>
              <select name="" id="" className="outline-0">
                <option value=""><US/></option>
              </select>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CategoryBar;
