import React, { useState, useEffect } from "react";

function ServicesBody() {
  const items = [
    {
      H1: "test",
      details: "heeneth",
      description: "testing page",
      Display:
        "https://st4.depositphotos.com/5797102/39154/v/450/depositphotos_391546476-stock-illustration-smart-farm-technology-concept-vector.jpg",
    },
    {
      H1: "test",
      details: "heeneth",
      description: "testing page",
      Display:
        "https://9to5mac.com/wp-content/uploads/sites/6/2023/04/Apple-Weather-app.jpg?quality=82&strip=all&w=1600",
    },
    {
      H1: "test",
      details: "heeneth",
      description: "testing page",
      Display:
        "https://img.freepik.com/premium-vector/smart-agriculture-innovation-technology_212168-1008.jpg?size=626&ext=jpg&ga=GA1.1.1546980028.1703289600&semt=ais",
    },
    {
      H1: "test",
      details: "heeneth",
      description: "testing page",
      Display:
        "https://i0.wp.com/www.globaltrademag.com/wp-content/uploads/2021/09/shutterstock_550516075.png?fit=994%2C516&ssl=1",
    },
    {
      H1: "test",
      details: "heeneth",
      description: "testing page",
      Display:
        "https://nordicapis.com/wp-content/uploads/How-to-Build-an-API-Driven-Weather-App-1024x576.png",
    },
  ];

  return (
    <>
      <div className="grid grid-cols-2 lg:grid-cols-4 sm:grid-cols-2 gap-4 pl-4 pr-4 mb-8 p-2">
        {items.map((item, index) => (
          <div
            key={index}
            className="relative overflow-hidden rounded-lg shadow-md hover:shadow-xl transition duration-300"
          >
            <img
              src={item.Display} // Use TestImg's imageUrl here
              alt={`Image ${index}`}
              className="w-full object-cover h-64"
            />
            <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity">
              <div className="text-white text-center">
                <h1 className="text-2xl font-bold mb-2">{item.H1}</h1>
                <p className="text-sm mb-4">{item.details}</p>
                <p className="text-sm mb-2">{item.discription}</p>
                <p className="text-xs">Updated: {item.updated}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

export default ServicesBody;
