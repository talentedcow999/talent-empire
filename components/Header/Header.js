import React from "react";
import Logo from "../../assests/icons/Logo.svg";
import Image from "next/image";

const HeaderOptions = [
  { name: "Home", href: "" },
  { name: "About", href: "" },
  { name: "Services", href: "" },
  { name: "FAQ", href: "" },
  { name: "Contact", href: "" },
];

const Header = () => {
  return (
    <div className="w-full select-none ">
      <div className="header h-[60px] flex items-center justify-center">
        <div className="container flex flex-row items-center pl-[15px] pr-[15px] md:pl-[80px] md:pr-[40px] justify-between">
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
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
