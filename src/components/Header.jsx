import React, { useState } from "react";
import userIcon from "/usericon.svg";
import { useNavigate } from "react-router-dom";

import shoppingcart from "/shopping-cart.svg";
import Ecommerce from "/ecommerce.png";
import searchimg from "/search.svg";
import { Link } from "react-router-dom";
import cancel from "/x.svg";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Search from "./Search";

const Header = ({ isLoggedIn }) => {
  const navigate = useNavigate();
  const [isSearchVisible, setSearchVisible] = useState(false);
  const [isCartVisible, setCartVisible] = useState(false);
  const handleButtonClick = () => {
    setSearchVisible(!isSearchVisible);
  };
  const handleCartClick = () => {
    setCartVisible(!isCartVisible);
  };
  const checkLogin = () => {
    if (isLoggedIn) {
      navigate("/accounts");
    } else {
      navigate("/login");
    }
  };
  const handleCartButton = (props) => {
    setCartVisible(!isCartVisible);
    navigate(`/${props}`);
  };
  return (
    <>
      <div className="text-lg w-full h-20 bg-white text-black flex items-center justify-around select-none">
        <img src={Ecommerce} alt="" className="cursor-pointer w-14 h-14" />
        <ul className="flex justify-center space-x-6">
          <Link to="/">
            <li className="cursor-pointer hover:text-[#006d77]">Home</li>
          </Link>
          <Link to="/shop">
            <li className="cursor-pointer hover:text-[#006d77]">Shop</li>
          </Link>
        </ul>
        {isSearchVisible && (
          <Search
            isSearchVisible={isSearchVisible}
            setSearchVisible={setSearchVisible}
            handleButtonClick={handleButtonClick}
          />
        )}
        {isCartVisible && (
          <div className="fixed top-4 right-0 bg-white border-slate-400 border-[1px] w-full sm:w-[400px]  z-10 flex flex-col rounded-xl">
            <div className="flex justify-between items-center h-16 px-10">
              <span>Your Cart</span>
              <button className="" onClick={handleCartClick}>
                <img src={cancel} />
              </button>
            </div>
            <hr className="bg-black my-2" />
            <div className="overflow-auto max-h-96">
              <div className="flex  text-center justify-between p-4 mx-6">
                <img src={shoppingcart} />
                <h1>Product Name</h1>
                <h1>Qty</h1>
              </div>
              <div className="flex  text-center justify-between p-4 mx-6">
                <img src={shoppingcart} />
                <h1>Product Name</h1>
                <h1>Qty</h1>
              </div>
            </div>
            <div className="flex justify-center">
              <button
                onClick={() => handleCartButton("cart")}
                className="uppercase border-2 border-slate-500 w-full m-4 rounded-md"
              >
                View Cart
              </button>
            </div>
            <button
              onClick={() => handleCartButton("shop")}
              className="p-4 underline"
            >
              Continue Shopping
            </button>
          </div>
        )}
        <div className="flex space-x-6">
          <img
            src={searchimg}
            onClick={handleButtonClick}
            alt=""
            className="cursor-pointer hover:scale-125 filter hover:brightness-125 transition ease-in-out delay-100"
          />
          <div
            className="relative cursor-pointer hover:scale-125 transition ease-in-out"
            onClick={handleCartClick}
          >
            <img src={shoppingcart} alt="" className="cursor-pointer" />
            <div className="absolute top-1 right-1 bg-neutral-400 text-black min-w-4  h-4  flex items-center justify-center rounded-sm">
              <p className="text-base font-medium">0</p>
            </div>
          </div>
          <img
            src={userIcon}
            onClick={checkLogin}
            className="cursor-pointer hover:scale-125 filter hover:brightness-125 transition ease-in-out"
          />
        </div>
      </div>
    </>
  );
};

export default Header;
