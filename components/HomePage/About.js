import React from "react";
import { ChevronRightIcon } from "@radix-ui/react-icons";
import Image from "next/image";
import AboutUsGif from "../../assests/coverphoto/About_us.gif";

const About = () => {
  return (
    <div className="mt-28 px-[15px] md:px-[80px] text-center sm:text-start">
      {/* 2 divs with 50% width each */}
      <div className="w-full flex flex-col lg:flex-row px-[30px] sm:px-[0px]">
        {/* 1st div */}
        <div className="lg:w-[50%] flex flex-col gap-5">
          <div>
            <div className="text-sm sm:text-lg font-semibold text-brand">
              HOW WE DO IT
            </div>
            <div className="text-5xl sm:text-7xl font-extrabold">About us</div>
          </div>
          <div className="text-xl lg:w-[90%]">
            {`Talent Empire is a globally staffed team of OnlyFans experts based
            in Europe.`}
          </div>
          <div className="text-xl lg:w-[90%]">
            {`We provide professional full-service OnlyFans management
            and all tools to maximize your success on OnlyFans. We lift your
            existing career to the next level or entirely kickstart your new
            OnlyFans career and income.`}
          </div>
          {/* Apply Now Button */}
          <div className="mt-10">
            <button className="bg-brand hover:bg-brandhover pl-[50px] pr-[20px] py-[14px] rounded-lg text-white font-light">
              <div className="flex flex-row items-center gap-8">
                <span>Apply Now</span>
                <ChevronRightIcon></ChevronRightIcon>
              </div>
            </button>
          </div>
        </div>
        {/* 2nd div */}
        <div className="lg:w-[50%] h-[400px] mt-10 lg:mt-0 lg:p-10">
          <div className="w-full h-fit relative flex justify-center">
            <div className="w-full h-fit bg-[#d9d9d9] rounded-[20px] relative z-10 overflow-hidden">
              {/* https://i.imgur.com/EW9G68q.mp4 <-- Video Link */}
              <Image
                alt="about image"
                src={AboutUsGif}
                width={1080}
                height={1080}
                className="h-full w-full"
              ></Image>
            </div>
            <div className="absolute bg-brand w-[90%] h-8 rounded-lg -bottom-3 blue-shadow"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
