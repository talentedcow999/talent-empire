import React from "react";
import Image from "next/image";
// Assests
import WomanFace from "../../assests/images/womanFace.png";
import BackgroundLogo from "../../assests/images/backgroundLogo.png";

const AboutHero = () => {
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
            <p className="normaltext">INDUSTRY LEADING EXPERTS </p>
            <div className="flex flex-col items-center md:items-start">
              <div className="boldtext">Our Team</div>
            </div>
          </div>
          <div className="normaltext w-[500px]">
            Talent Empire is a globally staffed team of OnlyFans experts based
            in Europe. We provide professional full-service OnlyFans management
            and all tools to maximize your success on OnlyFans. We lift your
            existing career to the next level or entirely kickstart your new
            OnlyFans career and income.
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutHero;
