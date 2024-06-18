import gsap from "gsap";
import { useEffect, useRef } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);
// import Footer from "./Footer";
import Achievements from "./Achievements";

function Video() {
  const videoRef = useRef();
  const textRefs = useRef([]);
  const containerRef = useRef();

  useEffect(() => {
    const triggers = [
      {
        element: videoRef.current,
        properties: { width: "100%" },
        trigger: videoRef.current,
        start: "top 60%",
        end: "top -30%",
        // markers:true,
      },

      {
        element: textRefs.current[0],
        properties: { left: "-50%", x: "80%" },
        trigger: containerRef.current,
        start: "top 40%",
        end: "top -30%",
        // markers: true,
      },
      {
        element: textRefs.current[1],
        properties: { right: "-50%", x: "10%" },
        trigger: containerRef.current,
        start: "top 40%",
        end: "top -30%",
      },
      {
        element: textRefs.current[2],
        properties: { y: "-600", opacity: 1 },
        trigger: containerRef.current,
        start: "top 50%",
        end: "top -30%",
      },
    ];
    // });
    triggers.forEach(
      ({ element, properties, trigger, start, end, markers }) => {
        gsap.to(element, {
          ...properties,
          scrollTrigger: {
            trigger,
            start,
            end,
            markers,
            scrub: true,
          },
        });
        return () => {
          ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
        };
      },
      []
    );
  });

  return (
    <>
      <div className="text-white mt-20 ml-10">
        <h1 className="text-7xl sm:text-7xl  relative">Awards & achievements</h1>
        <h2 className="text-2xl mt-5 ml-4">2024 Featuring Moments...</h2>
      </div>
      <div
        // ref={containerRef}
        className="relative overflow-hidden text-white flex justify-center items-center mt-20 w-full"
      >
        <div className="flex">
          <h1
            ref={(el) => (textRefs.current[0] = el)}
            className="absolute top-1 left-20 text-9xl z-10 transform"
          >
            PLAY
          </h1>
          <h1
            ref={(el) => (textRefs.current[1] = el)}
            className="absolute top-1 right-20 text-9xl z-10 transform"
          >
            PLAY
          </h1>
        </div>
        <div className="w-2/5 h-screen object-cover" ref={videoRef}>
          <div ref={containerRef}></div>
          <video
            src="videos/home.mp4"
            loop
            autoPlay
            muted
            // className="w-2/5 h-screen object-cover"
            // ref={videoRef}
          ></video>
        </div>
      </div>

      <div className="relative w-3/5 flex justify-center items-center m-auto ">
        <h2
          className="absolute top-28 text-white w-full text-center  text-6xl opacity-0  block "
          ref={(el) => (textRefs.current[2] = el)}
        >
          LIVE YOUR OWN
          <span className="text-8xl block text-red-600"> UNIQUE</span> ADVENTURE
        </h2>
      </div>
      {/* <A/> */}
      <Achievements />
      {/* <Footer /> */}
    </>
  );
}

export default Video;

// useEffect(() => {
//   gsap.to(videoRef.current, {
//     width: "100%",
//     scrollTrigger: {
//       trigger: videoRef.current,
//       // markers: true,
//       start: "top 40%",
//       end: "top -30%",
//       scrub: true,
//     },
//   });

//   return () => {
//     ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
//   };
// }, []);

// useEffect(() => {
//   gsap.to(textRef1.current, {
//     left: "20%",
//     x: "30%",
//     // right: "50%",
//     scrollTrigger: {
//       trigger: containerRef.current,
//       // markers: true,
//       start: "top 40%",
//       end: "top -30%",
//       scrub: true,
//     },
//   });

//   return () => {
//     ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
//   };
// }, []);

// useEffect(() => {
//   gsap.to(textRef2.current, {
//     // left: "50%",
// right: "30%",
// x: "20%",

//     scrollTrigger: {
//       trigger: containerRef.current,
//       // markers: true,
//       start: "top 40%",
//       end: "top -30%",
//       scrub: true,
//     },
//   });

//   return () => {
//     ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
//   };
// }, []);

// useEffect(() => {
//   gsap.to(textRef3.current, {
//     // left: "50%",
//     // right: "30%",
//     // x: "20%",

//     scrollTrigger: {
//       // trigger: containerRef.current,
//       // markers: true,
//       start: "top 40%",
//       end: "top -30%",
//       scrub: true,
//     },
//   });

//   return () => {
//     ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
//   };
// }, []);
