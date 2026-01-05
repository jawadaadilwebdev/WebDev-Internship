import React from "react";
import Hero from "./Hero";
import DealsOffer from "./DealsOffer";
import CategoryProducts from "./CategoryProducts";
import Inquiry from "./Inquiry";
import RecommendedItems from "./RecommendedItems";
import ExtraServices from "./ExtraServices";
import SupplierByRegion from "./SupplierByRegion";

const MainPage = () => {
  const homeItems = [
    {
      id: 1,
      title: "Soft chairs",
      price: 19,
      image: "/assets/soft-chair.png",
    },
    {
      id: 2,
      title: "Sofa & chair",
      price: 19,
      image: "/assets/sofa-chair.png",
    },
    {
      id: 3,
      title: "Kitchen dishes",
      price: 19,
      image: "/assets/kitchen-dishes.png",
    },
    {
      id: 4,
      title: "Smart watches",
      price: 19,
      image: "/assets/smart-watch.png",
    },
    {
      id: 5,
      title: "Kitchen mixer",
      price: 100,
      image: "/assets/kitchen-mixer.png",
    },
    {
      id: 6,
      title: "Blenders",
      price: 39,
      image: "/assets/blender.png",
    },
    {
      id: 7,
      title: "Home appliance",
      price: 19,
      image: "/assets/home-appliance.png",
    },
    {
      id: 8,
      title: "Coffee maker",
      price: 10,
      image: "/assets/coffee-maker.png",
    },
  ];

  const electronicItems = [
    {
      id: 1,
      title: "Smart Watches",
      price: 19,
      image: "/assets/watch.png",
    },
    {
      id: 2,
      title: "Cameras",
      price: 19,
      image: "/assets/camera.png",
    },
    {
      id: 3,
      title: "Headphones",
      price: 19,
      image: "/assets/headset.png",
    },
    {
      id: 4,
      title: "Smart watches",
      price: 19,
      image: "/assets/smart-watch.png",
    },
    {
      id: 5,
      title: "Kitchen mixer",
      price: 100,
      image: "/assets/kitchen-mixer.png",
    },
    {
      id: 6,
      title: "Blenders",
      price: 39,
      image: "/assets/blender.png",
    },
    {
      id: 7,
      title: "Home appliance",
      price: 19,
      image: "/assets/home-appliance.png",
    },
    {
      id: 8,
      title: "Coffee maker",
      price: 10,
      image: "/assets/coffee-maker.png",
    },
  ];

  return (
    <div className="bg-gray-100 flex flex-col items-center">
      <Hero />
      <DealsOffer />
      <CategoryProducts
        home={true}
        name={"Home and outdoor"}
        Items={homeItems}
      />
      <CategoryProducts
        home={false}
        name={"Consumer electronics and gadgets"}
        Items={electronicItems}
      />
      <Inquiry />
      <RecommendedItems />
      <ExtraServices />
      <SupplierByRegion />
    </div>
  );
};

export default MainPage;
