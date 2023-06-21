// "use client";
import React from 'react'
import Accordian from '../Accordian/Accordian'
import { AccordianData } from '../Data/Data' 

const Footer = () => {
  return (
    <div className="ml-[10px] mr-[10px] md:ml-[20%] md:mr-[18%] hidden md:block">
        <p className='opacity-[80] mt-5'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
        <Accordian data={AccordianData} />
    </div>
  )
}

export default Footer