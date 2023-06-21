"use client";
import React, { useState } from "react";

type AccordionItemType ={
  title: string;
  des: string;
}

type AccordionProps = {
  data: AccordionItemType[];
}

const Accordian =(props:AccordionProps ) => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const handleClick = (index: number) => {
    setActiveIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  return (
    <div className=" ">
      {props.data.map((item, index) => (
        <div key={index} className="mb-2 border rounded-md bg-white">
          <button
            className="w-full p-4 flex bg-black justify-between border rounded-md overflow-hidden items-center"
            onClick={() => handleClick(index)}
          >
            <h3 className="text-lg font-medium">{item.title}</h3>
            <span>{activeIndex === index ? "-" : "+"}</span>
          </button>
          {activeIndex === index && (
            <div className="p-4 bg-white">
              <p className="text-black">{item.des}</p>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default Accordian;