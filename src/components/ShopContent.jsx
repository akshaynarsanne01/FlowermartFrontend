import React from "react";
import ProductCard from "./ProductCard";
import FilterCard from "./FilterCard";
import Pagination from "./Pagination";
const ShopContent = ({ products, apiError, sortOption, setSortOption }) => {
  const handleSortChange = (e) => {
    setSortOption(e.target.value);
  };

  const applySorting = () => {
    let sortedProducts = [...products];

    if (sortOption === "asc") {
      sortedProducts.sort((a, b) => a.price - b.price);
    } else if (sortOption === "desc") {
      sortedProducts.sort((a, b) => b.price - a.price);
    }

    return sortedProducts;
  };

  return (
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
            value={sortOption}
            onChange={handleSortChange}
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-40 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          >
            <option value="default">Choose an option</option>
            <option value="asc">Price: Low to High</option>
            <option value="desc">Price: High to Low</option>
          </select>
        </div>
        {apiError ? (
          <div className="h-[200px] flex justify-center items-center bg-neutral-100">
            <div className="text-center text-red-500">{apiError}</div>
          </div>
        ) : (
          <>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
              {applySorting().map((product) => (
                <ProductCard key={product._id} product={product} />
              ))}
            </div>
            <Pagination />
          </>
        )}
      </div>
    </div>
  );
};

export default ShopContent;
