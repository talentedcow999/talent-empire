import React from "react";
import Image from "next/image";
import Logo from "../../assests/icons/Logo.svg";
import { TwitterLogoIcon, InstagramLogoIcon } from "@radix-ui/react-icons";
import Link from "next/link";

const Footer = () => {
  return (
    <div className="w-full flex justify-center relative mt-28 select-none bg-brand">
      {/* Waving animation */}
      <div className="h-[180px] overflow-hidden absolute w-full z-20 -top-[153px]">
        <div className="footer-wave1"></div>
        <div className="footer-wave2"></div>
      </div>
      {/* main footer */}
      <div className="w-full flex justify-center  flex-col container">
        <div className="w-full h-[280px] py-[30px] px-[80px]">
          <div className="flex flex-col sm:flex-row justify-between h-full">
            <div>
              {/* Logo : Talent Empire */}
              <div>
                <Image alt="Logo" src={Logo} />
                <div className="hidden sm:flex text-sm text-white font-light mt-1 text-center">{`WORLD’S BEST ONLYFANS AGENCY`}</div>
              </div>
            </div>
            <div className="text-white flex flex-col gap-y-3 h-full justify-end items-center mt-2 sm:items-end relative z-10">
              <Link href={"/about"}>
                <div className="cursor-pointer text-lg">About</div>
              </Link>
              <div className="cursor-pointer">Legal Notice</div>
              <div className="cursor-pointer">Privacy Policy</div>
              <div className="flex flex-row items-center gap-x-5 mt-8">
                <Link href={"https://twitter.com"}>
                  <TwitterLogoIcon
                    className="cursor-pointer"
                    width={25}
                    height={25}
                  />
                </Link>
                <Link href={"https://instagram.com"}>
                  <InstagramLogoIcon
                    className="cursor-pointer"
                    width={25}
                    height={25}
                  />
                </Link>
              </div>
            </div>
          </div>
        </div>
        {/* line */}
        <div className="h-20 relative flex justify-center">
          <div className="text-4xl absolute h-8 text-white overflow-hidden w-screen">
            -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
          </div>
          <div className="text-white absolute top-3 footer-text-shadow">{`Copyright @ 2023 Talent Empire`}</div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
