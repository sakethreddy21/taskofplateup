import React from 'react'
import './mob-styles/mobilepillarsecton.css'
import MobilePillarCard from './Mobilepillarcard'
const MobilePillarSection = () => {
  return (
    <section className="mobpillars-section">
      <span className="mobpillars-prehead">HOW IT WORKS</span>
      <div className="mobpillars-headsection">
        <div className='mobpillars-headertext'>
          <span className="mobpillars-head">Lifestyle as medicine: </span>
          <span className="mobpillars-tag"> The six pillars</span>
        </div>
      </div>
      <div className="mobpillars-cards">
        <div className="mobpillars-slide">
          <MobilePillarCard
            title="Nutrition"
            content="Evidence supports the use of a whole-food, plant-predominant diet to prevent, treat, and reverse chronic illness."
            imgpath="pic1.png"
            emj={
              <img src="/cardicons/img1.png" alt="emg1"/> 
            }
            tag1="121/80"
            tag2="mmHg"
          />

         <MobilePillarCard
            title="Physical activity"
            content="Regular physical activity is key for managing weight, improving mental health, and reducing risk of chronic disease."
            imgpath="pic2.png"
            tag1="32"
            tag2="minutes"
            emj={
              <img src="/cardicons/img2.png" alt="emg1"/> 
            }
          />
         <MobilePillarCard
            title="Restorative sleep"
            content="Consistent, adequate sleep is vital for your mental and physical health, along with emotional well-being."
            imgpath="pic3.png"
            tag1="8"
            tag2="hours"
            emj={
              <img src="/cardicons/img3.png" alt="emg1"/> 
            }
          />

         <MobilePillarCard
            title="Stress management"
            content="Regular physical activity is key for managing weight, improving mental health, and reducing risk of chronic disease."
            imgpath="pic4.png"
            tag1="60"
            tag2="bpm"
            emj={
              <img src="/cardicons/img4.png" alt="emg1"/> 
            }
          />
         <MobilePillarCard
            title="Social Connection"
            content="Consistent, adequate sleep is vital for your mental and physical health, along with emotional well-being."
            imgpath="pic5.png"
            tag1="Feeling"
            tag2="better"
            emj={
              <img src="/cardicons/img2.png" alt="emg1"/> 
            }
          />

         <MobilePillarCard
            title="Substance abuse"
            content="Consistent, adequate sleep is vital for your mental and physical health, along with emotional well-being."
            imgpath="pic6.png"
            tag1="62"
            tag2="days"
            emj={
              <img src="/cardicons/img5.png" alt="emg1"/> 
            }
          />
        </div>

        <div className="mobpillars-slide">
          <MobilePillarCard
            title="Nutrition"
            content="Evidence supports the use of a whole-food, plant-predominant diet to prevent, treat, and reverse chronic illness."
            imgpath="pic1.png"
            emj={
              <img src="/cardicons/img1.png" alt="emg1"/> 
            }
            tag1="121/80"
            tag2="mmHg"
          />

         <MobilePillarCard
            title="Physical activity"
            content="Regular physical activity is key for managing weight, improving mental health, and reducing risk of chronic disease."
            imgpath="pic2.png"
            tag1="32"
            tag2="minutes"
            emj={
              <img src="/cardicons/img2.png" alt="emg1"/> 
            }
          />
         <MobilePillarCard
            title="Restorative sleep"
            content="Consistent, adequate sleep is vital for your mental and physical health, along with emotional well-being."
            imgpath="pic3.png"
            tag1="8"
            tag2="hours"
            emj={
              <img src="/cardicons/img3.png" alt="emg1"/> 
            }
          />

         <MobilePillarCard
            title="Stress management"
            content="Regular physical activity is key for managing weight, improving mental health, and reducing risk of chronic disease."
            imgpath="pic4.png"
            tag1="60"
            tag2="bpm"
            emj={
              <img src="/cardicons/img4.png" alt="emg1"/> 
            }
          />
         <MobilePillarCard
            title="Social Connection"
            content="Consistent, adequate sleep is vital for your mental and physical health, along with emotional well-being."
            imgpath="pic5.png"
            tag1="Feeling"
            tag2="better"
            emj={
              <img src="/cardicons/img2.png" alt="emg1"/> 
            }
          />

         <MobilePillarCard
            title="Substance abuse"
            content="Consistent, adequate sleep is vital for your mental and physical health, along with emotional well-being."
            imgpath="pic6.png"
            tag1="62"
            tag2="days"
            emj={
              <img src="/cardicons/img5.png" alt="emg1"/> 
            }
          />
        </div>

      </div>
    </section>
  );
}
export default MobilePillarSection