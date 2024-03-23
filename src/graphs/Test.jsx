import React from "react";
import {
  ScatterChart,
  Scatter,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

function Test() {
  const data = [
    { soilPh: 6.5, cropYield: 4.2 },
    { soilPh: 6.8, cropYield: 4.5 },
    { soilPh: 7.0, cropYield: 5.1 },
    { soilPh: 6.2, cropYield: 3.9 },
    { soilPh: 7.2, cropYield: 5.3 },
    // Add more data points as needed
  ];
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
        Soil pH vs Crop Yield
      </h2>
      <ResponsiveContainer>
        <ScatterChart margin={{ top: 20, right: 30, left: 20, bottom: 20 }}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis type="number" dataKey="soilPh" name="Soil pH" unit="" />
          <YAxis
            type="number"
            dataKey="cropYield"
            name="Crop Yield"
            unit=" tons/acre"
          />
          <Tooltip cursor={{ strokeDasharray: "3 3" }} />
          <Scatter name="Fields" data={data} fill="#8884d8" />
        </ScatterChart>
      </ResponsiveContainer>
    </div>
  );
}

export default Test;
