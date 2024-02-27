import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import ProductCard from "./ProductCard";
import FilterCard from "./FilterCard";
import Pagination from "./Pagination";
import PageHeader from "./PageHeader";
import ShopContent from "./ShopContent";
const API_URL = "http://localhost:8001/products/";

const Shop = () => {
  const [products, setProducts] = useState([]);
  const [apiError, setApiError] = useState(null);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch(API_URL);

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
      <PageHeader pagename={"Shop"} />
      <div className="sm:mx-4 lg:mx-44 p-20 bg-slate-300 flex justify-center text-2xl uppercase">
        FLOWERS shop
      </div>
      <ShopContent products={products} apiError={apiError} />
    </div>
  );
};

export default Shop;
