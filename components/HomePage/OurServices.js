import React from "react";
import Service1 from "../../assests/svg/service1.svg";
import Service2 from "../../assests/svg/service2.svg";
import Service3 from "../../assests/svg/service3.svg";
import Service4 from "../../assests/svg/service4.svg";
import Image from "next/image";

const ServiceArray = [
  {
    Image: Service1,
    Title: "Full Management",
    Desc: "While creating room for your creativity, we take care of everything else for you. We make sure, that your content delivers the highest possible impact and revenue.",
  },
  {
    Image: Service2,
    Title: "Account Growth",
    Desc: "We help you to build and sustain a highly profitable Fan base by identifying the right tools & channels for you and continuously adapting the strategies to keep scaling your account.",
  },
  {
    Image: Service3,
    Title: "Content Creation",
    Desc: "While it remains an open secret that content is king, you barely have more than two seconds to captivate someone’s attention in order to build up a connection with your audience.",
  },
  {
    Image: Service4,
    Title: "Regular Audits",
    Desc: "We analyse your current account performance, identify hurdles and opportunities and translate them into clear next steps towards success.",
  },
];

const OurServices = () => {
  return (
    <div className="mt-6 px-[15px] md:px-[80px] ">
      <div className="text-lg font-semibold text-brand">
        WHAT WE CAN DO FOR YOU
      </div>
      <div className="text-7xl font-extrabold">Our Services</div>
      {/* Images Card */}
      <div className="mt-8 grid grid-flow-rows grid-cols-1 gap-x-5">
        {ServiceArray?.map((item, index) => (
          <div key={index}>
            <ServiceCard
              cardImage={item?.Image}
              cardTitle={item?.Title}
              cardDesc={item?.Desc}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default OurServices;

const ServiceCard = ({ cardImage, cardTitle, cardDesc }) => {
  return (
    <div className="rounded-2xl h-[380px] p-3">
      <div className="w-full flex items-center justify-center h-[45%] select-none">
        <Image draggable="false" width={200} alt="service image" src={cardImage} />
      </div>
      <div className="mt-4 flex flex-col gap-y-2">
        <div className="text-brand text-xl font-semibold">{cardTitle}</div>
        <div className="w-[230px] text-sm">{cardDesc}</div>
      </div>
    </div>
  );
};
