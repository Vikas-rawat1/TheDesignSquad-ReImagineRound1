import React from "react";

function HeroVideo() {
  return (
    <>
      <div className="relative w-full h-screen overflow-hidden">
        <video
          src="videos/hero.webm"
          autoPlay
          loop
          muted
          className="absolute inset-0 w-full h-full object-cover"
        ></video>
        <div className="absolute text-center top-60 md:top-44 md:text-start md:w-4/5 md:ml-20 text-white">
          <h1 className="text-5xl md:text-7xl font-bold mb-8 lg:w-4/5">
            Watch The 28th Annual Webby Awards
          </h1>
          <button className="text-xl font-semibold text-black bg-white rounded-full p-3 w-3/5 md:w-2/5  lg:w-1/5">
            Highlights Here
          </button>
        </div>
      </div>
    </>
  );
}

export default HeroVideo;
