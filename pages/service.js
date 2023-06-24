import React from "react";
import ServiceHero from "../components/ServicePage/ServiceHero";
import Stories from "../components/HomePage/Stories";
import Faq from "../components/HomePage/Faq";
import Letstalk from "../components/HomePage/Letstalk";
import ServiceInfos from "../components/ServicePage/ServiceInfos";
import Head from "next/head";

const Page = () => {
  return (
    <div className="relative w-full pb-10">
      <Head>
        <title>Talent Empire • Services</title>
      </Head>
      <div className="relative z-[0]">
        {/* woman face */}
        <div className="relative h-fit">
          <ServiceHero />
          {/* Waving animation */}
          <div className="h-[200px] overflow-hidden absolute w-full z-20 -bottom-7">
            <div className="wave1"></div>
            <div className="wave2"></div>
          </div>
        </div>
        <div className="w-full flex flex-col items-center">
          {/* Information */}
          <div className="container">
            <ServiceInfos />
          </div>
          {/* Our Success Stories */}
          <div className="container">
            <Stories />
          </div>
          {/* Lets Talk */}
          <div className="container">
            <Letstalk />
          </div>
          {/* Faq */}
          <div className="container">
            <Faq />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
