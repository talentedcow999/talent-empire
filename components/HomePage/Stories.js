import React, { useState } from "react";
import { ChevronRightIcon } from "@radix-ui/react-icons";
import Link from "next/link";
import Image from "next/image";
import WomanCover from "../../assests/coverphoto/womancover.png";
import { JoinClasses } from "../../utils/functions";
import { Cross1Icon } from "@radix-ui/react-icons";
import PlayButton from "../../assests/icons/play.png";

const Video1 =
  "https://player.vimeo.com/video/843059719?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479";
const Video2 = "https://player.vimeo.com/video/843059496?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479";
const Video3 = "";

const Stories = () => {
  const [ShowPlayer, setShowPlayer] = useState(null);

  function HideOthers(playerId) {
    if (ShowPlayer == playerId) {
      setShowPlayer(null);
    } else {
      setShowPlayer(playerId);
    }
  }

  return (
    <div className="mt-28">
      <div className="mt-6 px-[15px] md:px-[80px] text-center sm:text-start">
        <div className="text-sm sm:text-lg font-semibold text-brand">
          WHY WE DO IT
        </div>
        <div className="text-5xl sm:text-7xl font-extrabold">
          Success Stories
        </div>
        <div className="mt-5 px-[30px] sm:px-0 sm:w-[400px] text-xl">{`The key to a successful life always lies in the connection one creates, invests, and cares for.At Talent Empire, that is exactly what we do.`}</div>
        <Link href={"/#letstalk"}>
          <div className="mt-10">
            <button className="bg-brand hover:bg-brandhover pl-[50px] pr-[20px] py-[14px] rounded-lg text-white font-light">
              <div className="flex flex-row items-center gap-8">
                <span>Apply Now</span>
                <ChevronRightIcon></ChevronRightIcon>
              </div>
            </button>
          </div>
        </Link>
      </div>
      {/* images */}
      <div className="flex w-full flex-row mt-10 px-[15px] md:px-[10px] lg:px-[80px] gap-x-10 gap-y-20 flex-wrap lg:flex-row lg:justify-between justify-center">
        {/* first box */}
        <div className="stories-box h-[200px] relative flex justify-center">
          <div className="w-full h-full bg-[#d9d9d9] rounded-[20px] relative z-10 overflow-hidden border border-[#3f8cff46]">
            {/* cover image */}
            <Image
              onClick={() => HideOthers("Player1")}
              className="cover-photo"
              alt="cover photo"
              src={WomanCover}
            />
            <div className="w-full h-full flex items-center justify-center">
              <Image
                onClick={() => HideOthers("Player1")}
                alt="play"
                className="z-20 absolute top-[40%] cursor-pointer"
                width={50}
                height={50}
                src={PlayButton}
              />
            </div>
          </div>
          <div className="absolute bg-brand w-[90%] h-8 rounded-lg -bottom-2 blue-shadow"></div>
        </div>
        {/* second box */}
        <div className="stories-box h-[200px] relative flex justify-center">
          <div className="w-full h-full bg-[#d9d9d9] rounded-[20px] relative z-10 overflow-hidden border border-[#3f8cff46]">
            {/* cover image */}
            <Image
              onClick={() => HideOthers("Player2")}
              className="cover-photo"
              alt="cover photo"
              src={WomanCover}
            />
            <div className="w-full h-full flex items-center justify-center">
              <Image
                onClick={() => HideOthers("Player2")}
                alt="play"
                className="z-20 absolute top-[40%] cursor-pointer"
                width={50}
                height={50}
                src={PlayButton}
              />
            </div>
          </div>
          <div className="absolute bg-brand w-[90%] h-8 rounded-lg -bottom-2 blue-shadow"></div>
        </div>
        {/* third box */}
        <div className="stories-box h-[200px] relative flex justify-center">
          <div className="w-full h-full bg-[#d9d9d9] rounded-[20px] relative z-10 overflow-hidden border border-[#3f8cff46]">
            {/* cover image */}
            <Image
              onClick={() => HideOthers("Player3")}
              className="cover-photo"
              alt="cover photo"
              src={WomanCover}
            />
            <div className="w-full h-full flex items-center justify-center">
              <Image
                onClick={() => HideOthers("Player3")}
                alt="play"
                className="z-20 absolute top-[40%] cursor-pointer"
                width={50}
                height={50}
                src={PlayButton}
              />
            </div>
          </div>
          <div className="absolute bg-brand w-[90%] h-8 rounded-lg -bottom-2 blue-shadow"></div>
        </div>

        {/* Video 1 */}
        <div
          className={JoinClasses(
            ShowPlayer == "Player1" ? "flex" : "hidden",
            "duration-200"
          )}
        >
          {/* Video Player 1 Customize */}
          <div
            onClick={() => HideOthers("Player1")}
            className="relative player-bg"
          >
            <div className="h-full w-full flex items-center justify-center relative">
              <div
                onClick={() => HideOthers("Player1")}
                className="absolute top-2 right-3 cursor-pointer z-50 player-cross-btn"
              >
                <Cross1Icon color="#fff" height={30} width={30} />
              </div>
              <div className="h-[90%] sm:h-full flex justify-center w-[370px] ">
                <iframe
                  src={Video1}
                  className="h-full w-[720px]"
                  allowFullScreen
                  title="video"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
        {/* Video 2 */}
        <div
          className={JoinClasses(
            ShowPlayer == "Player2" ? "flex" : "hidden",
            "duration-200"
          )}
        >
          {/* Video Player 2 Customize */}
          <div
            onClick={() => HideOthers("Player2")}
            className="relative player-bg"
          >
            <div className="h-full w-full flex items-center justify-center relative">
              <div
                onClick={() => HideOthers("Player2")}
                className="absolute top-2 right-3 cursor-pointer z-50 player-cross-btn"
              >
                <Cross1Icon color="#fff" height={30} width={30} />
              </div>
              <div className="h-[90%] sm:h-full flex justify-center w-[370px] ">
                <iframe
                  src={Video1}
                  className="h-full w-[720px]"
                  allowFullScreen
                  title="video"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
        {/* Video 3 */}
        <div
          className={JoinClasses(
            ShowPlayer == "Player3" ? "flex" : "hidden",
            "duration-200"
          )}
        >
          {/* Video Player 3 Customize */}
          <div
            onClick={() => HideOthers("Player3")}
            className="relative player-bg"
          >
            <div className="h-full w-full flex items-center justify-center relative">
              <div
                onClick={() => HideOthers("Player3")}
                className="absolute top-2 right-3 cursor-pointer z-50 player-cross-btn"
              >
                <Cross1Icon color="#fff" height={30} width={30} />
              </div>
              <div className="h-[90%] sm:h-full flex justify-center w-[370px] ">
                <iframe
                  src={Video1}
                  className="h-full w-[720px]"
                  allowFullScreen
                  title="video"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Stories;
