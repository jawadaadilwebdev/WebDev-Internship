const DealsOffer = () => {
  const dealTime = [
    { nums: "04", unit: "Day" },
    { nums: "08", unit: "Hour" },
    { nums: "22", unit: "Min" },
    { nums: "56", unit: "Sec" },
  ];
  const dealItems = [
    {
      id: 1,
      name: "Smart watches",
      image: "/assets/watch.png",
      discountPercent: 25,
    },
    {
      id: 2,
      name: "Laptops",
      image: "/assets/laptop.png",
      discountPercent: 15,
    },
    {
      id: 3,
      name: "GoPro cameras",
      image: "/assets/camera.png",
      discountPercent: 40,
    },
    {
      id: 4,
      name: "Headphones",
      image: "/assets/headphones.png",
      discountPercent: 25,
    },
    {
      id: 5,
      name: "Canon cameras",
      image: "/assets/mobile.png",
      discountPercent: 25,
    },
  ];

  return (
    <div className="w-[86%] mt-6 bg-white rounded-xl border border-gray-200">
      {/* Outer grid */}
      <div className="grid grid-cols-1 lg:grid-cols-[1fr_3fr] ">
        {/* Box 1 - 25% */}
        <div className="flex flex-col items-center justify-center gap-5 h-60">
          <div>
            <h4 className="text-black font-semibold text-[20px]">Deals and offers</h4>
            <p className="text-gray-400 text-[18px]">Hygiene equipments</p>
          </div>
          <div className="flex gap-2">
            {dealTime.map((time, index) => {
              return (
                <div
                  key={index}
                  className="flex flex-col items-center bg-gray-500 py-1 w-13 rounded text-white"
                >
                  <h5>{time.nums}</h5>
                  <p>{time.unit}</p>
                </div>
              );
            })}
          </div>
        </div>

        {/* Right side - 75% */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 h-60">
          {dealItems.map((item, index) => (
            <div
              key={index}
              className=" flex flex-col justify-around items-center"
            >
              <img
                className="max-h-30 w-auto object-contain"
                src={item.image}
                alt={item.name}
              />
              <div><p>{item.name}</p>
              <h4 className="text-center bg-[#FFE3E3] text-[#EB001B] rounded-xl">-{item.discountPercent}%</h4></div>
              
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default DealsOffer;
