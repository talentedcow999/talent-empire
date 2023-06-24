import React, { useState } from "react";
import ContactImage from "../../assests/svg/contact.svg";
import Instagram from "../../assests/svg/instagram.svg";
import Twitter from "../../assests/svg/twitter.svg";
import MailIcon from "../../assests/svg/mailicon.svg";
import { toast } from "react-hot-toast";
import Image from "next/image";

const Contact = () => {
  const [Username, setUsername] = useState("");
  const [Email, setEmail] = useState("");
  const [Message, setMessage] = useState("");

  async function HandleClickSubmit() {
    if (!Username) {
      toast.error("Please enter a Username so we can assist you!");
    } else if (!Email) {
      toast.error("Please enter a Email so we can assist you!");
    } else if (!Message) {
      toast.error("Please enter a Message so we can assist you!");
    } else {
      // SEND DETIALS
      const UserObj = {
        User: Username,
        EmailId: Email,
        MessageInput: Message,
      };

      // else send the reqest to the server for contact form to discord
      let promise = new Promise(async function (resolve, reject) {
        const response = await fetch("/api/sendDetails", {
          method: "POST",
          body: JSON.stringify(UserObj),
        }).then((result) => result.json());

        if (response?.error == true) {
          reject("");
        } else if (response?.error == false) {
          resolve("");
        }
      });

      // promise toast
      toast.promise(promise, {
        loading: "Sending your details!",
        success: "Successfully sent your details!",
        error: "Failed To Send your details!",
      });
    }
  }

  return (
    <div className="w-full h-full bg-[#eeeeee] rounded-xl drop-shadow-lg">
      <div className="w-full flex flex-row p-10 items-center">
        <div className="w-full md:w-[60%]">
          <div>
            <div className="text-brand text-4xl font-semibold">Contact Us</div>
            <div className="text-sm">{`For any inquiry please feel free to send us a message or an email to service@talentempire.com and we’ll respond as soon as possible.`}</div>
          </div>
          {/* input fields */}
          <div className="my-8 flex flex-col gap-y-4">
            <div>
              <div className="text-[#1F1F1F] text-sm font-semibold">
                Enter your name
              </div>
              <div className="mt-1">
                <input
                  onInput={(e) => setUsername(e.target.value)}
                  className="outline-none bg-gray-200 h-9 rounded-md w-full md:w-[90%] border border-[#42424205] px-2 text-sm"
                />
              </div>
            </div>
            <div>
              <div className="text-[#1F1F1F] text-sm font-semibold">
                Enter your email address
              </div>
              <div className="mt-1">
                <input
                  type="email"
                  onInput={(e) => setEmail(e.target.value)}
                  className="outline-none bg-gray-200 h-9 rounded-md w-full md:w-[90%] border border-[#42424205] px-2 text-sm"
                />
              </div>
            </div>
            <div>
              <div className="text-[#1F1F1F] text-sm font-semibold">
                Enter your message
              </div>
              <div className="mt-1">
                <textarea
                  onInput={(e) => setMessage(e.target.value)}
                  className="outline-none bg-gray-200 h-9 rounded-md w-full md:w-[90%] border border-[#42424205] px-2 text-sm textarea-message"
                />
              </div>
            </div>
          </div>
          {/*  Send Button */}
          <div className="w-full">
            <button
              onClick={HandleClickSubmit}
              className="bg-brand hover:bg-brandhover p-3 w-full md:w-[90%] rounded-lg text-white "
            >
              Submit
            </button>
          </div>
        </div>
        <div className="hidden md:flex w-[40%] h-full flex-col items-center contact-image gap-y-10">
          <div className="h-full">
            <Image alt="contact image" src={ContactImage} />
          </div>
          <div className="flex flex-row">
            <div className="h-10 w-10">
              <Image alt="Instagram" src={Instagram} />
            </div>
            <div className="h-10 w-10">
              <Image alt="Twitter" src={Twitter} />
            </div>
            <div className="h-10 w-10">
              <Image alt="MailIcon" src={MailIcon} />
            </div>
            <div className="text-sm">{`services@talentempire.com`}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
