import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import banner from "/banner2.jpg";
import ProductCard from "./ProductCard";
const Body = () => {
  const [featuredProducts, setFeaturedProducts] = useState([]);
  const [apiError, setApiError] = useState(null);
  const fetchFeatured = async () => {
    try {
      const featuredproducts = await fetch(
        "http://localhost:8001/products/featured"
      );
      if (!featuredproducts.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      const data = await featuredproducts.json();
      setFeaturedProducts(data);
      setApiError(null);
    } catch (error) {
      console.error("Error fetching products:", error.message);
      setApiError("Error fetching featured products. Please try again later.");
    }
  };
  useEffect(() => {
    fetchFeatured();
  }, []);
  return (
    <>
      <div className="bg-white text-black">
        <div className="relative w-full h-[490px] overflow-hidden select-none">
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${banner})` }}
          ></div>

          <div className="relative grid grid-cols-1 sm:grid-cols-2 h-full">
            <div className="flex items-center justify-center">
              {/* Content for the first column */}
            </div>
            <div className="flex items-end justify-center opacity-65">
              <h1 className="text-white text-lg sm:text-4xl mb-2 italic">
                Discount 20% For All Orders Over 2000 RS
              </h1>
              <h1 className="text-xs text-red-400 mb-2 italic">
                Use coupon DISCOUNT20
              </h1>
            </div>
          </div>
        </div>
        <h1 className="text-center m-10 text-2xl uppercase font-bold italic">
          FEATURED PRODUCTS
        </h1>
        {apiError ? (
          <div className="h-[200px] bg-neutral-200 flex justify-center items-center">
            <div className="text-center text-red-500">{apiError}</div>
          </div>
        ) : (
          <div className="grid grid-cols-2 sm:grid-cols-4 px-4 sm:20 lg:px-36 mt-10 gap-4 sm:gap-8">
            {featuredProducts.map((product) => (
              <ProductCard key={product._id} product={product} />
            ))}
          </div>
        )}
      </div>
    </>
  );
};

export default Body;
