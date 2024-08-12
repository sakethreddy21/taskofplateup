import React from 'react';
import './HeroSection.css';

function HeroSection() {
  return (
    <section className="hero-section">
         <div className="hero-images">
        <img src="hero1.png" alt="Healthy lifestyle" />
        <img src="hero2.png" alt="Yoga practice" />
        <img src="hero3.png" alt="Healthy meal" />
        <img src="hero4.png" alt="Doctor consultation" />
      </div>
      <div className="hero-content">
        <h1>Book an appointment with <span className="highlight">lifestyle medicine</span> experts</h1>
        <p>Optimize your lifestyle and reverse chronic diseases.</p>
      </div>
     
    </section>
  );
}

export default HeroSection;
