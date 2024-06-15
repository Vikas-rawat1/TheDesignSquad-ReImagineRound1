import "./App.css";
import Menu from "./components/Menu";
import New from "./components/New";

function App() {
  return (
    <>
      <Menu />
      <div className="relative w-full h-screen overflow-hidden">
        <video
          src="videos/hero.mp4"
          autoPlay
          loop
          muted
          className="absolute inset-0 w-full h-full object-cover"
        ></video>
        <div className="absolute inset-0 flex flex-col justify-center items-center text-center text-white">
          {/* <h1 className="text-8xl font-bold mb-8">Watch the 28th Annual Webby Awards</h1> 
          <button className="text-xl font-semibold text-black bg-white rounded-full p-3">
            Highlights Here
          </button> */}
        </div>
      </div>
      <New />
    </>
  );
}

export default App;
