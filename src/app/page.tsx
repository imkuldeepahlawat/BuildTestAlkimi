import Hero from "@/Components/Hero/Hero";
import Navbar from "@/Components/Navbar/Navbar";
import AboutUs from "@/Components/AboutUs/AboutUs";
import Slider from "@/Components/Slider/Slider";


export default function Home() {
  return (
    <div className="w-full border flex flex-col justify-center ">
      <Navbar/>
      <Hero/>
      <AboutUs/>
      <Slider/>
    </div>
  )
}
