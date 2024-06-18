import gsap from "gsap";
import { useEffect, useRef } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);
import Footer from "./Footer";

function Video() {
  const videoRef = useRef();
  useEffect(() => {
    gsap.to(videoRef.current, {
      width: "100%",
      scrollTrigger: {
        trigger: videoRef.current,
        // markers: true,
        start: "top 40%",
        end: "top -30%",
        scrub: true,
      },
    });

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <>
         <div className="text-white mt-20 ml-10 ">
        <h1 className="text-9xl  relative">28 Annual Webby Award Highlights</h1>

        <h2 className="text-2xl mt-5 ml-4">2024 Featuring Moments...</h2>
      </div>
      <div
        // id="main"
        className="flex justify-center items-center mt-20 "
      >
        <video
          src="videos/home.mp4"
          loop
          autoPlay
          muted
          className="w-2/5 relative"
          ref={videoRef}
        ></video>
      </div>
      <Footer />
    </>
  );
}

export default Video;
