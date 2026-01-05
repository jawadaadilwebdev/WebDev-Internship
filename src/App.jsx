import NavBar from "./Components/NavBar";
import CategoryBar from "./Components/CategoryBar";
import Hero from "./Components/Hero";
import DealsOffer from "./Components/DealsOffer";
import CategoryProducts from "./Components/CategoryProducts";
import Inquiry from "./Components/Inquiry";
import RecommendedItems from "./Components/RecommendedItems";
import ExtraServices from "./Components/ExtraServices";
import SupplierByRegion from "./Components/SupplierByRegion";
import Subscribe from "./Components/Subscribe";
import FooterLinks from "./Components/FooterLinks";
import CopyRight from "./Components/CopyRight";
import { Routes, Route } from "react-router-dom";
import MainPage from "./Components/MainPage";
import ProductsPage from "./Components/ProductsPage";

const App = () => {
  return (
    <div>
      <NavBar />
      <CategoryBar />
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/products" element={<ProductsPage />} />
      </Routes>
      <Subscribe />
      <FooterLinks />
      <CopyRight />
    </div>
  );
};

export default App;
