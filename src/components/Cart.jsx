import React, { useState } from "react";
import Ecommerce from "/ecommerce.png";
import { Link } from "react-router-dom";
import PageHeader from "./PageHeader";
const orderSummary = {
  subTotal: "$250.00",
  total: "$250.00",
};
const products = [
  {
    id: 1,
    name: "Product 1",
    price: "$100",
    quantity: 2,
    total: "$200",
  },
  {
    id: 2,
    name: "Product 2",
    price: "$200",
    quantity: 1,
    total: "$200",
  },
  {
    id: 3,
    name: "Product 3",
    price: "$300",
    quantity: 3,
    total: "$900",
  },
  {
    id: 4,
    name: "Product 3",
    price: "$300",
    quantity: 3,
    total: "$900",
  },
  {
    id: 5,
    name: "Product 3",
    price: "$300",
    quantity: 3,
    total: "$900",
  },
  {
    id: 6,
    name: "Product 3",
    price: "$300",
    quantity: 3,
    total: "$900",
  },
  {
    id: 7,
    name: "Product 3",
    price: "$300",
    quantity: 3,
    total: "$900",
  },
];
const Cart = () => {
  const [isCartEmpty, setCartEmpty] = useState(false);
  return (
    <>
      <div className="h-auto">
        <PageHeader pagename={"Cart"} />
        {isCartEmpty && (
          <div className="flex flex-col h-[480px] justify-center items-center space-y-6">
            <h1 className="text-3xl font-medium">Shopping Cart</h1>
            <p>Your Cart is Empty !</p>
            <Link to="/shop">
              <button className="w-60 p-4 bg-slate-700 rounded-md text-white">
                Continue Shopping
              </button>
            </Link>
          </div>
        )}
        {!isCartEmpty && (
          <div className=" lg:px-48  lg:grid lg:grid-cols-4">
            <div className="overflow-x-auto col-span-3 ">
              <table className="w-full text-left ">
                <thead>
                  <tr>
                    <th className="px-4 py-4 sm:px-6 md:px-8">Product</th>
                    <th className="px-4 py-4 sm:px-6 md:px-8"></th>
                    <th className="px-4 py-4 sm:px-6 md:px-8">Price</th>
                    <th className="px-4 py-4 sm:px-6 md:px-8">Quantity</th>
                    <th className="px-4 py-4 sm:px-6 md:px-8">Total</th>
                    <th className="px-4 py-4 sm:px-6 md:px-8">Remove</th>
                  </tr>
                </thead>
                <tbody>
                  {products.map((product) => (
                    <tr
                      key={product.id}
                      className="hover:bg-slate-200 transition-colors duration-300"
                    >
                      <td className="px-4 py-2 sm:px-6">
                        <div className="flex items-center gap-4 ">
                          <img
                            src={Ecommerce}
                            alt={product.name}
                            className="w-16 h-16 md:w-24 md:h-24 rounded-lg"
                          />
                        </div>
                      </td>
                      <td className="px-4 py-2 sm:px-6 md:px-8">
                        <p>{product.name}</p>
                      </td>
                      <td className="px-4 py-2 sm:px-6 md:px-8">
                        <p>{product.price}</p>
                      </td>
                      <td className="px-4 py-2 sm:px-6 md:px-8">
                        <p>{product.quantity}</p>
                      </td>
                      <td className="px-4 py-2 sm:px-6 md:px-8">
                        <p>{product.total}</p>
                      </td>
                      <td className="px-4 py-2 sm:px-6 md:px-8">
                        <button className="hover:bg-slate-500 bg-slate-400 text-white px-3 py-1 rounded">
                          Remove
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div className="lg:col-span-1 bg-blue-gray-50 p-4 rounded-lg mt-10">
              <p className="text-lg font-bold">Order Summary</p>
              <div className="mt-4">
                <p className="text-sm">Sub total</p>
                <p className="text-lg font-bold">{orderSummary.subTotal}</p>
              </div>
              <div className="mt-4">
                <p className="text-sm">Total</p>
                <p className="text-lg font-bold">{orderSummary.total}</p>
              </div>
              <div className="mt-4 border-t border-blue-gray-300 pt-4">
                <p className="text-sm">(Inclusive of tax $0.00)</p>
              </div>
              <div className="mt-4">
                <button className="bg-blue-gray-500 text-white px-4 py-2 rounded w-full">
                  CHECKOUT
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default Cart;
