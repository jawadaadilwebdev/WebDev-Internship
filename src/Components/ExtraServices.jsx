import React from "react";
import { IoSearch } from "react-icons/io5";
import { FaBoxArchive } from "react-icons/fa6";
import { IoMdSend } from "react-icons/io";
import { MdOutlineSecurity } from "react-icons/md";





const ExtraServices = () => {
     const services = [
  {
    text: "Source from Industry Hubs",
    icon: <IoSearch />,
    image: "/assets/source-industry-hubs.png",
  },
  {
    text: "Customize Your Products",
    icon: <FaBoxArchive />,
    image: "/assets/customize-products.png",
  },
  {
    text: "Fast, reliable shipping by ocean or air",
    icon: <IoMdSend />,
    image: "/assets/fast-shipping.png",
  },
  {
    text: "Product monitoring and inspection",
    icon: <MdOutlineSecurity />,
    image: "/assets/product-monitoring.png",
  },
];



  return (
    <div className="w-[86%] mt-6">
      <h2 className="text-2xl font-medium text-black">Our extra services</h2>
      <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-6 bg-white">
      {services.map((service, index) => (
        <div
          key={index}
          className="rounded-2xl border border-gray-300 bg-white relative"
        >
            <img src={service.image} alt={service.text} className="w-full h-30 saturate-200 brightness-75 contrast-120" />
            <p className="py-5 px-3 text-lg font-medium">{service.text}</p>
            <div className="absolute text-2xl rounded-full bottom-18 right-4 text-blue-500 bg-[#D1E7FF] p-4">
            {service.icon}
            </div>
        </div>
      ))}
    </div>

    </div>
  );
};

export default ExtraServices;
