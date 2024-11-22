import React from "react";
import UpperNavbar from "./UpperNavbar";
import Image from "next/image";
import "./Navbar.css";
// import { IoIosSearch } from "react-icons/io";

const navIcon = ["/assets/user.png", "/assets/wish.png", "/assets/cart.png"];

const Navbar = () => {
  return (
    <div className="">
      <UpperNavbar />
      <div className="bg-white container py-[13px] flex items-center justify-between">
        {/* logo part  */}
        <div>
          <Image className="w-full" src="/assets/logo.png" alt="logo" width={129} height={38} />
        </div>
        {/* search part  */}
        <div className="flex items-center relative">
          <input
            className="w-full bg-secondary-50 rounded-l-lg py-[13px] pl-[13px] pr-[150px]"
            type="search"
            name=""
            id=""
            placeholder="Search Product"
          />
          {/* <IoIosSearch className='p-[11px] bg-primary text-white'/> */}
          <Image
            className="absolute right-0 w-[50px] h-[50px] bg-primary p-[12px] rounded-lg"
            src="/assets/search_icon.png"
            alt="search icon"
            width={24}
            height={24}
          />
        </div>
        <div className="flex items-center gap-[12px]">
          {navIcon?.map((icon, index) => {
            return (
              <div key={index}>
                <Image
                  className="p-3 bg-secondary rounded-lg w-[40px] h-[40px]"
                  src={icon}
                  alt="icon"
                  width={18}
                  height={18}
                />
              </div>
            );
          })}
        </div>
        <div className="bg-primary rounded-[13px] flex items-center gap-[3px] py-1 pr-3 pl-1">
         
          <Image
                  className="w-[40px] h-[40px]"
                  src="/assets/cloud.png"
                  alt="icon"
                  width={40}
                  height={40}
                />
          <p className="text-xl font-bold leading-normal text-white ">Cloud Service</p>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
