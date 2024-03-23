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

function HumidityGraph({ constantHumidityMin, constantHumidityMax }) {
  const [humidityData, setHumidityData] = useState([]);

  useEffect(() => {
    fetchData();
  }, [constantHumidityMax, constantHumidityMin]);

  const fetchData = async () => {
    try {
      const response = await axios.get("http://localhost:9000/api/data");
      const humidityValues = response.data.documents.map((item) => ({
        humidity: item.humidity,
        min: constantHumidityMin,
        max: constantHumidityMax, // Example constant value, replace with your actual constant data
      }));
      setHumidityData(humidityValues);
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
        Humidity Graph
      </h2>
      <ResponsiveContainer>
        <LineChart
          data={humidityData}
          margin={{ top: 20, right: 30, left: 20, bottom: 20 }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Line
            type="monotone"
            dataKey="humidity"
            stroke="#82ca9d"
            activeDot={{ r: 8 }}
          />
          <Line
            type="monotone"
            dataKey="min"
            stroke="#8884d8"
            activeDot={{ r: 8 }}
          />
          <Line
            type="monotone"
            dataKey="max"
            stroke="#8884d8"
            activeDot={{ r: 8 }}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}

export default HumidityGraph;
