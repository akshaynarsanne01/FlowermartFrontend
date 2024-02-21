import React from "react";

const FilterCard = () => {
  return (
    <div className="p-2">
      <div className="col-span-0 sm:col-span-1 p-2 ">
        <div className="uppercase">
          Color
          <hr className="h-px my-4 bg-gray-200 border-0 dark:bg-gray-700" />
        </div>
        <div className="flex items-center">
          <input
            id="default-checkbox"
            type="checkbox"
            value=""
            className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
          />
          <label
            htmlFor="default-checkbox"
            className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
          >
            Color1
          </label>
        </div>
      </div>
    </div>
  );
};

export default FilterCard;
