import React, { useState, useEffect } from "react";
import axios from "axios";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

function WaterPercentage({ constantWater }) {
  const [WaterPercentageData, setWater] = useState([]);
  useEffect(() => {
    fetchData();
  }, [constantWater]); // Re-run useEffect whenever constantTemp changes

  const fetchData = async () => {
    try {
      const response = await axios.get("http://localhost:9000/api/data");
      const WaterPercentageValues = response.data.documents.map((item) => ({
        rainfall: item.rainfall,
        constant: constantWater, // Use constantTemp prop for constant temperature
      }));
      setWater(WaterPercentageValues);
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
      <h2 style={{ textAlign: "center", marginBottom: "20px" }}>
        Water Percentage Comparison
      </h2>
      <ResponsiveContainer>
        <BarChart
          data={WaterPercentageData}
          margin={{ top: 20, right: 30, left: 20, bottom: 20 }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="month" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar
            dataKey="rainfall"
            fill="#8884d8"
            name="Current Water Percentage"
          />
          <Bar
            dataKey="constant"
            fill="#82ca9d"
            name="Constant Water Percentage"
          />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}

export default WaterPercentage;
