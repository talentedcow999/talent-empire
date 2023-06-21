import React from "react";
import FaqHero from "../components/FaqPage/FaqHero";
import Questions from "../components/FaqPage/Questions";

const Page = () => {
  return (
    <div className="relative w-full pb-10">
      <div className="relative z-[0]">
        {/* woman face */}
        <div className="relative h-fit">
          <FaqHero />
          {/* Waving animation */}
          <div className="h-[200px] overflow-hidden absolute w-full z-20 -bottom-7">
            <div className="wave1"></div>
            <div className="wave2"></div>
          </div>
        </div>
        <div className="w-full flex flex-col items-center ">
          <div className="container">
            <Questions />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
