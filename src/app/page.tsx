import Hero from "@/Components/Hero/Hero";
import Navbar from "@/Components/Navbar/Navbar";
import AboutUs from "@/Components/AboutUs/AboutUs";
import Slider from "@/Components/Slider/Slider";
import { Content } from "next/font/google";
import ContentSection from "@/Components/ContentSection/ContentSection";
 import { slider1Text,slider2Text } from "@/Components/Data/Data";
import Footer from "@/Components/Footer/Footer";

export default function Home() {
  return (
    <div className="w-full flex flex-col justify-center ">
      <Navbar/>
      <Hero/>
      <AboutUs/>
      <Slider text={slider1Text}/>
      <ContentSection/>
      <Slider text={slider2Text}/>
      <Footer/>
    </div>
  )
}
