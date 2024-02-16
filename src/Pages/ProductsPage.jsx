import React from "react";
import NavBar from "../components/Navbar";
import Footer from "../components/Fotter";
import ProductSection from "../components/ProductSection";
import ProductsBody from "../components/ProductsBody";

function ProductsPage() {
  return (
    <>
      <NavBar />
      <ProductSection />
      <ProductsBody />
      <Footer />
    </>
  );
}

export default ProductsPage;
