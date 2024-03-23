import React, { useState } from "react";
import NavBar from "../components/Navbar";
import Footer from "../components/Fotter";
import ServiceSection from "../components/ServiceSection";
import WeatherData from "../components/WeatherData";
import TempGraph from "../graphs/TempGraph";
import WaterPercentage from "../graphs/WaterPercentage";
import Test from "../graphs/Test";
import HumidityGraph from "../graphs/HumidityGraph";

function Services() {
  const [selectedCrop, setSelectedCrop] = useState("Wheat");

  // Define constants or data values for different crops
  const constantsByCrop = {
    Wheat: {
      constantTempMin: 15,
      constantTempMax: 25,
      constantHumidityMin: 40,
      constantHumidityMax: 70,
      constantPhMin: 6,
      constantPhMax: 7.5,
    },
    maize: {
      constantTempMin: 20,
      constantTempMax: 30,
      constantHumidityMin: 50,
      constantHumidityMax: 80,
      constantPhMin: 5.5,
      constantPhMax: 70,
    },
    Rice: {
      constantTempMin: 20,
      constantTempMax: 35,
      constantHumidityMin: 70,
      constantHumidityMax: 80,
      constantPhMin: 6,
      constantPhMax: 7,
    },
    // Add more crops and their corresponding constants as needed
  };

  return (
    <>
      <NavBar />
      <ServiceSection />
      <div>
        <select
          className="block mt-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:border-indigo-500 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
          value={selectedCrop}
          onChange={(e) => setSelectedCrop(e.target.value)}
        >
          <option value="Wheat">Wheat</option>
          <option value="maize">maize</option>
          <option value="Rice">Rice</option>
          {/* Add more options for other crop types */}
        </select>
      </div>
      <div className="grid grid-cols-2 gap-2">
        <div className="col-span-2 md:col-span-1">
          <TempGraph
            constantTempMin={constantsByCrop[selectedCrop].constantTempMin}
            constantTempMax={constantsByCrop[selectedCrop].constantTempMax}
          />
        </div>
        <div className="col-span-2 md:col-span-1">
          <HumidityGraph
            constantHumidityMin={
              constantsByCrop[selectedCrop].constantHumidityMin
            }
            constantHumidityMax={
              constantsByCrop[selectedCrop].constantHumidityMax
            }
          />
        </div>
        <div className="col-span-2 md:col-span-1">
          <WaterPercentage
            constantPhMin={constantsByCrop[selectedCrop].constantPhMin}
            constantPhMax={constantsByCrop[selectedCrop].constantPhMax}
          />
        </div>
        <div className="col-span-2 md:col-span-1">
          <Test />
        </div>
      </div>
      <WeatherData />
      <Footer />
    </>
  );
}

export default Services;
