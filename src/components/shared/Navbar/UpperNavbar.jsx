"use client"
import React, { useState } from "react";

const UpperNavbar = () => {
  const [language, setLanguage] = useState("Select Language");

  const handleChange = (event) => {
    setLanguage(event.target.value);
    console.log("Selected Language:", event.target.value);
  };
  return (
    <div className="bg-secondary-100 py-[5px]">
      <div className=" container flex items-center justify-between">
        <div className="flex items-center gap-[35px]">
          <div>
            <select
              className="bg-secondary-100 text-primary"
              name="language"
              value={language}
              onChange={handleChange}
            >
              <option value="Select Language" disabled>
                Select Language
              </option>
              <option value="English">English</option>
              <option value="Bangla">Bangla</option>
            </select>
          </div>
          <p className="text-sm font-normal leading-normal text-black">
            Help Center
          </p>
          <p className="text-sm font-normal leading-normal text-black">
            Helpline: <span className="hover:text-primary hover:underline cursor-pointer">0964781656</span>
          </p>
        </div>
        <div className="flex items-center gap-[35px]">
          <p className="text-sm font-normal leading-normal text-black">
            Become a Seller
          </p>
          <p className="text-sm font-normal leading-normal text-black">
            Order Track
          </p>
          <p className="text-sm font-normal leading-normal text-primary cursor-pointer hover:underline">
            Sign up / Login
          </p>
        </div>
      </div>
    </div>
  );
};

export default UpperNavbar;
