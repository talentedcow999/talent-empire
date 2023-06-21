import React, { useState } from "react";
import ContactHero from "../components/ContactPage/ContactHero";
import Faq from "../components/HomePage/Faq";
import Contact from "../components/ContactPage/Contact";
import { Toaster } from "react-hot-toast";

const Page = () => {
  return (
    <div className="relative w-full pb-10">
      {/* React Toast Bar */}
      <div>
        <Toaster />
      </div>
      <div className="relative z-[0]">
        {/* woman face */}
        <div className="relative h-fit">
          <ContactHero />
          {/* Waving animation */}
          <div className="h-[200px] overflow-hidden absolute w-full z-20 -bottom-7">
            <div className="wave1"></div>
            <div className="wave2"></div>
          </div>
          {/* maybe add Conact form page here */}
          <div className="flex flex-row justify-center">
            <div className="absolute z-20 container px-[15px] md:px-[30px] -bottom-[100px] flex flex-row justify-center w-full">
              <Contact />
            </div>
          </div>
        </div>
        <div className="w-full flex flex-col items-center">
          {/* Faq Section */}
          <div className="container mt-10">
            <Faq />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
