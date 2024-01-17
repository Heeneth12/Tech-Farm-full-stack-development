import React, { useState, useEffect } from "react";

function Test() {
  const city = "chennia";
  const [weatherData, setWeatherData] = useState(null);

  async function getWeather() {
    const apiKey = "c4422e8bfaa0fe2c56a3d8deb9c23d34";
    const apiUrl = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&cnt=28&units=metric&appid=${apiKey}`;

    try {
      const response = await fetch(apiUrl);
      const data = await response.json();
      setWeatherData(data);
    } catch (error) {
      console.error("Error fetching weather data:", error);
    }
  }

  return (
    <div
      className="w-full relative mx-auto bg-blue-100 p-8 rounded-lg shadow-md item-center "
      style={{
        height: "40vh",
      }}
    >
      <h1 className="text-3xl font-bold mb-4">Weather Forecast</h1>
      <div className="">
        <button
          onClick={getWeather}
          className="p-2 bg-blue-500 text-white rounded-md text-lg cursor-pointer transition duration-200 hover:bg-blue-700"
        >
          Get Weather
        </button>
      </div>

      {weatherData && (
        <div id="weatherData" className="text-center mt-4">
          <h2 className="text-2xl mb-4">Weather Forecast for {city}</h2>
          <ul className="temp list-none max-w-sm p-5 bg-white rounded-md shadow-md mx-auto">
            <li>Temperature: {weatherData.list[0].main.temp}°C</li>
            <li>
              Rainfall:{" "}
              {weatherData.list[0].rain ? weatherData.list[0].rain["3h"] : 0}%
            </li>
            <li>Humidity: {weatherData.list[0].main.humidity}%</li>
          </ul>
        </div>
      )}
    </div>
  );
}

export default Test;
