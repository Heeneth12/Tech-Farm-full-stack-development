import React from "react";
import NavBar from "../components/Navbar";
import Footer from "../components/Fotter";
import ServicesBody from "../components/ServicesBody";
import ServiceSection from "../components/ServiceSection";

function Services() {
  return (
    <>
      <NavBar />
      <ServiceSection />
      <ServicesBody />
      <Footer />
    </>
  );
}

export default Services;
