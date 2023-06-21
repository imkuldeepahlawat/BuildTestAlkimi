import Hero from "@/Components/Hero/Hero";
import Navbar from "@/Components/Navbar/Navbar";
import AboutUs from "@/Components/AboutUs/AboutUs";
import Slider from "@/Components/Slider/Slider";
import { Content } from "next/font/google";
import ContentSection from "@/Components/ContentSection/ContentSection";


export default function Home() {
  return (
    <div className="w-full border flex flex-col justify-center ">
      <Navbar/>
      <Hero/>
      <AboutUs/>
      <Slider/>
      <ContentSection/>
    </div>
  )
}
