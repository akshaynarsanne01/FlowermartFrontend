import React, { useState, useEffect } from "react";
import ProductCard from "./ProductCard";
import FilterCard from "./FilterCard";
import Pagination from "./Pagination";
import { Link } from "react-router-dom";
const Shop = () => {
  const [products, setProducts] = useState([]);
  const [selectedValue, setSelectedValue] = useState("default");
  const [apiError, setApiError] = useState(null);
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch("http://localhost:8001/products/");

        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const data = await response.json();
        setProducts(data);
        setApiError(null);
      } catch (error) {
        console.error("Error fetching products:", error.message);
        setApiError(
          "Error fetching featured products. Please try again later."
        );
      }
    };

    fetchProducts();
  }, []);
  return (
    <div className="">
      <h1 className="sm:mx-4 lg:mx-44 my-2 p-4">
        <Link to="/">
          <span className="pr-2">Home</span>
        </Link>
        /<span className="px-2">Shop</span>
      </h1>
      <div className="sm:mx-4 lg:mx-44 p-20 bg-slate-300 flex justify-center text-2xl uppercase">
        FLOWERS shop
      </div>
      <div className="grid grid-cols-4 sm:grid-cols-4 px-4 sm:20 lg:px-44 mt-4 lg:mt-6 gap-4 sm:gap-8">
        <div className="p-2 sm:block hidden">
          <h1 className="text-lg font-medium capitalize">Shop By</h1>
          <FilterCard />
        </div>
        <div className="col-span-4 sm:col-span-3">
          <div className="flex justify-end items-center space-x-4">
            <label
              htmlFor="countries"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Sort By:
            </label>
            <select
              id="filter"
              value={selectedValue}
              onChange={(e) => setSelectedValue(e.target.value)}
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-40 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            >
              <option value="option1">Choose a country</option>
              <option>Price</option>
            </select>
          </div>
          {apiError ? (
            <div className="h-[200px] flex justify-center items-center bg-neutral-100">
              <div className="text-center text-red-500">{apiError}</div>
            </div>
          ) : (
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
              {products.map((product) => (
                <ProductCard key={product._id} product={product} />
              ))}
            </div>
          )}
          <Pagination />
        </div>
      </div>
    </div>
  );
};

export default Shop;
