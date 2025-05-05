import "./App.css";
import Navbar from "./component/navbar";
import Landing from "./component/landing";
import Marquee from "./component/marquee";
import About from "./component/about";
import Eyes from "./component/eyes";
import Feature from "./component/feature";
import Card from "./component/card";
import Footer from "./component/Footer";
import LocomotiveScroll from "locomotive-scroll";
function App() {
  const locomotivesScroll = new LocomotiveScroll();

  return (
    <div className="w-full h-screen font-light bg-[#E6E6E6]">
      <Navbar />
      <Landing />
      <Marquee />
      <About />
      <Eyes />
      <Feature />
      <Card />
      <Footer />
    </div>
  );
}

export default App;
