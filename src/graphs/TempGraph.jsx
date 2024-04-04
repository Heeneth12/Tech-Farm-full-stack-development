import React, { useState, useEffect } from "react";
import axios from "axios";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

function AgricultureTemperature({ constantTempMin, constantTempMax }) {
  const [temperatureData, setTemperatureData] = useState([]);

  useEffect(() => {
    fetchData();
  }, [constantTempMax]); // Re-run useEffect whenever constantTemp changes

  const fetchData = async () => {
    try {
      const response = await axios.get(
        "https://tech-farm-backend.onrender.com/api/data"
      );
      const temperatureValues = response.data.documents.map((item) => ({
        temperature: item.temperature,
        constant: constantTempMin, // Use constantTemp prop for constant temperature
        max: constantTempMax,
      }));
      setTemperatureData(temperatureValues);
      console.log(temperatureData);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  return (
    <div
      style={{
        width: "100%",
        height: "400px",
        backgroundColor: "#f8f9fa",
        padding: "20px",
        borderRadius: "10px",
        boxShadow: "0px 0px 10px 2px rgba(0,0,0,0.1)",
      }}
    >
      <h2
        className="font-bold"
        style={{ textAlign: "center", marginBottom: "20px" }}
      >
        Agricultural Land Temperature
      </h2>
      <ResponsiveContainer>
        <LineChart
          data={temperatureData}
          margin={{ top: 20, right: 30, left: 20, bottom: 20 }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Line
            type="monotone"
            dataKey="temperature"
            stroke="#8884d8"
            activeDot={{ r: 8 }}
          />
          <Line
            type="monotone"
            dataKey="constant"
            stroke="#82ca9d"
            activeDot={{ r: 8 }}
          />
          <Line
            type="monotone"
            dataKey="max"
            stroke="#82ca9d"
            activeDot={{ r: 8 }}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}

export default AgricultureTemperature;
