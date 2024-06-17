import React from "react";
// import MyComponent from "../components/MyComponent";
// import Marquee from "react-fast-marquee";
import Features from "./Features";

function New() {
  return (
    <>
      <div className="text-white mt-20 ml-10 ">
        <h1 className="text-9xl  relative">
          THE LATEST FROM THE{" "}
          <span className="relative inline-block">
            WEBBYS
            <span className="absolute bottom-0 left-0 w-full h-0.5 bg-white opacity-0 transition-opacity duration-300"></span>
          </span>
          .
        </h1>

        <h2 className="text-2xl mt-5 ml-4">2024 Show Moments...</h2>
      </div>

      <div className="mt-20 ml-10 flex gap-10  right-10">
        <video
          src="videos/video.mp4"
          loop
          muted
          autoPlay
          className="w-1/5 h-2/5 "
        ></video>
        <video
          src="videos/video.mp4"
          loop
          muted
          autoPlay
          className="w-1/5 h-2/5 "
        ></video>
        <video
          src="videos/video.mp4"
          loop
          muted
          autoPlay
          className="w-1/5 h-2/5 "
        ></video>
        <video
          src="videos/video.mp4"
          loop
          muted
          autoPlay
          className="w-1/5 h-2/5 "
        ></video>
      </div>
      {/* <img src="images/test.jpg" alt="Image failed" className="w-1/5" />
        <img src="images/test.jpg" alt="Image failed" className="w-1/5" />
        <img src="images/test.jpg" alt="Image failed" className="w-1/5" /> */}
        <Features/>
    </>
  );
}

export default New;
