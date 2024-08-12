import React from 'react';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import SearchBar from './components/SearchBar';
import PillarsSection from './components/PillarsSection';
import './App.css';
function App() {
  return (
    <div className='home'>
      <Navbar />
      <HeroSection />
     <SearchBar/>
      <PillarsSection />
    </div>
  );
}

export default App;
