import React from "react";
import { useState } from "react";
import Sell from "./Sell";
import ProductsBody from "./ProductsBody";

export default function ProductSection() {
  const [isBuying, setIsBuying] = useState(true);

  const handleBuySell = () => {
    setIsBuying((prevIsBuying) => !prevIsBuying);
  };
  return (
    <>
      <div className="relative overflow-hidden bg-white">
        <div className=" sm:pb-12 sm:pt-12 lg:pb-12 lg:pt-12">
          <div className="relative mx-auto max-w-full px-4 sm:static sm:px-6 lg:px-8">
            <div className="sm:max-w-lg">
              <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
                Products
              </h1>
              <p className="mt-4 text-xl text-gray-500">
                Farmers: Sell direct, earn fair, connect with consumers. Support
                Consumers: Enjoy fresh, local food, support your community.
                Build a healthier, sustainable food system!
              </p>
            </div>
            <div>
              <div className="mt-10">
                {/* Decorative image grid */}
                <div
                  aria-hidden="true"
                  className="pointer-events-none lg:absolute lg:inset-y-0 lg:mx-auto lg:w-full lg:max-w-7xl"
                >
                  <div className="absolute transform sm:left-1/2 sm:top-0 sm:translate-x-8 lg:left-1/2 lg:top-1/2 lg:-translate-y-1/2 lg:translate-x-8">
                    <div className="flex items-center space-x-6 lg:space-x-8">
                      <div className="grid flex-shrink-0 grid-cols-1 gap-y-6 lg:gap-y-8">
                        <div className="h-64 w-44 overflow-hidden rounded-lg sm:opacity-0 lg:opacity-100"></div>
                        <div className="h-64 w-44 overflow-hidden rounded-lg"></div>
                      </div>
                      <div className="grid flex-shrink-0 grid-cols-1 gap-y-6 lg:gap-y-8">
                        <div className="h-64 w-44 overflow-hidden rounded-lg"></div>
                        <div className="h-64 w-44 overflow-hidden rounded-lg"></div>
                        <div className="h-64 w-44 overflow-hidden rounded-lg"></div>
                      </div>
                    </div>
                  </div>
                </div>

                <a>
                  <button
                    onClick={handleBuySell}
                    className={`inline-block rounded-md border border-transparent px-8 py-3 text-center font-medium text-white ${
                      isBuying ? "bg-indigo-600" : "bg-green-500"
                    } hover:bg-indigo-700 m-4`}
                  >
                    {isBuying ? "Buy Now" : "Sell Now"}
                  </button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {isBuying ? <Sell /> : <ProductsBody />}
    </>
  );
}
