import React from "react";

const Search = ({ handleButtonClick }) => {
  return (
    <div className="fixed top-0 px-4 left-0 w-full h-20 bg-white flex justify-center space-x-2 sm:space-x-32 items-center z-50 ">
      <input
        type="text"
        placeholder="Search..."
        className="p-2 border border-gray-300 rounded w-2/3"
      />
      <button className="w-32 p-2">Search</button>
      <button
        onClick={handleButtonClick}
        className="capitalize bg-neutral-100 p-4 rounded-2xl"
      >
        cancel
      </button>
    </div>
  );
};

export default Search;
