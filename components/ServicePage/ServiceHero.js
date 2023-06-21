import React from "react";
import Image from "next/image";
// Assests
import WomanFace from "../../assests/images/womanFace.png";
import BackgroundLogo from "../../assests/images/backgroundLogo.png";

const ServiceHero = () => {
  return (
    <div className="relative flex justify-center bg-slate-400 h-[750px] z-10 overflow-hidden">
      {/* face image */}
      <div className="absolute">
        <Image
          className="select-none backgroundLogo"
          alt="Background Logo"
          draggable="false"
          src={BackgroundLogo}
        />
      </div>
      {/* Logo behind the face */}
      <div className="select-none">
        <Image
          className="womanFace w-[100%]"
          alt="Hero Image"
          draggable="false"
          src={WomanFace}
        />
      </div>
      {/* text on image */}
      <div className="absolute mt-[200px] container">
        <div className="flex flex-col gap-y-[28px] items-center md:items-start md:pl-[80px]">
          <div className="flex flex-col gap-y-[8px] items-center md:items-start">
            <p className="normaltext">WHAT WE CAN DO FOR YOU</p>
            <div className="flex flex-col items-center md:items-start">
              <div className="boldtext">Our Services</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceHero;
