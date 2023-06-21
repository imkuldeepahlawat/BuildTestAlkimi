"use client";
import React, { useState } from "react";
import Image from "next/image";
import Slider from "@/Components/Slider/Slider";
import { slider1Text, slider2Text } from "@/Components/Data/Data";
import logoImage from "../../assets/logo.svg";
import BurgermenuImage from "../../assets/burgerMenu.png";
import XcloseImage from "../../assets/x-close.png";
import NavLogo from "./logo/NavLogo";

const Navbar = () => {
  const [mobileMenu, setMobileMenu] = useState(false);
  const handleOnclick = () => {
    setMobileMenu(!mobileMenu);
  };
  return (
    <>
      <div className="text-white lg:h-[50px] flex justify-between align-baseline ">
        <div className="flex gap-4 mt-auto mb-auto">
          <NavLogo image={logoImage} />
          <h3 className="block  lg:hidden">{mobileMenu?`Menu`:`Lorem`}</h3>
        </div>
        <div className="">
          <span className="hover:cursor-pointer block p-[14px] mt-auto  mb-auto lg:hidden">
            <button onClick={handleOnclick}>
              {mobileMenu ? (<Image
                className="w-[24px] h-[24px]"
                src={XcloseImage}
                alt="burger menu"
              />):(<Image
                className="w-[24px] h-[15px]"
                src={BurgermenuImage}
                alt="burger menu"
              />)}
              
            </button>
          </span>
        </div>
      </div>
      <>
        {mobileMenu && (
          <div className="uppercase">
            <div className="ml-10 mt-10 mb-10  mr-10 ">
              <h3>lorem ipsum</h3>
              <h3>lorem ipsum</h3>
              <h3>lorem ipsum</h3>
              <h3>lorem ipsum</h3>
              <div className="flex justify-between">
                <h3>lorem ipsum</h3>
                <h3 className="opacity-80">Coming Soon </h3>
              </div>
            </div>
            <Slider text={slider1Text} />
          </div>
        )}
      </>
    </>
  );
};

export default Navbar;
