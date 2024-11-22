"use client"
import React, { useEffect, useState } from "react";
import CategoryMenu from "./CategoryMenu";

export default function Home() {
    const [categories, setCategories] = useState([])
  
    useEffect(()=>{
        fetch("https://api.shope.com.bd/api/v1/public/hero-categories")
        .then((res)=> res.json())
        .then((data)=> setCategories(data))
    })

    console.log({categories})

  return (
    <div className="min-h-screen bg-gray-50 flex justify-center items-center">
      <div className="w-full max-w-4xl">
        <h1 className="text-2xl font-bold mb-4">Categories</h1>
        <CategoryMenu categories={categories} />
      </div>
    </div>
  );
}
