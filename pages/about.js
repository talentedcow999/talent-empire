import React from "react";
import AboutHero from "../components/AboutPage/AboutHero";
import Faq from "../components/HomePage/Faq";
import Head from "next/head";

const Page = () => {
  return (
    <div className="relative w-full pb-10">
      <Head>
        <title>Talent Empire • About Us</title>
      </Head>
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
        <div className="w-full flex flex-col items-center">
          {/* About */}
          <div className="container">
            <div className="mt-16  px-[15px] md:px-[80px] text-center sm:text-start">
              {/* title about */}
              <div className="text-4xl sm:text-6xl font-extrabold text-brand">
                About us
              </div>
              {/* description */}
              <div className="mt-4">
                {`“We are lucky ones. We live in a period of time, where so many things are possible that were even impossible to think of in previous generations. We live in a time, where personal freedom, personal expression, and personal connections are possible for a steadily growing number of people across the world. Talent Empire is a Hamburg-based agency with like-minded people, who share the same values and dreams. Our goal is to empower OF creators to reach their personal goals by unleashing their full potential. Regardless if one thrives for financial freedom, personal freedom, or just wants to enjoy the ride. We are a proven team of experts in our designated fields and want to be the professional foundation in a business that often lacks exactly that. Even though we have to regularly say no to applicants, our behavior, our thinking, and our actions are driven by kindness and respect. We are thankful and proud to have so many amazing people who trust us and love to work with us. If you like to get to know us better, feel free to reach out to us any time.”`}
              </div>
            </div>
          </div>
          {/* Values and Ambitions */}
          <div className="container">
            <div className="mt-16  px-[15px] md:px-[80px] text-center sm:text-start">
              {/* title Values and Ambitions */}
              <div className="text-4xl sm:text-6xl font-extrabold text-brand">
                Values and Ambitions
              </div>
              {/* description */}
              <div className="mt-4">
                {`“The key to a successful life always lies in the connection one creates, invests, and cares for. At Talent Empire that is exactly what we do. We believe in the power of personal connection and therefore heavily invest in building up a strong, durable connection with you. Trust, respect, and reliabilty are our core values and guide us throughout all our actions. It is essential for us, to invest time to get to know you and your personal goals. We know that one can only reach maximum success when our plans and priorities are aligned. Your privacy is a crucial element in how we work. Absolutely no details about any of our partner models are going public unless we have their signed approval. We respect all your personal motivations and asks, and will be open and honest in discussing all potential opportunities before moving forward. After getting to know you, we define concrete goals and next steps together, empowering you and us to grow your fan base and establish a new level of connection to your fans. While our actions are driven by absolute passion and enthusiasm, we are trying to base our actions as much as possible on unbiased data instead of personal opinions. If you share those same values, we would love for you to apply and see if we can work together.”`}
              </div>
            </div>
          </div>
          {/* Faq Section */}
          <div className="container">
            <Faq />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
