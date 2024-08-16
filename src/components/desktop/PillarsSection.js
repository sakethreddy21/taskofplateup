import React, { useState } from "react";
import PillarCard from "./PillarCard";
import "./desk-styles/PillarsSection.css";
import { ArrowLeft, ArrowRight } from "lucide-react";

function PillarsSection() {
  const [slideIndex, setSlideIndex] = useState(0);

  const handlePrevSlide = () => {
    setSlideIndex((prevIndex) =>
      prevIndex > 0 ? prevIndex - 1 : 0
    );
  };

  const handleNextSlide = () => {
    setSlideIndex((prevIndex) =>
      prevIndex < 1 ? prevIndex + 1 : 1 // Assuming there are 2 slides (index 0 and 1)
    );
  };

  return (
    <section className="pillars-section">
      <span className="pillars-prehead">HOW IT WORKS</span>
      <div className="pillars-headsection">
        <div>
          <span className="pillars-head">Lifestyle as medicine: </span>
          <span className="pillars-tag"> The six pillars</span>
        </div>
        <div className="pillars-navigation-icons">
          <div className="icon-wrapper" onClick={handlePrevSlide}>
            <ArrowLeft color="#747474" size={20} className="pillars-icon" />
          </div>
          <div className="icon-wrapper" onClick={handleNextSlide}>
            <ArrowRight color="#747474" size={20} className="pillars-icon" />
          </div>
        </div>
      </div>
      <div className="pillars-navigation">
        <button>Nutrition</button>
        <button>Physical activity</button>
        <button>Restorative sleep</button>
        <button>Stress management</button>
        <button>Social connection</button>
        <button>Substance abuse</button>
      </div>
      <div className="pillars-cards">
        <div
          className="pillars-slide"
          style={{ transform: `translateX(-${slideIndex * 100}%)` }}
        >
          <PillarCard
            title="Nutrition"
            content="Evidence supports the use of a whole-food, plant-predominant diet to prevent, treat, and reverse chronic illness."
            imgpath="pic1.png"
            emj={<img src="/cardicons/img1.png" alt="emg1" />}
            tag1="121/80"
            tag2="mmHg"
          />

          <PillarCard
            title="Physical activity"
            content="Regular physical activity is key for managing weight, improving mental health, and reducing risk of chronic disease."
            imgpath="pic2.png"
            tag1="32"
            tag2="minutes"
            emj={<img src="/cardicons/img2.png" alt="emg1" />}
          />
          <PillarCard
            title="Restorative sleep"
            content="Consistent, adequate sleep is vital for your mental and physical health, along with emotional well-being."
            imgpath="pic3.png"
            tag1="8"
            tag2="hours"
            emj={<img src="/cardicons/img3.png" alt="emg1" />}
          />

          <PillarCard
            title="Stress management"
            content="Regular physical activity is key for managing weight, improving mental health, and reducing risk of chronic disease."
            imgpath="pic4.png"
            tag1="60"
            tag2="bpm"
            emj={<img src="/cardicons/img4.png" alt="emg1" />}
          />
          <PillarCard
            title="Social Connection"
            content="Consistent, adequate sleep is vital for your mental and physical health, along with emotional well-being."
            imgpath="pic5.png"
            tag1="Feeling"
            tag2="better"
            emj={<img src="/cardicons/img2.png" alt="emg1" />}
          />

          <PillarCard
            title="Substance abuse"
            content="Consistent, adequate sleep is vital for your mental and physical health, along with emotional well-being."
            imgpath="pic6.png"
            tag1="62"
            tag2="days"
            emj={<img src="/cardicons/img5.png" alt="emg1" />}
          />
        </div>

        <div
          className="pillars-slide"
          style={{ transform: `translateX(-${slideIndex * 100}%)` }}
        >
          <PillarCard
            title="Nutrition"
            content="Evidence supports the use of a whole-food, plant-predominant diet to prevent, treat, and reverse chronic illness."
            imgpath="pic1.png"
            emj={<img src="/cardicons/img1.png" alt="emg1" />}
            tag1="121/80"
            tag2="mmHg"
          />

          <PillarCard
            title="Physical activity"
            content="Regular physical activity is key for managing weight, improving mental health, and reducing risk of chronic disease."
            imgpath="pic2.png"
            tag1="32"
            tag2="minutes"
            emj={<img src="/cardicons/img2.png" alt="emg1" />}
          />
          <PillarCard
            title="Restorative sleep"
            content="Consistent, adequate sleep is vital for your mental and physical health, along with emotional well-being."
            imgpath="pic3.png"
            tag1="8"
            tag2="hours"
            emj={<img src="/cardicons/img3.png" alt="emg1" />}
          />

          <PillarCard
            title="Stress management"
            content="Regular physical activity is key for managing weight, improving mental health, and reducing risk of chronic disease."
            imgpath="pic4.png"
            tag1="60"
            tag2="bpm"
            emj={<img src="/cardicons/img4.png" alt="emg1" />}
          />
          <PillarCard
            title="Social Connection"
            content="Consistent, adequate sleep is vital for your mental and physical health, along with emotional well-being."
            imgpath="pic5.png"
            tag1="Feeling"
            tag2="better"
            emj={<img src="/cardicons/img2.png" alt="emg1" />}
          />

          <PillarCard
            title="Substance abuse"
            content="Consistent, adequate sleep is vital for your mental and physical health, along with emotional well-being."
            imgpath="pic6.png"
            tag1="62"
            tag2="days"
            emj={<img src="/cardicons/img5.png" alt="emg1" />}
          />
        </div>
      </div>
    </section>
  );
}

export default PillarsSection;
