import React from "react";
import { useNavigate } from "react-router-dom";
const ProductCard = ({ product }) => {
  const navigate = useNavigate();
  const imageUrl = `http://localhost:8001/uploads/${product.image}`;
  const handleProduct = (id) => {
    // e.preventDefault();
    navigate(`/shop/${id}`);
  };
  return (
    <div
      onClick={() => handleProduct(product._id)}
      className="w-full sm:w-full sm:min-w-44 h-72 sm:h-96 p-2 pt-4 sm:4 text-left rounded-lg shadow-xl overflow-hidden hover:cursor-pointer  "
    >
      <img
        src={imageUrl}
        className="w-full h-48 sm:h-2/3 object-cover rounded-xl"
        alt="Product"
      />
      <div>
        <h1>{product.name}</h1>
        <span>${product.price}</span>
      </div>
      {/* <button>Click me</button> */}
    </div>
  );
};

export default ProductCard;
