import Features from "./Features";
import Coverslider from "./Coverslider";

function New() {
  return (
    <>
      <div className="text-white mt-20 ml-10 ">
        <h1 className="text-5xl sm:text-9xl  relative">
          THE LATEST FROM THE{" "}
          <span className="relative inline-block">
            WEBBYS
            <span className="absolute bottom-0 left-0 w-full h-0.5 bg-white opacity-0 transition-opacity duration-300"></span>
          </span>
          .
        </h1>

        <h2 className="text-2xl sm:text-2xl mt-5 ml-4">2024 Best In Websites & Mobile Sites...</h2>
      </div>
      <Coverslider />

      <Features />
    </>
  );
}

export default New;
