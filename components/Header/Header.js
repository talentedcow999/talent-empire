import React, { useState } from "react";
import Logo from "../../assests/icons/Logo.svg";
import Image from "next/image";
import { TextAlignRightIcon } from "@radix-ui/react-icons";
import { JoinClasses } from "../../utils/functions";

const HeaderOptions = [
  { name: "Home", href: "" },
  { name: "About", href: "" },
  { name: "Services", href: "" },
  { name: "FAQ", href: "" },
  { name: "Contact", href: "" },
];

const Header = () => {
  const [OpenHeader, setOpenHeader] = useState(false);

  return (
    <div
      className={JoinClasses(
        OpenHeader ? "absolute z-50 bg-[#202023] top-0" : "absolute z-50 top-6",
        "w-full select-none duration-100 ease-linear transition-all"
      )}
    >
      <div
        className={JoinClasses(
          OpenHeader ? "h-screen" : "h-fit",
          "header duration-100 flex justify-center overflow-hidden"
        )}
      >
        <div className="py-[15px] container flex flex-col pl-[15px] pr-[15px] md:pl-[80px] md:pr-[40px]">
          <div className="flex flex-row items-center w-full justify-between">
            {/* Logo : Talent Empire */}
            <div>
              <Image alt="Logo" src={Logo} />
            </div>
            {/* Buttons and Apply Now Option */}
            <div className="flex items-center gap-x-[40px]">
              {/* options */}
              <div className="hidden md:flex flex-row items-center gap-x-[40px] ">
                {HeaderOptions?.map(({ name, href }, index) => (
                  <div key={index}>
                    <div className="option">{name}</div>
                  </div>
                ))}
              </div>
              {/* Apply Now Btn */}
              <div>
                <button className="hidden lg:flex white_applynowbtn">
                  <span>Apply Now!</span>
                </button>
              </div>
              {/* Mobile Header Open Header Button */}
              <div
                onClick={() => setOpenHeader(!OpenHeader)}
                className="md:hidden flex text-white"
              >
                <TextAlignRightIcon height={30} width={30} />
              </div>
            </div>
          </div>
          {/* Header Options */}
          <div className={JoinClasses(OpenHeader ? "flex": "hidden","text-white h-full items-center justify-center")}>
            <div className="gap-y-10 flex flex-col text-2xl text-center">
              {HeaderOptions?.map((item, index) => (
                <div key={index} onClick={()=> setOpenHeader(!OpenHeader)} >{item?.name}</div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
