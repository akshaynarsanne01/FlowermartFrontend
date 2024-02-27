import React, { lazy, Suspense, useState, useEffect } from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Body from "./components/Body";
import Error from "./components/Error";
import { ToastContainer } from "react-toastify";
import Accounts from "./components/Accounts";
// Lazy load components
const Shop = lazy(() => import("./components/Shop"));
const SingleProduct = lazy(() => import("./components/SingleProduct"));
const Login = lazy(() => import("./components/Login"));
const Cart = lazy(() => import("./components/Cart"));
const Register = lazy(() => import("./components/Register"));

const AppRoutes = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      setIsLoggedIn(true);
    }
  }, []);
  return (
    <Router>
      <Header isLoggedIn={isLoggedIn} />
      <ToastContainer />
      <Suspense
        fallback={
          <div className="flex justify-center items-center w-full h-screen">
            Loading...
          </div>
        }
      >
        <Routes>
          <>
            <Route path="/" element={<Body />} />
            <Route path="/shop" element={<Shop />} />
            <Route path="/shop/:id" element={<SingleProduct />} />
            <Route
              path="/login"
              element={<Login setIsLoggedIn={setIsLoggedIn} />}
            />
            <Route
              path="/accounts"
              element={<Accounts setIsLoggedIn={setIsLoggedIn} />}
            ></Route>
            <Route path="/register" element={<Register />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="*" element={<Error />} />
          </>
        </Routes>
      </Suspense>
      <Footer />
    </Router>
  );
};

export default AppRoutes;
