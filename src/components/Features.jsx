// import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useEffect, useRef } from "react";
import { RiArrowDownLine } from "react-icons/ri";
import Video from "./Video";

function Features() {
  const rotateRef = useRef();
  useEffect(() => {
    const handleRotateScroll = (dets) => {
      if (dets.deltaY > 0) {
        gsap.to(rotateRef.current, {
          rotate: "+=360",
          duration: 1,
          ease: "none",
        });
      } else {
        gsap.to(rotateRef.current, {
          rotate: "-=360",
        });
      }
    };
    window.addEventListener("wheel", handleRotateScroll);
    return () => {
      window.addEventListener("wheel", handleRotateScroll);
    };
  });
  return (
    <>
      <div className="text-white mt-20 ml-10 ">
        <h1 className="text-9xl  relative">28 Annual Webby Award Highlights</h1>

        <h2 className="text-2xl mt-5 ml-4">2024 Show Moments...</h2>
      </div>
      <div className="ml-10 mt-40 flex justify-between gap-20">
        <div className="ml-20">
          <video
            src="videos/feature1.mp4"
            autoPlay
            loop
            muted
            className="w-full h-5/5"
            // className="absolute inset-0 w-full h-full object-cover"
          ></video>
        </div>
        <div className="text-white">
          <h1 className="mt-20">GOOD STUFF</h1>
          <p className="w-3/5 mt-8">
            Highlights of cases that we passionately built with forward-thinking
            clients and friends over the years.
          </p>
          <video
            src="videos/video.mp4"
            autoPlay
            loop
            muted
            className="w-3/5 h-3/5 mt-20"
            // className="absolute inset-0 w-full h-full object-cover"
          ></video>
        </div>
      </div>
      <div className=" fixed right-0 bottom-0 z-10">
        <div>
          <svg
            ref={rotateRef}
            width="150"
            height="200"
            viewBox="0 0 200 200"
            className="circle"
          >
            Define the path
            <defs>
              <path
                id="txt-path"
                d="M100,100 m-75,0 a75,75 0 1,1 150,0 a75,75 0 1,1 -150,0"
              />
            </defs>
            <text dy="2" fontSize="19" fill="white">
              <textPath
                startOffset="0"
                href="#txt-path"
                className="a-scrollIndicator__text__path text"
              >
                SCROLL TO EXPLORE •
              </textPath>

              <textPath
                startOffset="50%"
                href="#txt-path"
                className="a-scrollIndicator__text__path"
              >
                SCROLL TO EXPLORE •
              </textPath>
            </text>
          </svg>
        </div>
        <div className="absolute inset-0 flex rotate-0 items-center justify-center text-white">
          <RiArrowDownLine size={42} />
        </div>
      </div>

{/*       
        <video
          src="videos/video.mp4"
          autoPlay
          loop
          muted
          className="w-1/5 h-full"
          // className="absolute inset-0 w-full h-full object-cover"
        ></video> */}
      <Video />
    </>
  );
}

export default Features;
