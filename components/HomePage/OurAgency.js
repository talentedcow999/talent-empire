import React from "react";
import GirlNumbers from "../../assests/images/girl_numbers.png";
import Image from "next/image";

const OurAgency = () => {
  return (
    <div className="mt-28 flex flex-col items-center">
      <div className="mt-6 px-[15px] md:px-[80px] text-center sm:text-start container">
        <div className="text-sm sm:text-lg font-semibold text-brand">
          OUR AGENCY IN
        </div>
        <div className="text-5xl sm:text-7xl font-extrabold">Numbers</div>
      </div>
      {/* Full Girl Image */}
      <div className="relative mt-10 flex items-center justify-center h-[500px] sm:h-[250px]">
        <Image
          className="object-cover h-full"
          alt="girl banner"
          src={GirlNumbers}
        />
        {/* numbers */}
        <div className="absolute h-full w-full flex flex-row items-center p-8">
          <div className="flex flex-col sm:flex-row items-center border border-[#ffffff7e] w-full h-full numbers-card justify-evenly text-white">
            <div className="flex flex-col items-center">
              <div className="text-4xl">63</div>
              <div className="text-[18px] flex flex-col text-center items-center font-extralight">
                <div>Models Under</div>
                <div>Management</div>
              </div>
            </div>
            <div className="flex flex-col items-center">
              <div className="text-4xl">317%</div>
              <div className="text-[18px] flex flex-col text-center items-center font-extralight">
                <div>Increase In</div>
                <div>Revenue</div>
              </div>
            </div>
            <div className="flex flex-col items-center">
              <div className="text-4xl">184%</div>
              <div className="text-[18px] flex flex-col text-center items-center font-extralight">
                <div>Increase In</div>
                <div>Traffic</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurAgency;
