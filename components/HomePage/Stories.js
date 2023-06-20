import React from "react";
import { ChevronRightIcon } from "@radix-ui/react-icons";

const Stories = () => {
  return (
    <div className="mt-28">
      <div className="mt-6 px-[15px] md:px-[80px] text-center sm:text-start">
        <div className="text-sm sm:text-lg font-semibold text-brand">
          WHY WE DO IT
        </div>
        <div className="text-5xl sm:text-7xl font-extrabold">
          Success Stories
        </div>
        <div className="mt-5 px-[30px] sm:px-0 sm:w-[400px] text-xl">{`The key to a successful life always lies in the connection one creates, invests, and cares for.At Talent Empire, that is exactly what we do.`}</div>
        <div className="mt-10">
          <button className="bg-brand hover:bg-brandhover pl-[50px] pr-[20px] py-[14px] rounded-lg text-white font-light">
            <div className="flex flex-row items-center gap-8">
              <span>Apply Now</span>
              <ChevronRightIcon></ChevronRightIcon>
            </div>
          </button>
        </div>
      </div>
      {/* images */}
      <div className="flex flex-row mt-10 px-[15px] md:px-[10px] lg:px-[80px] gap-x-10 gap-y-20 flex-wrap lg:flex-row lg:justify-between justify-center">
        {/* first box */}
        <div className="stories-box h-[200px] relative flex justify-center">
          <div className="w-full h-full bg-[#d9d9d9] rounded-[20px] relative z-10"></div>
          <div className="absolute bg-brand w-[90%] h-8 rounded-lg -bottom-2 blue-shadow"></div>
        </div>
        {/* second box */}
        <div className="stories-box h-[200px] relative flex justify-center">
          <div className="w-full h-full bg-[#d9d9d9] rounded-[20px] relative z-10"></div>
          <div className="absolute bg-brand w-[90%] h-8 rounded-lg -bottom-2 blue-shadow"></div>
        </div>
        {/* third box */}
        <div className="stories-box h-[200px] relative flex justify-center">
          <div className="w-full h-full bg-[#d9d9d9] rounded-[20px] relative z-10"></div>
          <div className="absolute bg-brand w-[90%] h-8 rounded-lg -bottom-2 blue-shadow"></div>
        </div>
      </div>
    </div>
  );
};

export default Stories;
