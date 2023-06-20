import React, { useState } from "react";
import { JoinClasses } from "../../utils/functions";

const Faq = () => {
  const [FaqOpen, setFaqOpen] = useState(null);

  function setFaqMakeOthersFalse(question) {
    if (question === "Q1") {
      if (FaqOpen === "Q1") {
        setFaqOpen(null);
      } else {
        setFaqOpen("Q1");
      }
    } else if (question === "Q2") {
      if (FaqOpen === "Q2") {
        setFaqOpen(null);
      } else {
        setFaqOpen("Q2");
      }
    } else if (question === "Q3") {
      if (FaqOpen === "Q3") {
        setFaqOpen(null);
      } else {
        setFaqOpen("Q3");
      }
    }
  }

  return (
    <div className="mt-32">
      <div className="mt-6 px-[15px] md:px-[80px] text-center sm:text-start">
        <div className="text-sm sm:text-lg font-semibold text-brand">
          INCREASE VALUES
        </div>
        <div className="text-5xl sm:text-7xl font-extrabold">FAQ</div>
      </div>
      {/* images */}
      <div className="flex flex-col mt-10 px-[15px] md:px-[10px] lg:px-[80px]">
        {/* Faq question 1 */}
        <div
          className={JoinClasses(
            FaqOpen === "Q1"
              ? "h-[350px] sm:h-[250px] md:h-[180px]"
              : "h-[80px]",
            "overflow-hidden duration-200 cursor-pointer"
          )}
        >
          <div className="text-xl p-5 flex flex-row justify-between items-center">
            <div
              className="w-[80%]"
              onClick={() => setFaqMakeOthersFalse("Q1")}
            >
              How often will I be in contact with my account manager?
            </div>
            <div className="relative h-10 w-10">
              <div className="rotate-90 w-fit absolute">{`|`}</div>
              <div
                className={JoinClasses(
                  FaqOpen === "Q1" ? "rotate-90" : "rotate-0",
                  "duration-200 w-fit absolute"
                )}
              >{`|`}</div>
            </div>
          </div>
          <div className="p-5">
            {`We are approachable 24/7 for you. It is totally up to you if you
            want a daily chat or rather a weekly/monthly check-in. We have the
            human resources to provide a daily exchange as well as the technical
            infrastructure to work absolutely efficiently while having a
            personal exchange to the absolute minimum.`}
          </div>
        </div>
        {/* Faq question 2 */}
        <div
          className={JoinClasses(
            FaqOpen === "Q2"
              ? "h-[350px] sm:h-[250px] md:h-[180px]"
              : "h-[80px]",
            "overflow-hidden duration-200 cursor-pointer"
          )}
        >
          <div className="text-xl p-5 flex flex-row justify-between items-center">
            <div
              className="w-[80%]"
              onClick={() => setFaqMakeOthersFalse("Q2")}
            >
              How do I start working with you?
            </div>
            <div className="relative h-10 w-10">
              <div className="rotate-90 w-fit absolute">{`|`}</div>
              <div
                className={JoinClasses(
                  FaqOpen === "Q2" ? "rotate-90" : "rotate-0",
                  "duration-200 w-fit absolute"
                )}
              >{`|`}</div>
            </div>
          </div>
          <div className="p-5">
            {`We are approachable 24/7 for you. It is totally up to you if you
            want a daily chat or rather a weekly/monthly check-in. We have the
            human resources to provide a daily exchange as well as the technical
            infrastructure to work absolutely efficiently while having a
            personal exchange to the absolute minimum.`}
          </div>
        </div>
        {/* Faq question 3 */}
        <div
          className={JoinClasses(
            FaqOpen === "Q3"
              ? "h-[350px] sm:h-[250px] md:h-[180px]"
              : "h-[80px]",
            "overflow-hidden duration-200 cursor-pointer"
          )}
        >
          <div className="text-xl p-5 flex flex-row justify-between items-center">
            <div
              className="w-[80%]"
              onClick={() => setFaqMakeOthersFalse("Q3")}
            >
              I have no experience yet, will I even be considered?
            </div>
            <div className="relative h-10 w-10">
              <div className="rotate-90 w-fit absolute">{`|`}</div>
              <div
                className={JoinClasses(
                  FaqOpen === "Q3" ? "rotate-90" : "rotate-0",
                  "duration-200 w-fit absolute"
                )}
              >{`|`}</div>
            </div>
          </div>
          <div className="p-5">
            {`We are approachable 24/7 for you. It is totally up to you if you
            want a daily chat or rather a weekly/monthly check-in. We have the
            human resources to provide a daily exchange as well as the technical
            infrastructure to work absolutely efficiently while having a
            personal exchange to the absolute minimum.`}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Faq;
