import React from "react";
import { useState } from "react";

const GridViewProducts = () => {
  const categories = [
    "Mobile Accessories",
    "Smart Phones",
    "Electronics",
    "Modern Tech",
  ];
  const BrandsOptions = ["Samsung", "huawei", "Poco", "Apple", "Lenovo"];
  const featuresOptions = [
    "Metallic",
    "Plastic Cover",
    "8GB RAM",
    "Super Power",
    "Large Memory",
  ];
  const conditions = ["Any", "Refurbished", "Brand new", "Old items"];
  const ratingStars = [
    {
      id:1,
      img: "/assets/fivestar.png"
    },
    {
      id:2,
      img: "/assets/fourstar.png"
    },
    {
      id:3,
      img: "/assets/threestar.png"
    },
    {
      id:4,
      img: "/assets/fourstar.png"
    }
  ]

  const MIN = 0;
  const MAX = 999999;

  const [minValue, setMinValue] = useState(0);
  const [maxValue, setMaxValue] = useState(999999);

  const minPercent = (minValue / MAX) * 100;
  const maxPercent = (maxValue / MAX) * 100;

  return (
    <div className="w-[86%] flex justify-between">
      <div className="w-[19%] flex flex-col gap-4 mb-8">
        {/* Category */}
        <div className="flex flex-col gap-4">
          <hr className="text-gray-500 opacity-50" />
          <div>
            <ul className="flex justify-between font-medium">
              <li>Category</li>
              <p className="-rotate-90">&gt;</p>
            </ul>
          </div>
          <ul className="text-gray-500 flex flex-col gap-2">
            {categories.map((category, index) => {
              return (
                <li>
                  <p>{category}</p>
                </li>
              );
            })}
          </ul>
          <a href="" className="text-blue-500">
            See all
          </a>
        </div>
        {/* Brands */}

        <div className="flex flex-col gap-4">
          <hr className="text-gray-500 opacity-50" />
          <div>
            <ul className="flex justify-between font-medium">
              <li>Brands</li>
              <p className="-rotate-90">&gt;</p>
            </ul>
          </div>
          <div className="flex flex-col gap-2">
            {BrandsOptions.map((option, index) => (
              <label
                key={index}
                className="flex items-center space-x-3 rounded-lg hover:bg-gray-50 cursor-pointer transition-colors"
              >
                <input
                  type="checkbox"
                  className="w-5 h-5 rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                />
                <span className="text-gray-500">{option}</span>
              </label>
            ))}
          </div>

          <a href="" className="text-blue-500">
            See all
          </a>
        </div>
        {/* Features */}

        <div className="flex flex-col gap-4">
          <hr className="text-gray-500 opacity-50" />
          <div>
            <ul className="flex justify-between font-medium">
              <li>Features</li>
              <p className="-rotate-90">&gt;</p>
            </ul>
          </div>
          <div className="flex flex-col gap-2">
            {featuresOptions.map((option, index) => (
              <label
                key={index}
                className="flex items-center space-x-3 rounded-lg hover:bg-gray-50 cursor-pointer transition-colors"
              >
                <input
                  type="checkbox"
                  className="w-5 h-5 rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                />
                <span className="text-gray-500">{option}</span>
              </label>
            ))}
          </div>

          <a href="" className="text-blue-500">
            See all
          </a>
        </div>

        {/* Price Range */}
        <div className="flex flex-col gap-4">
          <hr className="text-gray-500 opacity-50" />
          <div>
            <ul className="flex justify-between font-medium">
              <li>Price Range</li>
              <p className="-rotate-90">&gt;</p>
            </ul>
          </div>
          <div className="w-full max-w-md rounded-xl p-5 space-y-5">
            {/* Slider */}
            <div className="relative h-6">
              {/* Track */}
              <div className="absolute top-1/2 h-1 w-full -translate-y-1/2 rounded bg-gray-200" />

              {/* Active range */}
              <div
                className="absolute top-1/2 h-1 -translate-y-1/2 rounded bg-blue-500"
                style={{
                  left: `${minPercent}%`,
                  right: `${100 - maxPercent}%`,
                }}
              />

              {/* Min range input */}
              <input
                type="range"
                min={MIN}
                max={MAX}
                value={minValue}
                onChange={(e) =>
                  setMinValue(Math.min(Number(e.target.value), maxValue - 1))
                }
                className="range-thumb absolute w-full appearance-none bg-transparent pointer-events-auto"
              />

              {/* Max range input */}
              <input
                type="range"
                min={MIN}
                max={MAX}
                value={maxValue}
                onChange={(e) =>
                  setMaxValue(Math.max(Number(e.target.value), minValue + 1))
                }
                className="range-thumb absolute w-full appearance-none bg-transparent pointer-events-auto"
              />
            </div>

            {/* Min / Max Inputs */}
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="text-sm text-gray-600">Min</label>
                <input
                  type="number"
                  value={minValue}
                  onChange={(e) => setMinValue(Number(e.target.value))}
                  className="mt-1 w-full rounded-md border border-gray-300 px-3 py-2 text-sm text-gray-500 bg-white focus:border-blue-500 focus:outline-none"
                />
              </div>

              <div>
                <label className="text-sm text-gray-600">Max</label>
                <input
                  type="number"
                  value={maxValue}
                  onChange={(e) => setMaxValue(Number(e.target.value))}
                  className="mt-1 w-full rounded-md border border-gray-300 px-3 py-2 text-sm  text-gray-500 bg-white focus:border-blue-500 focus:outline-none"
                />
              </div>
            </div>

            {/* Apply Button */}
            <button className="w-full rounded-lg border border-gray-300 py-2 text-blue-600 bg-white font-medium hover:bg-blue-50 transition">
              Apply
            </button>

            {/* Slider Thumb Styling */}
            <style>
              {`
          .range-thumb::-webkit-slider-thumb {
            appearance: none;
            height: 18px;
            width: 18px;
            background: white;
            border: 2px solid #3b82f6;
            border-radius: 9999px;
            cursor: pointer;
          }

          .range-thumb::-moz-range-thumb {
            height: 18px;
            width: 18px;
            background: white;
            border: 2px solid #3b82f6;
            border-radius: 9999px;
            cursor: pointer;
          }
        `}
            </style>
          </div>
        </div>

        {/* Condition */}
        <div className="flex flex-col gap-4">
          <hr className="text-gray-500 opacity-50" />
          <div>
            <ul className="flex justify-between font-medium">
              <li>Any Condition</li>
              <p className="-rotate-90">&gt;</p>
            </ul>
          </div>
          <div className="flex flex-col gap-2">
            {conditions.map((condition, index) => (
              <label
                key={index}
                className="flex items-center space-x-3 rounded-lg hover:bg-gray-50 cursor-pointer transition-colors"
              >
                <input
                  name="condition"
                  type="radio"
                  className="w-5 h-5 rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                />
                <span className="text-gray-500">{condition}</span>
              </label>
            ))}
          </div>
        </div>

        {/* Ratings */}

        <div className="flex flex-col gap-4">
          <hr className="text-gray-500 opacity-50" />
          <div>
            <ul className="flex justify-between font-medium">
              <li>Ratings</li>
              <p className="-rotate-90">&gt;</p>
            </ul>
          </div>
          <div className="flex flex-col gap-2">
            {ratingStars.map((star, index) => (
              <label
                key={index}
                className="flex items-center space-x-3 rounded-lg hover:bg-gray-50 cursor-pointer transition-colors"
              >
                <input
                name="rating"
                  type="radio"
                  className="w-5 h-5 rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                />
                <img src={star.img} alt="" />
              </label>
            ))}
          </div>
        </div>


      </div>
      <div className="w-[80%] bg-amber-300">rgerg</div>
    </div>
  );
};

export default GridViewProducts;
