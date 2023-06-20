import React from "react";

const OurValues = () => {
  return (
    <div className="mt-10">
      <div className="mt-6 px-[15px] md:px-[80px] text-center sm:text-start">
        <div className="text-sm sm:text-lg font-semibold text-brand">
          WHY WE DO IT
        </div>
        <div className="text-5xl sm:text-7xl font-extrabold">Our Values</div>
      </div>
      {/* images */}
      <div className="flex flex-row mt-10 px-[15px] md:px-[10px] lg:px-[80px] gap-x-10 gap-y-20 flex-wrap lg:flex-row lg:justify-between justify-center">
        {/* first box */}
        <div className="stories-box h-[200px] relative flex justify-center">
          <div className="w-full h-full bg-[#e7e7e7] rounded-[20px] relative z-10 p-3 text-[18px]">
            <span className="mr-2 font-bold text-[#376ec0]">{`Trust and Respect.`}</span>
            <span className="text-brand">{`We trust each other. We believe in each other. We respect each other and in particular respect each others privacy. At Talent Empire it is like family, while we always keep it a 100% professional.`}</span>
          </div>
          <div className="absolute bg-brand w-[90%] h-8 rounded-lg -bottom-2 blue-shadow"></div>
        </div>
        {/* second box */}
        <div className="stories-box h-[200px] relative flex justify-center">
          <div className="w-full h-full bg-[#e7e7e7] rounded-[20px] relative z-10 p-3 text-[18px]">
            <span className="mr-2 font-bold text-[#376ec0]">{`Reliability.`}</span>
            <span className="text-brand">{`We rely on each other. What we say, we do, no exceptions. It is that simple.`}</span>
          </div>
          <div className="absolute bg-brand w-[90%] h-8 rounded-lg -bottom-2 blue-shadow"></div>
        </div>
        {/* third box */}
        <div className="stories-box h-[200px] relative flex justify-center">
          <div className="w-full h-full bg-[#e7e7e7] rounded-[20px] relative z-10 p-3 text-[18px]">
            <span className="mr-2 font-bold text-[#376ec0]">{`Passion.`}</span>
            <span className="text-brand">{`Everyone at Talent Empire is driven to deliver the best possible results. We fully believe in the fact, that people are at their best when they do what they really love. That is how we approach work and also working with our partners.`}</span>
          </div>
          <div className="absolute bg-brand w-[90%] h-8 rounded-lg -bottom-2 blue-shadow"></div>
        </div>
      </div>
    </div>
  );
};

export default OurValues;
