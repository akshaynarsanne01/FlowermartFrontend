import React from "react";
import { Link } from "react-router-dom";
const Error = () => {
  return (
    <div className="h-auto">
      <h1 className="sm:mx-4 lg:mx-44 my-2 p-4">
        {" "}
        <Link to="/">
          <span className="pr-2">Home</span>
        </Link>
        /<span className="px-2">Not found</span>
      </h1>
      <div className="flex flex-col h-[480px] justify-center items-center space-y-6">
        <h1 className="text-3xl font-medium">404 Page Not Found</h1>
        <p>The page you requested does not exist.</p>
        <Link to="/shop">
          <button className="w-60 p-4 bg-slate-700 rounded-md text-white">
            Continue Shopping
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Error;
