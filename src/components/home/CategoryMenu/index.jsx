import React from "react";
import CategoryItem from "../CategoryItem";

const CategoryMenu = ({ categories }) => {
  return (
    <div className="container w-full p-4">
      <ul className="space-y-0">
        {categories?.map((category) => (
          <CategoryItem key={category?.id} category={category} />
        ))}
      </ul>
    </div>
  );
};

export default CategoryMenu;
