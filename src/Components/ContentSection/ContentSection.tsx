import Image from "next/image";
import React from "react";

import kidImage from "../../assets/oringetshirtBoy.png";

import cubeIcon from "../../assets/shield-tick.png";

import serverIcon from "../../assets/dataflow-03.png";
import usersIcon from "../../assets/bar-chart-circle-01.png";

const ContentSection = () => {
  return (
    <div className="ml-[10px] mr-[10px] md:ml-[20%] md:mr-[18%]">
      <h1 className="w-[301px] text-[40px] md:w-[903px]  leading-none md:text-[120px] mb-[45px] uppercase font-bold text-left">
      lorem ipsum dolor set
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
        </div>
        {/* card 6 */}
        <div className="gap-4 flex flex-col md:flex-row gap-10 md:ml-[250px]">
          <Image className="md:w-[410px] md:h-[360px] md:w-[410px]" src={kidImage} alt="kidImage" />
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
      <h1 className="w-[301px] text-[40px] md:w-[1398px]  leading-none md:text-[110px] mb-[45px] mt-[100px] uppercase font-bold text-left">
      lorem ipsum dolor
      </h1>
    </div>
  )
}

export default ContentSection