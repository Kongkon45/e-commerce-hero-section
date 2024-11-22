"use client"
import React, { useState } from "react";
import { AiOutlineRight, AiOutlineDown } from "react-icons/ai";

const CategoryItem = ({ category }) => {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <div
      className="w-1/3 relative group"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {/* Parent Category */}
      <div className="flex justify-between items-center cursor-pointer p-2 rounded hover:bg-gray-100">
        <div className="flex items-center">
          {/* <img
            src={category.icon}
            alt={category.title}
            className="w-6 h-6 mr-2"
          /> */}
          <span className="text-gray-800 font-medium">{category.title}</span>
        </div>

        {category?.childrens && (
          <div className="flex items-center space-x-4">
            {isHovered ? (
              <AiOutlineDown className="text-gray-500 transform rotate-90 transition duration-300" />
            ) : (
              <AiOutlineRight className="text-gray-500 transition duration-300" />
            )}
          </div>
        )}
      </div>

      {/* Subcategories */}
      {category?.childrens && isHovered && (
        <ul
          className="absolute top-0 left-full mt-0 ml-2 bg-white shadow-md border rounded-lg hidden group-hover:block"
        >
          {category?.childrens?.map((child) => (
            <li key={child.id} className="w-full py-2 px-16 border-2 border-red-500 hover:bg-gray-100">
              <CategoryItem category={child} />
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default CategoryItem;
