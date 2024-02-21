import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
const Accounts = ({ setIsLoggedIn }) => {
  const [useDetails, setUserDetails] = useState("");
  const navigate = useNavigate();
  const fetchData = async () => {
    try {
      const token = localStorage.getItem("token");
      const response = await fetch("http://localhost:8001/users/user", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          "x-auth-token": token,
        },
      });

      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      const data = await response.json();
      setUserDetails(data);
    } catch (error) {
      console.error("Error fetching user details:", error.message);
    }
  };
  useEffect(() => {
    fetchData(); // Invoke the function to initiate the fetch
  }, []); // Empty dependency array means this effect runs once, similar to componentDidMount

  const Logout = async (e) => {
    e.preventDefault();

    try {
      const token = localStorage.getItem("token");
      const response = await fetch("http://localhost:8001/auth/logout", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "x-auth-token": token,
        },
      });

      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      localStorage.clear();
      setIsLoggedIn(false);
      navigate("/");
    } catch (error) {
      if (error.message.includes("400")) {
        console.error("Logout failed: Header is not provided");
      } else {
        console.error("logout failed:", error.message);
      }
    }
  };
  return (
    <div className=" ">
      <h1 className="sm:mx-4 lg:mx-44 my-2 p-4">
        {" "}
        <Link to="/">
          <span className="pr-2">Home</span>
        </Link>
        /<span className="px-2">shopping Cart</span>
      </h1>
      <div className="sm:grid grid-cols-5 p-4 sm:px-32 space-y-8 sm:space-y-0 sm:space-x-8">
        <div className="sm:col-span-3 sm:pr-4">
          <h1 className="font-medium">Order History</h1>
          <hr />
        </div>
        <div className="sm:col-span-2">
          <h1 className="font-medium">Account Details</h1>
          <hr />
          <div className="space-y-4 py-2">
            <div className="flex justify-start items-center">
              <img src="/user.png" className="w-6 h-6" />
              <h1 className="px-2">{useDetails.name}</h1>
            </div>
            <div className="flex justify-start items-center">
              <img src="/mail.svg" className="w-6 h-6" />
              <h1 className="px-2">{useDetails.email}</h1>
            </div>
            <button onClick={Logout} className="px-4 text-blue-500">
              Logout
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Accounts;
