import React from 'react'
import './mob-styles/mobileimageslider.css'
const MobileImageSlider = () => {
  return (
    <section className="mobhero-section">
      <div className='mobimg-section'>
        <div className='mobimg-sec-1'>
        <div className="mobhero-images-container1">
          <img src="hero1.png" alt="Healthy lifestyle" />
          <img src="hero2.png" alt="Yoga practice" />
          <img src="hero3.png" alt="Healthy food" />
          <img src="hero4.png" alt="Healthy lifestyle" />
          
        </div>
        <div className="mobhero-images-container1">
          <img src="hero1.png" alt="Healthy lifestyle" />
          <img src="hero2.png" alt="Yoga practice" />
          <img src="hero3.png" alt="Healthy food" />
          <img src="hero4.png" alt="Healthy lifestyle" />
          
        </div>
        </div>
      </div>
    </section>
  )
}

export default MobileImageSlider