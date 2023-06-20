import Image from "next/image";
import logoImage from "../../assets/logo.svg";
import BurgermenuImage from "../../assets/burgerMenu.png";
import NavLogo from "./logo/NavLogo";
const Navbar = () => {
  return (
    <div className="text-white lg:h-[50px] flex justify-between align-baseline ">
      <div className="flex gap-4 mt-auto mb-auto">
        <NavLogo image={logoImage} />
        <h3 className="block  lg:hidden">Lorem</h3>
      </div>
      <div className="">
        <span className="hover:cursor-pointer block p-[14px] mt-auto  mb-auto lg:hidden"><Image className="w-[24px] h-[15px]" src={BurgermenuImage} alt="burger menu"/></span>
      </div>
    </div>
  );
};

export default Navbar;
