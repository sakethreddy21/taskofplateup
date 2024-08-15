import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import SearchBar from './components/SearchBar';
import PillarsSection from './components/PillarsSection';
import MobileComponent from './components/MobileComponent'; // Assuming you have a MobileComponent for mobile screens
import './App.css';

function App() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    // Initial check
    handleResize();

    // Add event listener for window resize
    window.addEventListener('resize', handleResize);

    // Clean up event listener on unmount
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  if (isMobile) {
    return <MobileComponent />;
  }

  return (
    <div className='home'>
      <Navbar />
      <HeroSection />
      <SearchBar />
      <div className="tilted-strip"></div>
      <PillarsSection />
    </div>
  );
}

export default App;
