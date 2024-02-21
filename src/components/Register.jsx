import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const RegisterForm = () => {
  const notify = () => {
    toast.success("Registration Successful !", {
      position: "top-right",
      autoClose: 2000,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });
  };
  const navigate = useNavigate();
  const [userData, setUserData] = useState({
    name: "",
    email: "",
    phoneNumber: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserData({ ...userData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("http://localhost:8001/users/", {
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
      notify();
      setTimeout(() => {
        navigate("/login");
      }, 2000);
    } catch (error) {
      console.error("Registration failed:", error.message);
    }
  };

  return (
    <div className="flex justify-center h-[530px] border-slate-100 border-2 w-full p-4 sm:p-0">
      <div className="bg-white mt-16 my-auto min-h-52 h-auto w-full text-center rounded-2xl shadow-[0_3px_10px_rgb(0,0,0,0.2)] sm:w-1/2 ">
        <h2 className="m-4 text-2xl">Create New Account</h2>
        <form onSubmit={handleSubmit} className="p-4 space-y-4 ">
          <input
            type="text"
            name="name"
            value={userData.username}
            onChange={handleChange}
            placeholder="Full Name"
            className="border-2 p-2 rounded-lg focus:outline-none focus:shadow-outline focus:border-blue-500 w-60 sm:w-80"
            required
          />
          <br />
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
            type="phonenumber"
            name="phoneNumber"
            value={userData.phoneno}
            onChange={handleChange}
            placeholder="Phone Number"
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
            required
          />
          <br />

          <button
            className="border-2 border-blue-100 bg-[#eddcd2] hover:bg-[#f0efeb] p-2 rounded-lg w-60 sm:w-80"
            type="submit"
          >
            Register
          </button>
        </form>
        <div className="p-4 mt-0">
          Already have an account?
          <Link to="/login" className="hover:cursor-pointer">
            Login
          </Link>
        </div>
      </div>
    </div>
  );
};

export default RegisterForm;
