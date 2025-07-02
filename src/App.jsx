import { useEffect } from "react";
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
  useEffect(() => {
    const scroll = new LocomotiveScroll({
      el: document.querySelector("[data-scroll-container]") || document.body,
      smooth: true,
    });

    return () => {
      scroll.destroy();
    };
  }, []);

  return (
    <div
      className="w-full h-full font-light bg-[#E6E6E6]"
      data-scroll-container
    >
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
