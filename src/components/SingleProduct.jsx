import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import product1 from "/product2.jpg";
import product2 from "/product2.jpg";
import PageHeader from "./PageHeader";
const SingleProduct = () => {
  const { id } = useParams();
  const [data, setData] = useState([]);
  const [apiError, setApiError] = useState(null);
  const fetchSingle = async () => {
    try {
      const response = await fetch(`http://localhost:8001/products/${id}`); // use id in api url
      const data = await response.json();
      setData(data);
      setApiError(null);
    } catch (error) {
      console.error("Error fetching products:", error.message);
      setApiError("Error fetching product. Please try again later.");
    }
  };
  useEffect(() => {
    fetchSingle();
  }, []);
  return (
    <div>
      <PageHeader pagename={`${data.name}`} />
      {apiError ? (
        <div className="h-[440px] flex justify-center items-center bg-neutral-100 m-4 rounded-xl">
          <div className="text-center text-red-500">{apiError}</div>
        </div>
      ) : (
        <div className="p-4 space-y-2 lg:grid lg:grid-cols-2 sm:px-10  sm:mx-20 lg:mx-44 sm:20 ">
          <div className="col-span-1 flexh-[500px] sm:w-[500px] lg:w-full">
            <img
              src={`http://localhost:8001/uploads/${data.image}`}
              className="w-full h-full object-cover rounded-2xl"
            />
          </div>
          <div className="col-span-1 bg-white p-2 sm:p-10 flex flex-col gap-2 sm:gap-6 lg:w-full">
            <h1 className="text-2xl  capitalize">{data.name}</h1>
            <span className="text-xl ">{data.price} ₹</span>
            <ul className="list-disc px-4 ">
              <li>
                <span className="font-medium">Color</span>: {data.color}
              </li>
              <li>
                <span className="font-medium">Brands</span>: {data.brand}
              </li>
            </ul>
            <input
              className=" w-14 bg-neutral-200 border-2 border-slate-200 focus:border-sky-500 focus:outline-none rounded-md p-2 "
              placeholder="QTY.."
            />
            <button className="p-2 w-full rounded-sm border-[1px] border-black">
              Add To cart
            </button>
            <p>{data.description}</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default SingleProduct;
