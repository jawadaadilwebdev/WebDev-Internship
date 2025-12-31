import React from "react";

const RecommendedItems = () => {
  const recommendedItems = [
    {
      id: 1,
      name: "T-shirts with multiple colors",
      category: "Men",
      price: 10.3,
      image: "/assets/tshirt.png",
    },
    {
      id: 2,
      name: "Jeans shorts for men",
      category: "Men",
      price: 10.3,
      image: "/assets/jeans-shorts.png",
    },
    {
      id: 3,
      name: "Brown winter coat",
      category: "Men",
      price: 12.5,
      image: "/assets/winter-coat.png",
    },
    {
      id: 4,
      name: "Leather wallet",
      category: "Accessories",
      price: 34.0,
      image: "/assets/wallet.png",
    },
    {
      id: 5,
      name: "Jeans backpack",
      category: "Travel",
      price: 99.0,
      image: "/assets/backpack.png",
    },
    {
      id: 6,
      name: "Denim shorts",
      category: "Men",
      price: 9.99,
      image: "/assets/denim-shorts.png",
    },
    {
      id: 7,
      name: "Gaming headset with mic",
      category: "Electronics",
      price: 8.99,
      image: "/assets/headset.png",
    },
    {
      id: 8,
      name: "Smartwatch",
      category: "Electronics",
      price: 10.3,
      image: "/assets/backpack.png",
    },
    {
      id: 9,
      name: "Leather pot",
      category: "Home",
      price: 10.3,
      image: "/assets/pot.png",
    },
    {
      id: 10,
      name: "Travel thermos",
      category: "Travel",
      price: 80.95,
      image: "/assets/thermos.png",
    },
  ];

  return (
    <div className="w-[86%] mt-6">
      <h2 className="text-2xl font-medium text-black">Recommended Items</h2>
      <div className="w-full mt-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
        {recommendedItems.map((item, index) => (
          <div
            key={index}
            className=" rounded-md bg-white p-4 flex flex-col items-center"
          >
            <img src={item.image} alt="" className="w-[80%] h-auto" />
            <div className="w-full">
              <p className="text-medium">{`$${item.price}`}</p>
              <p className="text-gray-600 text-sm">{item.name}</p>
              <p className="text-gray-600 text-sm">{item.category}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RecommendedItems;
