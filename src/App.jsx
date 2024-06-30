import "./App.css";
import gsap from "gsap";
import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import New from "./components/New";
import Menu from "./components/Menu";
import HeroVideo from "./components/HeroVideo";
function App() {
  const cursorRef = useRef(null);

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
      <HeroVideo />

      <New />
    </>
  );
}

export default App;
