import React from "react";
import AboutHero from "../components/AboutPage/AboutHero";

const Page = () => {
  return (
    <div className="relative w-full pb-10">
      <div className="relative z-[0]">
        {/* woman face */}
        <div className="relative h-fit">
          <AboutHero />
          {/* Waving animation */}
          <div className="h-[200px] overflow-hidden absolute w-full z-20 -bottom-7">
            <div className="wave1"></div>
            <div className="wave2"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
