import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

const Login = ({ setIsLoggedIn }) => {
  const navigate = useNavigate();
  const [userData, setUserData] = useState({
    email: "",
    password: "",
  });
  const [errorMsg, setErrorMsg] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserData({ ...userData, [name]: value });
  };
  const handleError = (e) => {
    setErrorMsg("Email or password are required");
    setTimeout(() => {
      setErrorMsg("");
    }, 4000);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("http://localhost:8001/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(userData),
      });

      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      const responseData = await response.json();
      handleError();
      localStorage.setItem("user", responseData.user._id);
      localStorage.setItem("token", responseData.token);
      setIsLoggedIn(true);
      navigate("/");
    } catch (error) {
      if (error.message.includes("400")) {
        handleError();
        console.error("Login failed: Email and password are required");
      } else {
        console.error("Login failed:", error.message);
      }
    }
  };

  return (
    <div className="flex justify-center h-[530px] border-slate-100 border-2 w-full p-4 sm:p-0">
      <div className="bg-white mt-16 my-auto min-h-52 h-auto w-full text-center rounded-2xl shadow-[0_3px_10px_rgb(0,0,0,0.2)] sm:w-1/2 ">
        <h2 className="mt-4 text-2xl">Login</h2>
        <h1 className="text-sm">{errorMsg}</h1>
        <form onSubmit={handleSubmit} className="p-10 space-y-4  ">
          <input
            type="email"
            name="email"
            value={userData.email}
            onChange={handleChange}
            placeholder="Email"
            className="border-2 p-2 rounded-lg focus:outline-none focus:shadow-outline focus:border-blue-500 w-60 sm:w-80"
            required
          />
          <br />
          <input
            type="password"
            name="password"
            value={userData.password}
            onChange={handleChange}
            placeholder="Password"
            className="border-2 p-2 rounded-lg focus:outline-none focus:shadow-outline focus:border-blue-500 w-60 sm:w-80"
            // required
          />
          <br />

          <button
            className="border-2 border-blue-100 bg-[#eddcd2] hover:bg-[#f0efeb] p-2 rounded-lg w-60 sm:w-80"
            type="submit"
          >
            Login
          </button>
        </form>
        <div className="p-4 mt-0 text-lg capitalize">
          <Link to="/register" className="hover:cursor-pointer">
            Create an account
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Login;
