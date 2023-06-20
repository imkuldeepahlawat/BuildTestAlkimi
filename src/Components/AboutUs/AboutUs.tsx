import React from "react";
import circleimage from "./aboutus.png";
import bgimage from "./aboutusbackground.png";
import Image from "next/image";
const AboutUs = () => {
  return (
    <div className="md:p-[130px]">
      {/* for big screen */}
      <div
        className="hidden md:block relative h-[682px] md:flex md:align-baseline md:gap-4 p-[40px] "
        id="aboutusbig"
      >
        {/* left */}
        <Image
          className="absolute w-full h-full  z-1 top-0 bottom-0 left-0 right-0 opacity-0  hover:opacity-100 hover:blur-sm duration-400"
          src={bgimage} alt="mainAboutusImage"
        />
        <Image
          className="absolute pointer-events-none w-[353px] h-[373px] top-[195px] -z-50 left-[235px] "
          src={circleimage}
         alt="circleimgae"/>
        <div className="z-10 ml-10 pointer-events-none uppercase w-50 justify-start hover:text-black">
          <div className=" font-extrabold text-[120px] text-shadow-md">
            <h3>about</h3>
            <h3>us</h3>
          </div>
          <div className=" ml-2 w-[58px] opacity-70">
            <p className="uppercase">lorem</p>
            <p className="uppercase">lorem</p>
          </div>
        </div>
        {/* right */}
        <p className="z-10 ml-[70px] mt-auto mb-auto pointer-events-none justify-end w-50">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </p>
      </div>
      {/* for small screen */}
      <div className="block md:hidden"></div>
    </div>
  );
};

export default AboutUs;
