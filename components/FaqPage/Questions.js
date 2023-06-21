import React, { useState } from "react";
import { JoinClasses } from "../../utils/functions";
import Letstalk from "../HomePage/Letstalk";

const QuestionsArray = [
  {
    "Account Management": [
      {
        id: "Q1",
        Ques: "How often will I be in contact with my account manager?",
        Ans: "We are approachable 24/7 for you. It is totally up to you if you want a daily chat or rather a weekly/monthly check-in. We have the human resources to provide a daily exchange as well as the technical infrastructure to work absolutely efficiently while having a personal exchange to the absolute minimum.",
      },
      {
        id: "Q2",
        Ques: "How do I start working with you?",
        Ans: "We are approachable 24/7 for you. It is totally up to you if you want a daily chat or rather a weekly/monthly check-in. We have the human resources to provide a daily exchange as well as the technical infrastructure to work absolutely efficiently while having a personal exchange to the absolute minimum.",
      },
      {
        id: "Q3",
        Ques: "I have no experience yet, will I even be considered?",
        Ans: "We are approachable 24/7 for you. It is totally up to you if you want a daily chat or rather a weekly/monthly check-in. We have the human resources to provide a daily exchange as well as the technical infrastructure to work absolutely efficiently while having a personal exchange to the absolute minimum.",
      },
    ],
  },
  {
    Application: [
      {
        id: "Q4",
        Ques: "How do I start working with you?",
        Ans: "We are approachable 24/7 for you. It is totally up to you if you want a daily chat or rather a weekly/monthly check-in. We have the human resources to provide a daily exchange as well as the technical infrastructure to work absolutely efficiently while having a personal exchange to the absolute minimum.",
      },
      {
        id: "Q5",
        Ques: "I have no experience yet, will I even be considered?",
        Ans: "We are approachable 24/7 for you. It is totally up to you if you want a daily chat or rather a weekly/monthly check-in. We have the human resources to provide a daily exchange as well as the technical infrastructure to work absolutely efficiently while having a personal exchange to the absolute minimum.",
      },
    ],
  },
  {
    Content: [
      {
        id: "Q6",
        Ques: "How do I start working with you?",
        Ans: "We are approachable 24/7 for you. It is totally up to you if you want a daily chat or rather a weekly/monthly check-in. We have the human resources to provide a daily exchange as well as the technical infrastructure to work absolutely efficiently while having a personal exchange to the absolute minimum.",
      },
      {
        id: "Q7",
        Ques: "I have no experience yet, will I even be considered?",
        Ans: "We are approachable 24/7 for you. It is totally up to you if you want a daily chat or rather a weekly/monthly check-in. We have the human resources to provide a daily exchange as well as the technical infrastructure to work absolutely efficiently while having a personal exchange to the absolute minimum.",
      },
    ],
  },
  {
    Marketing: [
      {
        id: "Q8",
        Ques: "How do I start working with you?",
        Ans: "We are approachable 24/7 for you. It is totally up to you if you want a daily chat or rather a weekly/monthly check-in. We have the human resources to provide a daily exchange as well as the technical infrastructure to work absolutely efficiently while having a personal exchange to the absolute minimum.",
      },
      {
        id: "Q9",
        Ques: "I have no experience yet, will I even be considered?",
        Ans: "We are approachable 24/7 for you. It is totally up to you if you want a daily chat or rather a weekly/monthly check-in. We have the human resources to provide a daily exchange as well as the technical infrastructure to work absolutely efficiently while having a personal exchange to the absolute minimum.",
      },
    ],
  },
  {
    "Payment and Privacy": [
      {
        id: "Q10",
        Ques: "How do I start working with you?",
        Ans: "We are approachable 24/7 for you. It is totally up to you if you want a daily chat or rather a weekly/monthly check-in. We have the human resources to provide a daily exchange as well as the technical infrastructure to work absolutely efficiently while having a personal exchange to the absolute minimum.",
      },
      {
        id: "Q11",
        Ques: "I have no experience yet, will I even be considered?",
        Ans: "We are approachable 24/7 for you. It is totally up to you if you want a daily chat or rather a weekly/monthly check-in. We have the human resources to provide a daily exchange as well as the technical infrastructure to work absolutely efficiently while having a personal exchange to the absolute minimum.",
      },
    ],
  },
];

const Questions = () => {
  const [FaqOpen, setFaqOpen] = useState(null);

  function setFaqMakeOthersFalse(question) {
    if (FaqOpen === question) {
      setFaqOpen(null);
    } else {
      setFaqOpen(question);
    }
  }

  return (
    <div className="mt-10">
      <div className="flex flex-col mt-10 px-[15px] md:px-[10px] lg:px-[80px]">
        <div className="flex flex-col gap-y-20">
          {QuestionsArray?.map((item, i) => {
            let key = Object.keys(item)[0];

            return (
              <div key={i} className="flex flex-col gap-y-5">
                <div className="text-brand text-4xl">{key}</div>
                <div>
                  {item?.[`${key}`]?.map((faq, index) => {
                    return (
                      <div
                        key={index}
                        className={JoinClasses(
                          FaqOpen === faq?.id ? "" : "h-[80px]",
                          "overflow-hidden duration-200 cursor-pointer"
                        )}
                      >
                        <div className="text-xl p-5 flex flex-row justify-between items-center">
                          <div
                            className="w-[80%]"
                            onClick={() => setFaqMakeOthersFalse(faq?.id)}
                          >
                            {faq?.Ques}
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
                        <div className="p-5">{`${faq?.Ans}`}</div>
                      </div>
                    );
                  })}
                </div>
              </div>
            );
          })}
        </div>
      </div>
      {/* lets talk */}
      <div className="">
        <Letstalk />
      </div>
    </div>
  );
};

export default Questions;
