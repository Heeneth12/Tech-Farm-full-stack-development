import React from "react";
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

function PhGraph() {
  // Dummy pH data for demonstration
  const phData = [
    { name: "Jan", currentPh: 6.5, constantPh: 7 },
    { name: "Feb", currentPh: 6.6, constantPh: 7 },
    { name: "Mar", currentPh: 8.7, constantPh: 7 },
    { name: "Apr", currentPh: 6.8, constantPh: 7 },
    { name: "May", currentPh: 6.9, constantPh: 7 },
    { name: "Jun", currentPh: 7, constantPh: 7 },
    { name: "Jul", currentPh: 7.1, constantPh: 7 },
    { name: "Aug", currentPh: 7.2, constantPh: 7 },
    { name: "Sep", currentPh: 3.3, constantPh: 7 },
    { name: "Oct", currentPh: 7.2, constantPh: 7 },
    { name: "Nov", currentPh: 7.1, constantPh: 7 },
    { name: "Dec", currentPh: 4, constantPh: 7 },
  ];

  return (
    <div
      style={{
        width: "100%",
        height: "400px",
        backgroundColor: "#f8f9fa",
        padding: "20px",
        borderRadius: "10px",
        marginTop: "10px",
        boxShadow: "0px 0px 10px 2px rgba(0,0,0,0.1)",
      }}
    >
      <h2
        className="font-bold"
        style={{ textAlign: "center", marginBottom: "20px" }}
      >
        pH Value Comparison
      </h2>
      <ResponsiveContainer>
        <LineChart
          data={phData}
          margin={{ top: 20, right: 30, left: 20, bottom: 20 }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Line
            type="monotone"
            dataKey="currentPh"
            stroke="#8884d8"
            name="Current pH"
          />
          <Line
            type="monotone"
            dataKey="constantPh"
            stroke="#82ca9d"
            name="Constant pH"
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}

export default PhGraph;
