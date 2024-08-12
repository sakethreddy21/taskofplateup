import React from 'react';
import './HeroSection.css';

function HeroSection() {
  return (
    <section className="hero-section">
      <div className='img-section'>
        <div className='img-sec-1'>
        <div className="hero-images-container1">
          <img src="hero1.png" alt="Healthy lifestyle" />
          <img src="hero2.png" alt="Yoga practice" />
          <img src="hero3.png" alt="Healthy food" />
          <img src="hero4.png" alt="Healthy lifestyle" />
          
        </div>
        <div className="hero-images-container1">
          <img src="hero1.png" alt="Healthy lifestyle" />
          <img src="hero2.png" alt="Yoga practice" />
          <img src="hero3.png" alt="Healthy food" />
          <img src="hero4.png" alt="Healthy lifestyle" />
          
        </div>
        </div>

        <div className='img-sec-2'>
        <div className='hero-images-container2'>
          <img src="hero5.png" alt="Healthy lifestyle" />
          <img src="hero6.png" alt="Yoga practice" />
          <img src="hero7.png" alt="Healthy food" />
          <img src="hero8.png" alt="Healthy lifestyle" />
          
        </div>
        <div className='hero-images-container2'>
          <img src="hero5.png" alt="Healthy lifestyle" />
          <img src="hero6.png" alt="Yoga practice" />
          <img src="hero7.png" alt="Healthy food" />
          <img src="hero8.png" alt="Healthy lifestyle" />
          
        </div>
        </div>
        
        
        <div className="hero-content">
          
          <h1>Book an appointment with <span className="highlight">lifestyle medicine</span> experts</h1>
          <p>Optimize your lifestyle and reverse chronic diseases.</p>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
