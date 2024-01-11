import React, { useState, useEffect } from "react";

function ProductsBody() {
  const items = [
    {
      H1: "Tomatos",
      details: "This is testting",
      description: "Rs: 32",
      Display:
        "https://images.pexels.com/photos/1327838/pexels-photo-1327838.jpeg",
    },
    {
      H1: "Mangos",
      details: "heeneth",
      description: "Rs: 50",
      Display:
        "https://www.garden.eco/wp-content/uploads/2018/08/where-do-mangos-grow.jpg",
    },
    {
      H1: "Carrot",
      details: "heeneth",
      description: "Rs: 47",
      Display:
        "https://hillviewfarms.com.au/cdn/shop/products/Carrots-Carrots_36f41cf5-58f7-4efa-896d-6c5f533685c4_1024x1024.jpg?v=1628752638",
    },
    {
      H1: "Bananas",
      details: "heeneth",
      description: "testing page",
      Display:
        "https://www.forbesindia.com/media/images/2022/Sep/img_193775_bananas.jpg",
    },
    {
      H1: "Onions",
      details: "heeneth",
      description: "testing page",
      Display:
        "https://www.forbesindia.com/media/images/2022/Sep/img_193775_bananas.jpg",
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
                <button className="inline-block rounded-md border border-transparent bg-indigo-600 px-8 py-3 text-center font-medium text-white hover:bg-indigo-700 mt-2">
                  {" "}
                  Add to cart
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

export default ProductsBody;
