"use client";
import React, { useState } from "react";
import { AiOutlineRight, AiOutlineDown } from "react-icons/ai";

const CategoryItem = ({ category }) => {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => setIsHovered(true);
  const handleMouseLeave = () => setIsHovered(false);

  return (
    <div
      className=" relative group bg-white"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {/* Main Category */}
      <div className="flex justify-between items-center cursor-pointer p-2 rounded hover:bg-gray-100">
        <span className="text-gray-800 font-medium hover:text-primary">{category.title}</span>
        {category?.childrens && (
          <div className="text-gray-500">
            {isHovered ? <AiOutlineDown /> : <AiOutlineRight />}
          </div>
        )}
      </div>

      {/* Subcategories */}
      <div className="">
      {isHovered && category?.childrens && (
        <ul className=" absolute left-full top-0 mt-0 ml-1 bg-white shadow-lg border rounded-lg w-full">
          {category?.childrens?.map((child) => (
            <CategoryItem key={child.id} category={child} />
          ))}
        </ul>
      )}
      </div>
    </div>
  );
};

export default CategoryItem;
