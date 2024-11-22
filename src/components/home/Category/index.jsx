"use client";
import React, { useEffect, useState } from "react";
import CategoryMenu from "../CategoryMenu";
import Image from "next/image";
import "./Category.css";

import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/effect-coverflow";
import "swiper/css/virtual";
import 'swiper/css/pagination';
import { Autoplay, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

const breakpoints = {
  0: {
    slidesPerView: 1,
    spaceBetween: 0,
  },
  768: {
    slidesPerView: 1,
    spaceBetween: 0,
  },
  1024: {
    slidesPerView: 1,
    spaceBetween: 0,
  },
};

const carouselData = [
  {
    id: 1,
    img: "/assets/slide-banner1.png",
  },
  {
    id: 2,
    img: "/assets/slide-banner1.png",
  },
  {
    id: 3,
    img: "/assets/slide-banner1.png",
  },
  {
    id: 4,
    img: "/assets/slide-banner1.png",
  },
  {
    id: 5,
    img: "/assets/slide-banner1.png",
  },
];

const Category = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    fetch("https://api.shope.com.bd/api/v1/public/hero-categories")
      .then((res) => res.json())
      .then((data) => setCategories(data))
      .catch((err) => console.log(err));
  });

  console.log({ categories });

  return (
    // <div className="min-h-screen bg-gray-50 flex justify-center items-center banner__bg">
    //   <div className="w-full max-w-3xl">
    //     {/* <h1 className="text-2xl font-bold mb-4">Categories</h1> */}
    //     <CategoryMenu categories={categories} />
    //   </div>
    // </div>
    <div className="h-screen ">
      {/* ==================== swiper slider ================ */}
      
      <Swiper
        className="relative"
        modules={[Autoplay, Pagination]}
        loop={true}
        pagination={{ clickable: true }}
        autoplay={{
          delay: 3000,
          pauseOnMouseEnter: false,
          disableOnInteraction: false,
          stopOnLastSlide: false,
        }}
        speed={3000}
        allowTouchMove={false}
        breakpoints={breakpoints}
        spaceBetween={12}
      >
        {carouselData.map((data) => (
          <SwiperSlide key={data.id} className={` !h-auto !md:h-full`}>
            <Image
              className="w-full h-screen"
              src={data.img}
              alt="carousel image"
              width={800}
              height={600}
            />
            
          </SwiperSlide>
        ))}
        <div className="-mt-[20px] absolute top-0 z-50">
        <CategoryMenu className="w-full bg-white" categories={categories} />
        </div>
        
      </Swiper>
      
    </div>
  );
};

export default Category;
