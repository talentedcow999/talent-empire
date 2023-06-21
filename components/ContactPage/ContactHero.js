import React from "react";
import Image from "next/image";
// Assests
import WomanFace from "../../assests/images/womanFace.png";
import BackgroundLogo from "../../assests/images/backgroundLogo.png";

const ContactHero = () => {
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
    </div>
  );
};

export default ContactHero;
