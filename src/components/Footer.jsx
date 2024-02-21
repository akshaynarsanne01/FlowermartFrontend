import React from "react";
import { toast } from "react-toastify";

const Footer = () => {
  const notify = () =>
    toast.success("Successful login", {
      position: "top-right",
      autoClose: 2000,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: false,
      draggable: true,
      progress: undefined,
      theme: "light",
    });
  return (
    <div className=" mt-auto w-full h-28 bg-neutral-100 text-center flex items-center justify-center rounded-2xl select-none">
      &copy; Copyright FlowerMart 2024 . All rights reserved.
    </div>
  );
};

export default Footer;
