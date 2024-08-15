import React, { useState, useEffect } from "react";
import Navbar from "./components/desktop/Navbar";
import HeroSection from "./components/desktop/HeroSection";
import SearchBar from "./components/desktop/SearchBar";
import PillarsSection from "./components/desktop/PillarsSection";
import MobSearchBar from "./components/mobile/MobSearchBar";
import "./App.css";
import MobNavbar from "./components/mobile/MobNavbar";
import MobHeroSection from "./components/mobile/MobHeroSection";
import MobileImageSlider from "./components/mobile/MobileImageSlider";

function App() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    // Initial check
    handleResize();

    // Add event listener for window resize
    window.addEventListener("resize", handleResize);

    // Clean up event listener on unmount
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  console.log("isMobile:", isMobile); // Check the value of isMobile

  if (isMobile) {
    return(
      
      <div className="mob-home">
        <MobNavbar/>
        <MobHeroSection/>
        <MobSearchBar/>
        <div className="mobile-tilted-strip"></div>
        <MobileImageSlider/>
        </div>)
  } else {
    return (
      <div className="home">
        <Navbar />
        <HeroSection />
        <SearchBar />
        <div className="tilted-strip"></div>
        <PillarsSection />
      </div>
    );
  }
}

export default App;
