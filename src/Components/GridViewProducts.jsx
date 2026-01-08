import React from "react";
import { useState } from "react";
import { IoGrid } from "react-icons/io5";
import { FaAlignJustify, FaHeart } from "react-icons/fa";
import { FaRegHeart } from "react-icons/fa";
import { RxCross1 } from "react-icons/rx";
import { MdKeyboardArrowLeft } from "react-icons/md";
import { MdKeyboardArrowRight } from "react-icons/md";

const GridViewProducts = () => {
  const [listview, setListView] = useState(false);

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
      id: 1,
      img: "/assets/fivestar.png",
    },
    {
      id: 2,
      img: "/assets/fourstar.png",
    },
    {
      id: 3,
      img: "/assets/threestar.png",
    },
    {
      id: 4,
      img: "/assets/fourstar.png",
    },
  ];

  const MIN = 0;
  const MAX = 999999;

  const [minValue, setMinValue] = useState(0);
  const [maxValue, setMaxValue] = useState(999999);

  const minPercent = (minValue / MAX) * 100;
  const maxPercent = (maxValue / MAX) * 100;
  const listProducts = [
    {
      id: 1,
      title: "Canon Camera EOS 2000, Black 10x zoom",
      price: 998.0,
      rating: 7.5,
      reviews: 154,
      shipping: "Free Shipping",
      image: "/assets/canon-camera.png",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      liked: false,
    },
    {
      id: 2,
      title: "GoPro HERO6 4K Action Camera - Black",
      price: 998.0,
      rating: 7.5,
      reviews: 154,
      shipping: "Free Shipping",
      image: "/assets/gopro.png",
      description:
        "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      liked: false,
    },
    {
      id: 3,
      title: "GoPro HERO6 4K Action Camera - Black",
      price: 998.0,
      rating: 7.5,
      reviews: 154,
      shipping: "Free Shipping",
      image: "/assets/tablet.png",
      description:
        "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
      liked: false,
    },
    {
      id: 4,
      title: "GoPro HERO6 4K Action Camera - Black",
      price: 998.0,
      rating: 7.5,
      reviews: 154,
      shipping: "Free Shipping",
      image: "/assets/laptop.png",
      description:
        "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      liked: false,
    },
    {
      id: 5,
      title: "GoPro HERO6 4K Action Camera - Black",
      price: 998.0,
      rating: 7.5,
      reviews: 154,
      shipping: "Free Shipping",
      image: "/assets/watch.png",
      description:
        "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.",
      liked: false,
    },
    {
      id: 6,
      title: "GoPro HERO6 4K Action Camera - Black",
      price: 998.0,
      rating: 7.5,
      reviews: 154,
      shipping: "Free Shipping",
      image: "/assets/headphones.png",
      description:
        "Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit.",
      liked: false,
    },
  ];
  const gridProducts = [
    {
      id: 1,
      title: "GoPro HERO6 4K Action Camera - Black",
      price: 99.5,
      oldPrice: 1128.0,
      rating: 7.5,
      image: "/assets/mobile.png",
    },
    {
      id: 2,
      title: "GoPro HERO6 4K Action Camera - Black",
      price: 99.5,
      oldPrice: 1128.0,
      rating: 7.5,
      image: "/assets/camera.png",
    },
    {
      id: 3,
      title: "GoPro HERO6 4K Action Camera - Black",
      price: 99.5,
      oldPrice: 1128.0,
      rating: 7.5,
      image: "/assets/mobile.png",
    },
    {
      id: 4,
      title: "GoPro HERO6 4K Action Camera - Black",
      price: 99.5,
      oldPrice: 1128.0,
      rating: 7.5,
      image: "/assets/watch.png",
    },
    {
      id: 5,
      title: "GoPro HERO6 4K Action Camera - Black",
      price: 99.5,
      oldPrice: 1128.0,
      rating: 7.5,
      image: "/assets/blender.png",
    },
    {
      id: 6,
      title: "GoPro HERO6 4K Action Camera - Black",
      price: 99.5,
      oldPrice: 1128.0,
      rating: 7.5,
      image: "/assets/camera.png",
    },
    {
      id: 7,
      title: "GoPro HERO6 4K Action Camera - Black",
      price: 99.5,
      oldPrice: 1128.0,
      rating: 7.5,
      image: "/assets/headphones.png",
    },
    {
      id: 8,
      title: "GoPro HERO6 4K Action Camera - Black",
      price: 99.5,
      oldPrice: 1128.0,
      rating: 7.5,
      image: "/assets/canon-camera.png",
    },
    {
      id: 9,
      title: "GoPro HERO6 4K Action Camera - Black",
      price: 99.5,
      oldPrice: 1128.0,
      rating: 7.5,
      image: "/assets/home-appliance.png",
    },
  ];

  const seletedType = [
    "Samsung",
    "Poco",
    "Apple",
    "Metallic",
    "4 Star",
    "3 Star",
  ];
  return (
    <div className="w-[86%] flex justify-between">
      {/* Side Bar */}
      <div className="w-[19%] flex flex-col gap-4 mb-8">
        {/* Category */}
        <div className="flex flex-col gap-3">
          <hr className="text-gray-500 opacity-50" />
          <div>
            <ul className="flex justify-between font-medium">
              <li>Category</li>
              <p className="-rotate-90">&gt;</p>
            </ul>
          </div>
          <ul className="text-gray-500 flex flex-col gap-1">
            {categories.map((category, index) => {
              return (
                <li key={index}>
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

        <div className="flex flex-col gap-3">
          <hr className="text-gray-500 opacity-50" />
          <div>
            <ul className="flex justify-between font-medium">
              <li>Brands</li>
              <p className="-rotate-90">&gt;</p>
            </ul>
          </div>
          <div className="flex flex-col gap-1">
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

        <div className="flex flex-col gap-3">
          <hr className="text-gray-500 opacity-50" />
          <div>
            <ul className="flex justify-between font-medium">
              <li>Features</li>
              <p className="-rotate-90">&gt;</p>
            </ul>
          </div>
          <div className="flex flex-col gap-1">
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
        <div className="flex flex-col gap-3">
          <hr className="text-gray-500 opacity-50" />
          <div>
            <ul className="flex justify-between font-medium">
              <li>Price Range</li>
              <p className="-rotate-90">&gt;</p>
            </ul>
          </div>
          {listview ? null : (
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
              <div className="grid grid-cols-2 gap-3">
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
          )}
        </div>

        {/* Condition */}
        <div className="flex flex-col gap-3">
          <hr className="text-gray-500 opacity-50" />
          <div>
            <ul className="flex justify-between font-medium">
              <li>Any Condition</li>
              <p className="-rotate-90">&gt;</p>
            </ul>
          </div>
          {listview ? null : (
            <div className="flex flex-col gap-1">
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
          )}
        </div>

        {/* Ratings */}

        <div className="flex flex-col gap-3">
          <hr className="text-gray-500 opacity-50" />
          <div>
            <ul className="flex justify-between font-medium">
              <li>Ratings</li>
              <p className="-rotate-90">&gt;</p>
            </ul>
          </div>
          {listview ? null : (
            <div className="flex flex-col gap-1">
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
          )}
        </div>
        {listview ? (
          <div className="flex flex-col gap-3">
            <hr className="text-gray-500 opacity-50" />
            <div>
              <ul className="flex justify-between font-medium">
                <li>Ratings</li>
                <p className="-rotate-90">&gt;</p>
              </ul>
            </div>
          </div>
        ) : null}
      </div>
      {/* Main Grid */}
      <div className="w-[80%] ">
        {/* Top Bar */}
        <div className="m-2 p-4 border border-gray-300 rounded-md  bg-white flex justify-between items-center">
          <p>
            12,911 items in{" "}
            <span className="font-semibold">Mobile accessory</span>
          </p>
          <div className="flex items-center gap-5 justify-around">
            <label className="flex items-center space-x-3 rounded-lg hover:bg-gray-50 cursor-pointer transition-colors">
              <input
                type="checkbox"
                className="w-5 h-5 rounded border-gray-300 text-blue-600 focus:ring-blue-500"
              />
              <span className="text-gray-700">Verified only</span>
            </label>
            <select
              name=""
              id=""
              className="px-4 py-0.5 outline-0 border border-gray-300 rounded-md"
            >
              <option value="">Featured</option>
            </select>
            <div className="flex gap-1">
              <IoGrid
                className="size-7 cursor-pointer"
                onClick={() => setListView(true)}
              />
              <FaAlignJustify
                className="size-7 cursor-pointer"
                onClick={() => setListView(false)}
              />
            </div>
          </div>
        </div>
        {/* List View */}

        {/* Grid View */}
        {listview ? (
          <div>
            <div className="my-3 mx-2 rounded-lg flex gap-2">
              {seletedType.map((type, index) => (
                <div
                  key={index}
                  className="flex items-center gap-2 border text-gray-500 border-blue-500 rounded-md py-1 px-1.5"
                >
                  <p>{type}</p>
                  <RxCross1 />
                </div>
              ))}
              <button className="text-blue-500 text-md">
                Clear all filters
              </button>
            </div>
            <div className="mx-2">
              <div className="w-full grid grid-cols-3 gap-6">
                {gridProducts.map((gridProduct) => (
                  <div
                    key={gridProduct.id}
                    className="border border-gray-300 bg-white rounded-lg p-4"
                  >
                    <img
                      src={gridProduct.image}
                      alt={gridProduct.title}
                      className="w-full h-48 object-contain mb-4"
                    />

                    <div className="flex items-center mb-2 justify-between">
                      <div className="flex gap-2">
                        <span className="text-lg font-semibold">
                          ${gridProduct.price}
                        </span>
                        <span className="text-sm line-through text-gray-400">
                          ${gridProduct.oldPrice}
                        </span>
                      </div>
                      <FaRegHeart className="text-blue-500" />
                    </div>

                    <div className="text-sm text-gray-600 flex items-center gap-3">
                      <img src="/assets/fourstar.png" alt="" />
                      <p>{gridProduct.rating}</p>
                    </div>
                    <h3 className="text-sm font-medium mb-2 text-gray-500">
                      {gridProduct.title}
                    </h3>
                  </div>
                ))}
              </div>
            </div>
          </div>
        ) : (
          <div className="flex flex-col justify-around min-h-[160vh]">
            {listProducts.map((listProduct) => (
              <div
                key={listProduct.id}
                className="flex gap-4 rounded-lg bg-white border border-gray-300 p-6 m-3"
              >
                <img
                  src={listProduct.image}
                  alt={listProduct.title}
                  className="h-32 w-32 object-contain"
                />

                <div className="flex-1 flex flex-col justify-between">
                  <div className="flex justify-between">
                    <h3 className="font-semibold">{listProduct.title}</h3>
                    <FaRegHeart className="text-blue-500 size-5" />
                  </div>

                  <div className="mt-2 flex items-center gap-3">
                    <span className="font-bold">${listProduct.price}</span>
                    <span className="text-sm text-yellow-600">
                      ⭐ {listProduct.rating}
                    </span>
                    <span className="text-sm text-gray-500">
                      {listProduct.orders} orders
                    </span>
                    <span className="text-sm text-green-600">
                      {listProduct.shipping}
                    </span>
                  </div>
                  <p className="text-sm text-gray-500">
                    {listProduct.description}
                  </p>

                  <button className="text-blue-500">See details</button>
                </div>
              </div>
            ))}
          </div>
        )}
        <div className="mx-2 my-4 flex justify-end gap-6">
          <div>
            <select
              name="sort"
              id="sort"
              className="px-2 py-1 border border-gray-300 rounded-md outline-0 bg-white"
            >
              <option value="default">Show 10</option>
              <option value="price-low">Show 20</option>
              <option value="price-high">Show all</option>
            </select>
          </div>
          <div className="flex items-center text-normal bg-white rounded-md border border-gray-300 cursor-pointer">
            <p  className="border-r border-gray-300 px-3 py-1" >
              <MdKeyboardArrowLeft/>
            </p>
            <p className="border-r border-gray-300 px-3 py-1">1</p>
            <p className="px-3 py-1">2</p>
            <p className="border-l border-gray-300 px-3 py-1">3</p>
            <p className="border-l border-gray-300 px-3 py-1">
              <MdKeyboardArrowRight  />
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GridViewProducts;
