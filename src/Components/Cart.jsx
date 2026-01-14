import React, { useState } from "react";
import DiscountBanner from "./DiscountBanner";

const Cart = () => {

    const [couponCode, setCouponCode] = useState('');

  const handleApplyCoupon = () => {
    if (couponCode.trim()) {
      alert(`Coupon "${couponCode}" applied!`);
      setCouponCode('');
    }
  };

  const handleCheckout = () => {
    alert('Proceeding to checkout!');
  };
  const cartItems = [
    {
      id: 1,
      title: "T-shirts with multiple colors, for men and lady",
      details: {
        size: "medium",
        color: "blue",
        material: "Plastic",
      },
      seller: "Artel Market",
    },
    {
      id: 2,
      title: "T-shirts with multiple colors, for men and lady",
      details: {
        size: "medium",
        color: "blue",
        material: "Plastic",
      },
      seller: "Best factory LLC",
    },
    {
      id: 3,
      title: "T-shirts with multiple colors, for men and lady",
      details: {
        size: "medium",
        color: "blue",
        material: "Plastic",
      },
      seller: "Artel Market",
    },
  ];

  // Features data
  const features = [
    {
      id: 1,
      title: "Secure payment",
      description: "Have you ever finally just",
      icon: (
        <svg
          className="w-6 h-6 text-gray-700"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
          />
        </svg>
      ),
    },
    {
      id: 2,
      title: "Customer support",
      description: "Have you ever finally just",
      icon: (
        <svg
          className="w-6 h-6 text-gray-700"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z"
          />
        </svg>
      ),
    },
    {
      id: 3,
      title: "Free delivery",
      description: "Have you ever finally just",
      icon: (
        <svg
          className="w-6 h-6 text-gray-700"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4"
          />
        </svg>
      ),
    },
  ];
  const items = [
  {
    id: 1,
    image: "/assets/headphones.png",
    price: "$99.50",
    title: "GoPro HERO6 4K Action Camera - Black",
  },
  {
    id: 2,
    image: "/assets/camera.png",
    price: "$99.50",
    title: "GoPro HERO6 4K Action Camera - Black",
  },
  {
    id: 3,
    image: "/assets/headset.png",
    price: "$99.50",
    title: "GoPro HERO6 4K Action Camera - Black",
  },
  {
    id: 4,
    image: "/assets/laptop.png",
    price: "$99.50",
    title: "GoPro HERO6 4K Action Camera - Black",
  },
];
  return (
    <div className="w-[86%] mt-7 mx-auto">
      <div className="flex justify-between">
        <div className="w-[70%]">
            <div className="max-w-2xl ">
      {/* Cart Header */}
      <h1 className="text-2xl font-bold text-gray-900 mb-6">My cart (3)</h1>

      {/* Cart Items */}
      <div className="space-y-6 ">
        {cartItems.map((item, index) => (
          <div className="w-full" key={item.id}>
            {/* Cart Item */}
            <div className="border border-gray-200 rounded-lg p-4">
              <h2 className="text-lg font-medium text-gray-900 mb-2">{item.title}</h2>
              
              <div className="mb-3">
                <p className="text-gray-700">
                  <span className="font-medium">Size:</span> {item.details.size}, 
                  <span className="font-medium"> Color:</span> {item.details.color}, 
                  <span className="font-medium"> Material:</span> {item.details.material}
                </p>
                <p className="text-gray-700">
                  <span className="font-medium">Seller:</span> {item.seller}
                </p>
              </div>
              
              <div className="flex space-x-4">
                <button className="text-red-600 font-medium hover:text-red-800">
                  Remove
                </button>
                <button className="text-blue-500 font-medium hover:text-gray-900">
                  Save for later
                </button>
              </div>
            </div>

            {/* Divider - only show between items */}
            {index < cartItems.length - 1 && (
              <hr className="my-6 border-gray-200" />
            )}
          </div>
        ))}
      </div>

      {/* Action Buttons */}
      <div className="flex justify-between mt-8 mb-10">
        <button className="text-white font-medium hover:text-gray-900 px-4 py-2 border bg-blue-500 border-blue-500 rounded hover:bg-gray-50">
          Back to shop
        </button>
        <button className="text-blue-600 font-medium  px-4 py-2 border border-blue-500 rounded hover:bg-red-50">
          Remove all
        </button>
      </div>

      <hr className="my-8 border-gray-200" />

      {/* Features Section */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
        {features.map((feature) => (
          <div key={feature.id} className="text-center">
            <div className="flex justify-center mb-3">
              {feature.icon}
            </div>
            <h3 className="font-medium text-gray-900 mb-2">{feature.title}</h3>
            <p className="text-gray-600 text-sm">{feature.description}</p>
          </div>
        ))}
      </div>
    </div>
        </div>
        <div className="w-[27%]">
            <div className="max-w-md mx-auto p-6 border border-gray-200 rounded-lg">
      {/* Coupon Section */}
      <div className="mb-8">
        <h3 className="text-lg font-medium text-gray-900 mb-4">Have a coupon?</h3>
        <div className="flex space-x-2">
          <input
            type="text"
            value={couponCode}
            onChange={(e) => setCouponCode(e.target.value)}
            placeholder="Add coupon"
            className="flex-1 px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent"
          />
          <button
            onClick={handleApplyCoupon}
            className="px-6 py-2  text-blue-500 font-medium rounded hover:bg-gray-800 transition"
          >
            Apply
          </button>
        </div>
      </div>

      {/* Divider */}
      <hr className="my-6 border-gray-200" />

      {/* Price Breakdown */}
      <div className="space-y-4 mb-8">
        <div className="flex justify-between">
          <span className="text-gray-700">Subtotal:</span>
          <span className="text-gray-900 font-medium">$1403.97</span>
        </div>
        
        <div className="flex justify-between">
          <span className="text-gray-700">Discount:</span>
          <span className="text-red-600 font-medium">- $60.00</span>
        </div>
        
        <div className="flex justify-between">
          <span className="text-gray-700">Tax:</span>
          <span className="text-gray-900 font-medium">+ $14.00</span>
        </div>
      </div>

      {/* Divider */}
      <hr className="my-6 border-gray-200 border-t-2" />

      {/* Total */}
      <div className="flex justify-between items-center mb-8">
        <span className="text-xl font-bold text-gray-900">Total:</span>
        <span className="text-2xl font-bold text-gray-900">$1357.97</span>
      </div>

      {/* Checkout Button */}
      <button
        onClick={handleCheckout}
        className="w-full py-3 bg-green-600 text-white font-medium rounded-lg hover:bg-gray-800 transition text-lg"
      >
        Checkout
      </button>
    </div>
        </div>
      </div>
      <div className="w-full bg-white border rounded-md p-4 my-10">
      {/* Title */}
      <h2 className="text-sm font-semibold text-gray-700 mb-4">
        Saved for later
      </h2>

      {/* Items */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {items.map((item) => (
          <div
            key={item.id}
            className="flex flex-col items-start"
          >
            {/* Image */}
            <div className="w-full flex justify-center mb-3">
              <img
                src={item.image}
                alt={item.title}
                className="h-36 object-contain"
              />
            </div>

            {/* Price */}
            <p className="text-sm font-semibold text-gray-900">
              {item.price}
            </p>

            {/* Description */}
            <p className="text-xs text-gray-600 leading-snug mt-1">
              {item.title}
            </p>

            {/* Button */}
            <button className="mt-3 inline-flex items-center gap-1 text-xs text-blue-600 hover:underline">
              <svg
                className="w-4 h-4"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
              >
                <path d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13l-1.5 7h13M9 21a1 1 0 100-2 1 1 0 000 2zm8 1a1 1 0 100-2 1 1 0 000 2z" />
              </svg>
              Move to cart
            </button>
          </div>
        ))}
      </div>
    </div>
      <DiscountBanner/>
    </div>
  );
};

export default Cart;
