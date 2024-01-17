import React from "react";
import NavBar from "../components/Navbar";
import Footer from "../components/Fotter";
import ProductSection from "../components/ProductSection";
import ProductsBody from "../components/ProductsBody";
import Test from "../components/Test";

function ProductsPage() {
  return (
    <>
      <NavBar />
      <ProductSection />
      <ProductsBody />
      <Test />

      <Footer />
    </>
  );
}

export default ProductsPage;
