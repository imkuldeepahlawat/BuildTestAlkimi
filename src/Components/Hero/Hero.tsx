import Image from "next/image";
import React from "react";
import girlImage from "../../assets/girl_red_background.png";
import kidImage from "../../assets/kid_with_hand.png";
import cpu_chipIcon from "../../assets/cpu-chip-01.svg";
import cubeIcon from "../../assets/cube-01.svg";
import percentIcon from "../../assets/percent-03.svg";
import serverIcon from "../../assets/server-01.svg";
import targetIcon from "../../assets/target-05.svg";
import usersIcon from "../../assets/users-plus.svg";

const Hero = () => {
  return (
    <div className="ml-[10px] mr-[10px] md:ml-[20%] md:mr-[18%]">
      <h1 className="w-[301px] text-[40px] md:w-[903px] md:text-[120px] uppercase font-bold text-left">
        lorem ipsum
      </h1>
      <div className="grid  ">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-4 mb-10">
          {/* card1 */}
          <div className="gap-10 md:gap-4 flex flex-col">
            <h3 className="uppercase font-bold">dolor sit </h3>
            <p className="font-extralight  opacity-70">
              Lorem ipsum dolor sit amet consectetur. In nibh nam vel lacus sit.
              Neque venenatis mattis est nibh sed quis vel quis eu. In tincidunt
              faucibus aliquet quis sed sed. Phasellus non at lacus convallis
              elementum. Suspendisse tincidunt congue sem turpis. Nulla eu lorem
              cras leo.
            </p>
            <Image className="w-[24px] inline" src={usersIcon} alt="smallLogofopost"/>
          </div>
          {/* card2 */}
          <div className="gap-10 md:gap-4 flex flex-col">
            <h3 className="uppercase font-bold">Lorem ipsum dolor sit </h3>
            <p className="font-extralight  opacity-70">
              Dolor adipiscing condimentum aliquam nullam mauris ante ipsum vel
              nisl. Dignissim molestie amet purus felis egestas amet eget.
              Viverra malesuada ultricies nunc vel diam posuere mauris sociis
              maecenas. Aenean dui et nec ultrices libero lacus.
            </p>
            <Image className="w-[24px] inline" src={serverIcon} alt="smallLogofopost"/>
          </div>
          {/* card 3 */}
          <div className="gap-10 md:gap-4 flex flex-col">
            <Image className="w-[410px]" src={girlImage} alt="girlImage" />
            <h3 className="uppercase font-bold">Lorem ipsum dolor sit </h3>
            <p className="font-extralight  opacity-70">
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem
              accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
              quae ab illo inventore veritatis et quasi architecto beatae vitae
              dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit
              aspernatur aut odit aut fugit.
            </p>
            <Image className="w-[24px] inline" src={targetIcon} alt="smallLogofopost"/>
          </div>
          {/* card 4 */}
          <div className="gap-10 md:gap-4 flex flex-col">
            <h3 className="uppercase font-bold">Lorem ipsum dolor sit </h3>
            <p className="font-extralight  opacity-70">
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem
              accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
              quae ab illo inventore veritatis et quasi architecto beatae vitae
              dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit
              aspernatur aut odit aut fugit.
            </p>
            <Image className="w-[24px] inline" src={percentIcon}  alt="smallLogofopost"/>
          </div>
          {/* cadr 5 */}
          <div className="gap-10 md:gap-4 flex flex-col">
            <h3 className="uppercase font-bold">Lorem ipsum dolor sit </h3>
            <p className="font-extralight  opacity-70">
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem
              accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
              quae ab illo inventore veritatis et quasi architecto beatae vitae
              dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit
              aspernatur aut odit aut fugit.
            </p>
            <Image className="w-[24px] inline" src={cpu_chipIcon}  alt="smallLogofopost"/>
          </div>
        </div>
        {/* card 6 */}
        <div className="gap-4 flex flex-col md:flex-row gap-10 md:ml-[250px]">
          <Image className="md:w-[380px] md:h-[380px]" src={kidImage} alt="kidImage" />
          <div className="gap-4 md:ml-10 flex flex-col">
            <h3 className="uppercase font-bold">Lorem ipsum dolor sit </h3>
            <p className="font-extralight  opacity-70">
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem
              accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
              quae ab illo inventore veritatis et quasi architecto beatae vitae
              dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit
              aspernatur aut odit aut fugit.
            </p>
            <Image className="w-[24px] inline" src={cubeIcon}  alt="smallLogofopost"/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
