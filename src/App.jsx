import "./App.css";
import gsap from "gsap";
import { useEffect, useRef } from "react";
import { useGSAP } from "@gsap/react";
import New from "./components/New";
import Menu from "./components/Menu";
function App() {
  const cursorRef = useRef(null);
  const videoRef = useRef(null);

  useGSAP(() => {
    const handleMouseMove = (event) => {
      gsap.to(cursorRef.current, {
        x: event.clientX,
        y: event.clientY,
        ease: "power2.out",
      });
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <>
      <Menu />

      <div
        className="bg-transparent border border-dotted border-white rounded-full w-12 h-12 fixed z-10"
        ref={cursorRef}
      ></div>
      <div className="relative w-full h-screen overflow-hidden">
        <video
          src="videos/hero.mp4"
          autoPlay
          loop
          muted
          ref={videoRef}
          className="absolute inset-0 w-full h-full object-cover"
        ></video>
        <div className="absolute text-center top-60 md:top-44 md:text-start md:w-4/5 md:ml-20 text-white">
          <h1 className="text-5xl md:text-7xl font-bold mb-8">
            Watch the 28th Annual Webby Awards
          </h1>
          <button className="text-xl font-semibold text-black bg-white rounded-full p-3 w-3/5 md:w-2/5  lg:w-1/5">
            Highlights Here
          </button>
        </div>
      </div>
      <New />
    </>
  );
}

export default App;
