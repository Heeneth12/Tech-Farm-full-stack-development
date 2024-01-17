import React from "react";
import NavBar from "../components/Navbar";
import Footer from "../components/Fotter";
import ServicesBody from "../components/ServicesBody";
import ServiceSection from "../components/ServiceSection";
import WeatherData from "../components/WeatherData";
import Test from "../components/Test";

function Services() {
  return (
    <>
      <NavBar />
      <ServiceSection />
      <ServicesBody />
      <WeatherData />
      <Test />
      <Footer />
    </>
  );
}

export default Services;
