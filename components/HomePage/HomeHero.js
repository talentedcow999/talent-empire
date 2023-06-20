import React from "react";
import Image from "next/image";
// Assests
import WomanFace from "../../assests/images/womanFace.png";
import BackgroundLogo from "../../assests/images/backgroundLogo.png";

const HomeHero = () => {
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
      <div className="absolute mt-[160px] container">
        <div className="flex flex-col gap-y-[28px] items-center md:items-start md:pl-[80px]">
          <div className="flex flex-col gap-y-[8px] items-center md:items-start">
            <p className="normaltext">
              We Building Outstanding OnlyFans Careers
            </p>
            <div className="flex flex-col items-center md:items-start">
              <div className="boldtext">Empower To</div>
              <div className="boldtext">Succeed</div>
            </div>
          </div>
          <div className="normaltext">WORLD’S BEST ONLYFANS AGENCY</div>
          <div>
            <button className="black_applynowbtn">
              <span>Apply Now!</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeHero;
