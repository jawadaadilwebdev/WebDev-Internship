import React from "react";
import ProductsPageBar from "./ProductsPageBar";
import { useState } from 'react';
import DiscountBanner from "./DiscountBanner";


const ProductDetail = () => {
  const [activeTab, setActiveTab] = useState('description');



  const tabs = [
    { id: 'description', label: 'Description' },
    { id: 'reviews', label: 'Reviews' },
    { id: 'shipping', label: 'Shipping' },
    { id: 'about', label: 'About seller' }
  ];
  const recommendedItems = [
    {
      id: 1,
      title: "Men Blazers Sets",
      description: "Elegant Formal",
      priceRange: "$7.00 - $99.50",
    image: "/assets/camera.png",
    },
    {
      id: 2,
      title: "Men Shirt Sleeve",
      description: "Polo Contrast",
      priceRange: "$7.00 - $99.50",
    image: "/assets/headset.png",
    },
    {
      id: 3,
      title: "Apple Watch Series",
      description: "Space Gray",
      priceRange: "$7.00 - $99.50",
    image: "/assets/watch.png",
    },
    {
      id: 4,
      title: "Basketball Crew",
      description: "Socks Long Stuff",
      priceRange: "$7.00 - $99.50",
    image: "/assets/camera.png",
    },
    {
      id: 5,
      title: "New Summer Men's castrol T-Shirts",
      description: null, // No description for this one
      priceRange: "$7.00 - $99.50",
    image: "/assets/tshirt.png",
    }
  ];

  const products = [
  {
    id: 1,
    name: "Xiaomi Redmi 8 Original",
    price: "$32.00 - $40.00",
    image:
      "/assets/camera.png",
  },
  {
    id: 2,
    name: "Xiaomi Redmi 8 Original",
    price: "$32.00 - $40.00",
    image:
      "/assets/headset.png",
  },
  {
    id: 3,
    name: "Xiaomi Redmi 8 Original",
    price: "$32.00 - $40.00",
    image:
      "/assets/watch.png",
  },
  {
    id: 4,
    name: "Xiaomi Redmi 8 Original",
    price: "$32.00 - $40.00",
    image:
      "/assets/camera.png",
  },
  {
    id: 5,
    name: "Xiaomi Redmi 8 Original",
    price: "$32.00 - $40.00",
        image: "/assets/camera.png",

  },
  {
    id: 6,
    name: "Xiaomi Redmi 8 Original",
    price: "$32.00 - $40.00",
        image: "/assets/headset.png",

  },
];

  return (
    <div className="w-[86%] mx-auto">
      <ProductsPageBar />
      <div className="border rounded-md border-gray-300 flex justify-between">
        <div className="w-[70%] p-4">
          <div className="flex">
          <div>
            <img src="/assets/whiteshirt.png" alt="" />
            <div></div>
          </div>
          <div className="max-w-md mx-auto p-4 border border-gray-200 rounded-lg shadow-sm">
            {/* Stock Status */}
            <div className="mb-3">
              <span className="inline-flex items-center text-green-600 font-medium">
                <svg
                  className="w-4 h-4 mr-1"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                    clipRule="evenodd"
                  />
                </svg>
                In stock
              </span>
            </div>

            {/* Title */}
            <h1 className="text-xl font-bold text-gray-900 mb-4">
              Mens Long Sleeve T-shirt Cotton Base Layer Slim Muscle
            </h1>

            {/* Rating, Reviews & Sold */}
            <div className="flex items-center gap-4 mb-6">
              <div className="flex items-center">
                <span className="text-yellow-400 mr-1">⭐</span>
                <span className="font-semibold">★★★★</span>
                <span className="text-gray-600 ml-1">9.3</span>
              </div>
              <span className="text-gray-500">🌍 32 reviews</span>
              <span className="text-red-500 font-medium">🔥 154 sold</span>
            </div>

            {/* Pricing Tiers */}
            <div className="flex justify-around mb-6 bg-orange-300">
              <div className="flex flex-col justify-between items-center">
                <span className="text-lg font-bold text-gray-900">$98.00</span>
                <span className="text-gray-600">50-100 pcs</span>
              </div>
              <div className="flex flex-col justify-between items-center">
                <span className="text-lg font-bold text-gray-900">$90.00</span>
                <span className="text-gray-600">100-700 pcs</span>
              </div>
              <div className="flex flex-col justify-between items-center">
                <span className="text-lg font-bold text-gray-900">$78.00</span>
                <span className="text-gray-600">700+ pcs</span>
              </div>
            </div>

            <hr className="my-6" />

            {/* Product Details */}
            <div className="space-y-3">
              <div className="flex">
                <span className="w-32 font-medium text-gray-700">Price:</span>
                <span className="text-gray-900">Negotiable</span>
              </div>
              <div className="flex">
                <span className="w-32 font-medium text-gray-700">Type:</span>
                <span className="text-gray-900">Classic shoes</span>
              </div>
              <div className="flex">
                <span className="w-32 font-medium text-gray-700">
                  Material:
                </span>
                <span className="text-gray-900">Plastic material</span>
              </div>
              <div className="flex">
                <span className="w-32 font-medium text-gray-700">Design:</span>
                <span className="text-gray-900">Modern nice</span>
              </div>
              <div className="flex">
                <span className="w-32 font-medium text-gray-700">
                  Customization:
                </span>
                <span className="text-gray-900">
                  Customized logo and design custom packages
                </span>
              </div>
              <div className="flex">
                <span className="w-32 font-medium text-gray-700">
                  Protection:
                </span>
                <span className="text-gray-900">Refund Policy</span>
              </div>
              <div className="flex">
                <span className="w-32 font-medium text-gray-700">
                  Warranty:
                </span>
                <span className="text-gray-900">2 years full warranty</span>
              </div>
            </div>
          </div>
          </div>
          <div className="max-w-4xl mx-auto p-4">
      {/* Tabs Navigation */}
      <div className="flex border-b border-gray-200">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`px-6 py-3 font-medium text-sm md:text-base ${
              activeTab === tab.id
                ? 'border-b-2 border-black text-black'
                : 'text-gray-600 hover:text-gray-900'
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* Tab Content */}
      <div className="mt-6">
        {activeTab === 'description' && (
          <div className="space-y-6">
            {/* First Paragraph */}
            <p className="text-gray-700 leading-relaxed">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
            </p>

            {/* Second Paragraph */}
            <p className="text-gray-700 leading-relaxed">
              Quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
            </p>

            {/* Specifications Table */}
            <div className="overflow-x-auto">
              <table className="min-w-full border border-gray-200">
                <tbody>
                  <tr className="border-b border-gray-200">
                    <td className="px-4 py-3 font-medium text-gray-700 bg-gray-50 w-1/3">Model</td>
                    <td className="px-4 py-3 text-gray-900">#8786867</td>
                  </tr>
                  <tr className="border-b border-gray-200">
                    <td className="px-4 py-3 font-medium text-gray-700 bg-gray-50">Style</td>
                    <td className="px-4 py-3 text-gray-900">Classic style</td>
                  </tr>
                  <tr className="border-b border-gray-200">
                    <td className="px-4 py-3 font-medium text-gray-700 bg-gray-50">Certificate</td>
                    <td className="px-4 py-3 text-gray-900">ISO-898921212</td>
                  </tr>
                  <tr className="border-b border-gray-200">
                    <td className="px-4 py-3 font-medium text-gray-700 bg-gray-50">Size</td>
                    <td className="px-4 py-3 text-gray-900">34mm x 450mm x 19mm</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 font-medium text-gray-700 bg-gray-50">Memory</td>
                    <td className="px-4 py-3 text-gray-900">36GB RAM</td>
                  </tr>
                </tbody>
              </table>
            </div>

            {/* Features List */}
            <ul className="space-y-2">
              <li className="flex items-start">
                <svg className="w-5 h-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                <span className="text-gray-700">Some great feature name here</span>
              </li>
              <li className="flex items-start">
                <svg className="w-5 h-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                <span className="text-gray-700">Lorem ipsum dolor sit amet, consectetur</span>
              </li>
              <li className="flex items-start">
                <svg className="w-5 h-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                <span className="text-gray-700">Duis aute irure dolor in reprehenderit</span>
              </li>
              <li className="flex items-start">
                <svg className="w-5 h-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                <span className="text-gray-700">Some great feature name here</span>
              </li>
            </ul>
          </div>
        )}

        {/* Other Tabs (Placeholder Content) */}
        {activeTab === 'reviews' && (
          <div className="text-center py-8">
            <p className="text-gray-600">Reviews content would go here</p>
          </div>
        )}
        {activeTab === 'shipping' && (
          <div className="text-center py-8">
            <p className="text-gray-600">Shipping information would go here</p>
          </div>
        )}
        {activeTab === 'about' && (
          <div className="text-center py-8">
            <p className="text-gray-600">About seller information would go here</p>
          </div>
        )}
      </div>
    </div>
        </div>
        
        
        <div className="w-[27%]">
          <div className="max-w-sm w-full border border-gray-200 rounded-lg p-6">
      {/* Supplier Header */}
      <h2 className="text-2xl font-bold text-gray-900 mb-6">Supplier</h2>
      
      {/* Supplier Name */}
      <h3 className="text-xl font-bold text-gray-900 mb-4">Guanjai Trading LLC</h3>
      
      {/* Supplier Info */}
      <div className="space-y-3 mb-6">
        <div className="flex items-center text-gray-700">
          <svg className="w-5 h-5 mr-2 text-gray-500" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
          </svg>
          Germany, Berlin
        </div>
        <div className="flex items-center text-green-600 font-medium">
          <svg className="w-5 h-5 mr-2 text-green-500" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
          </svg>
          Verified Seller
        </div>
        <div className="flex items-center text-gray-700">
          <svg className="w-5 h-5 mr-2 text-gray-500" fill="currentColor" viewBox="0 0 20 20">
            <path d="M8 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM15 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z" />
            <path d="M3 4a1 1 0 00-1 1v10a1 1 0 001 1h1.05a2.5 2.5 0 014.9 0H10a1 1 0 001-1v-1h4a1 1 0 001-1v-1h2a1 1 0 001-1v-6a1 1 0 00-1-1H3zm11 3a1 1 0 01-1-1V5h2v1a1 1 0 01-1 1z" />
          </svg>
          Worldwide shipping
        </div>
      </div>
      
      {/* Buttons */}
      <div className="space-y-3 mb-8">
        <button className="w-full py-3 bg-blue-500 text-white font-medium rounded-md hover:bg-gray-800 transition">
          Send inquiry
        </button>
        <button className="w-full py-3 border border-gray-300 text-blue-500 font-medium rounded-md hover:bg-gray-50 transition">
          Seller's profile
        </button>
        <button className="w-full py-3 border border-gray-300 text-gray-800 font-medium rounded-md hover:bg-gray-50 transition">
          Save for later
        </button>
      </div>
      
      <hr className="my-8" />
      
      {/* You may like section */}
      <h4 className="text-xl font-bold text-gray-900 mb-6 mt-30">You may like</h4>
      
      <div className="space-y-6">
        {recommendedItems.map((item) => (
          <div key={item.id} className="flex items-start space-x-4">
            <img 
              src={item.imageSrc} 
              alt={item.title}
              className="w-16 h-16 rounded object-cover shrink-0 border border-gray-200"
            />
            <div>
              <h5 className="font-medium text-gray-900">{item.title}</h5>
              {item.description && (
                <p className="text-sm text-gray-600 mb-1">{item.description}</p>
              )}
              <p className="text-gray-900 font-medium">{item.priceRange}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
        </div>
      </div>
      <div className="w-full my-10">
      {/* Title */}
      <h2 className="text-lg font-semibold mb-4">Related products</h2>

      {/* Products Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-4 mb-6">
        {products.map((product) => (
          <div
            key={product.id}
            className="border rounded-lg p-3 text-center hover:shadow-md transition"
          >
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-32 object-contain mb-3"
            />
            <p className="text-sm font-medium leading-tight">
              {product.name}
            </p>
            <p className="text-sm text-gray-500 mt-1">
              {product.price}
            </p>
          </div>
        ))}
      </div>

      {/* Discount Banner */}
      <DiscountBanner/>
    </div>
    </div>
  );
};

export default ProductDetail;
