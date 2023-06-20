import Image from "next/image";

type NavLogoProps = {
  image: HTMLImageElement ,
};

const NavLogo = ({ image }: NavLogoProps) => {
  return <Image src={image} alt="logo"/>; ;
};

export default NavLogo;
