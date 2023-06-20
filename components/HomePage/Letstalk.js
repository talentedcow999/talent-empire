import React from "react";
import Mail from "../../assests/svg/mail.svg";
import Image from "next/image";

const Letstalk = () => {
  return (
    <div className="mt-28 px-[15px] md:px-[80px] text-center sm:text-start">
      {/* 2 divs with 50% width each */}
      <div className="w-full flex flex-col lg:flex-row px-[30px] sm:px-[0px]">
        {/* 1st div */}
        <div className="lg:w-[50%] flex flex-col gap-5">
          <div>
            <div className="text-sm sm:text-lg font-semibold text-brand">
              READY FOR A BETTER LIFE?
            </div>
            <div className="text-5xl sm:text-7xl font-extrabold">
              Let’s Talk.
            </div>
          </div>
          <div className="text-xl lg:w-[90%]">
            {`Schedule a call to talk to one of our Account managers and find out how we can help you grow your account!`}
          </div>
          {/* Mail Button */}
          <div className="mt-10 flex flex-col sm:flex-row items-center">
            <div className="h-12 w-12">
              <Image src={Mail} alt="mail icon" />
            </div>
            <div className="h-full justify-evenly flex flex-col ml-2">
              <div className="text-lg font-bold">{`Mail Us At:`}</div>
              <div>{`service@talentempire.com`}</div>
            </div>
          </div>
        </div>
        {/* 2nd div */}
        <div className="lg:w-[50%] h-[700px] mt-10 lg:mt-0 lg:p-10">
          <div className="h-full">
            <iframe
              className="w-full h-full nothumb"
              src="https://calendly.com/neo-agency/neo-agency?embed_domain=www.neoagency.de&embed_type=Inline&hide_event_type_details=1&primary_color=ff88dc"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Letstalk;
