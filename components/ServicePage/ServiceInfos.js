import React from "react";
import Ourservice1 from "../../assests/svg/ourservices1.svg";
import Ourservice2 from "../../assests/svg/ourservices2.svg";
import Ourservice3 from "../../assests/svg/ourservices3.svg";
import Ourservice4 from "../../assests/svg/ourservices4.svg";
import Ourservice5 from "../../assests/svg/ourservices5.svg";
import Image from "next/image";

const ServiceInfos = () => {
  return (
    <div className="mt-28 px-[15px] md:px-[80px] flex flex-col gap-y-20">
      {/* 1. Personal Success Strategy */}
      <div className="w-full flex flex-col lg:flex-row px-[30px] sm:px-[0px]">
        <div className="lg:w-[50%] flex flex-col gap-5">
          <div>
            <div className="text-sm sm:text-3xl font-semibold text-brand">
              {`1. Personal Success Strategy`}
            </div>
          </div>
          <div className="text-lg lg:w-[90%] font-semibold">
            {`Together with you, we analyze your current situation.`}
          </div>
          <div className="text-lg lg:w-[90%] flex flex-col gap-y-3">
            <div>{`• Discovery call where we get to know you and what you want and what you don’t want`}</div>
            <div>{`• Define your goals and tailor a personalized strategy that fully acknowledges all your needs while unlocking your full potential together`}</div>
            <div>{`• Set up the right working environment so that we can support you as effectively and efficiently as possible`}</div>
          </div>
        </div>
        <div className="lg:w-[50%] flex items-center justify-center h-fit mt-10 lg:mt-0 lg:p-10">
          <Image className="h-[300px] p-2" src={Ourservice1} alt="Our Service Image"></Image>
        </div>
      </div>
      {/* 2. OnlyFans Account Management */}
      <div className="w-full flex flex-col lg:flex-row-reverse px-[30px] sm:px-[0px]">
        <div className="lg:w-[50%] flex flex-col gap-5">
          <div>
            <div className="text-sm sm:text-3xl font-semibold text-brand">
              {`2. OnlyFans Account Management`}
            </div>
          </div>
          <div className="text-lg lg:w-[90%] font-semibold">
            {`At Talent Empire, trust and reliability belong to our core values and guide us throughout all our actions. In order for your account to achieve and sustain outstanding long-term success, it is essential to make those principles a top priority in your account management.
WE PROVIDE YOU WITH YOUR PERSONAL ACCOUNT MANAGER WHO WILL TAKE CARE OF:`}
          </div>
          <div className="text-lg lg:w-[90%] flex flex-col gap-y-3">
            <div>{`• Daily Media Management`}</div>
            <div>{`• Content and Asset Plan Management. You share your content with us, we take care of posting, copywriting, Hashtag, and monetization`}</div>
            <div>{`• PPV and Upsell Management`}</div>
            <div>{`• DM Management, we build connections, maximize tips and the average payment per Fan`}</div>
            <div>{`• Monthly Reportings`}</div>
          </div>
        </div>
        <div className="lg:w-[50%] flex items-center justify-center h-fit mt-10 lg:mt-0 lg:p-10">
          <Image className="h-[300px] p-2" src={Ourservice2} alt="Our Service Image"></Image>
        </div>
      </div>
      {/* 3. Channel Growth and Retention Management */}
      <div className="w-full flex flex-col lg:flex-row px-[30px] sm:px-[0px]">
        <div className="lg:w-[50%] flex flex-col gap-5">
          <div>
            <div className="text-sm sm:text-3xl font-semibold text-brand">
              {`3. Channel Growth and Retention Management`}
            </div>
          </div>
          <div className="text-lg lg:w-[90%] font-semibold">
            {`To accomplish a healthy long-term, financially successful account, it is vital to constantly gain new fans while also retaining existing ones. We identify the right tools for you and continuously adapt the strategies to acquire new Fans and retain existing ones.`}
          </div>
          <div className="text-lg lg:w-[90%] flex flex-col gap-y-3">
            <div>{`• Manage as well as enable you to maximize your organic Social Media performance`}</div>
            <div>{`• Identify the right Social Media Channels and implement proven strategies to set up a growth Fan funnel for your account`}</div>
            <div>{`• Run profitable paid media campaigns on and beyond OF platform`}</div>
            <div>{`• DM Management across all channels`}</div>
          </div>
        </div>
        <div className="lg:w-[50%] flex items-center justify-center h-fit mt-10 lg:mt-0 lg:p-10">
          <Image className="h-[300px] p-2" src={Ourservice3} alt="Our Service Image"></Image>
        </div>
      </div>
      {/* 4. Social Media Content Creation */}
      <div className="w-full flex flex-col lg:flex-row-reverse px-[30px] sm:px-[0px]">
        <div className="lg:w-[50%] flex flex-col gap-5">
          <div>
            <div className="text-sm sm:text-3xl font-semibold text-brand">
              {`4. Social Media Content Creation`}
            </div>
          </div>
          <div className="text-lg lg:w-[90%] font-semibold">
            {`While it remains an open secret that content is king, you barely have more than two seconds to captivate someone’s attention in order to build up a connection with your audience WE EMPOWER YOU TO:`}
          </div>
          <div className="text-lg lg:w-[90%] flex flex-col gap-y-3">
            <div>{`• Build the right content for your most relevant social media platforms`}</div>
            <div>{`• Jump on rising trends early and create viral content pieces`}</div>
            <div>{`• Set up a holistic content and distribution plan`}</div>
          </div>
        </div>
        <div className="lg:w-[50%] flex items-center justify-center h-fit mt-10 lg:mt-0 lg:p-10">
          <Image className="h-[300px] p-2" src={Ourservice4} alt="Our Service Image"></Image>
        </div>
      </div>
      {/* 5. OnlyFans Account Audit */}
      <div className="w-full flex flex-col lg:flex-row px-[30px] sm:px-[0px]">
        <div className="lg:w-[50%] flex flex-col gap-5">
          <div>
            <div className="text-sm sm:text-3xl font-semibold text-brand">
              {`5. OnlyFans Account Audit`}
            </div>
          </div>
          <div className="text-lg lg:w-[90%] font-semibold">
            {`In order to strive for ambitious goals, it is important to fully understand the current situation. We will take a deep dive into the past account performance to identify existing hurdles and new opportunities. `}
          </div>
          <div className="text-lg lg:w-[90%] flex flex-col gap-y-3">
            <div>{`• Run a full historic account performance review`}</div>
            <div>{`• Translate potential former obstacles into digestible next steps`}</div>
            <div>{`• Identify strategic growth pillars and provide concrete step by step guidance`}</div>
          </div>
        </div>
        <div className="lg:w-[50%] flex items-center justify-center h-fit mt-10 lg:mt-0 lg:p-10">
          <Image className="h-[300px] p-2" src={Ourservice5} alt="Our Service Image"></Image>
        </div>
      </div>
    </div>
  );
};

export default ServiceInfos;
