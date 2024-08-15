import React from "react";
import PillarCard from "./PillarCard";
import "../styles/PillarsSection.css";

function PillarsSection() {
  return (
    <section className="pillars-section">
      <span className="pillars-prehead">HOW IT WORKS</span>
      <div className="pillars-headsection">
        <div>
          <span className="pillars-head">Lifestyle as medicine: </span>
          <span className="pillars-tag"> The six pillars</span>
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
        <div className="pillars-slide">
          <PillarCard
            title="Nutrition"
            content="Evidence supports the use of a whole-food, plant-predominant diet to prevent, treat, and reverse chronic illness."
            imgpath="pic1.png"
            emj={
              <svg
                viewBox="0 -2 32 32"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                <g
                  id="SVGRepo_tracerCarrier"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></g>
                <g id="SVGRepo_iconCarrier">
                  {" "}
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M18.2627 26.9922L29.2549 16C31.085 14.1699 32 11.9607 32 9.37258C32 6.78442 31.085 4.57528 29.2549 2.74517C27.4247 0.915055 
                            25.2155 0 22.6274 0C20.0392 0 17.8301 0.915055 16 2.74517C14.1699 0.915055 11.9607 0 9.37258 0C6.78442 0 4.57528 0.915055 2.74517 2.74517C0.915056 4.57528 0 6.78442 0 9.37258C0 11.9607 0.915056 14.1699 
                            2.74517 16L13.7373 26.9922C14.9869 28.2418 17.0131 28.2418 18.2627 26.9922Z"
                    fill="url(#paint0_radial_103_1602)"
                  ></path>{" "}
                  <defs>
                    {" "}
                    <radialGradient
                      id="paint0_radial_103_1602"
                      cx="0"
                      cy="0"
                      r="1"
                      gradientUnits="userSpaceOnUse"
                      gradientTransform="translate(8.07998 9.66157) rotate(59.8757) scale(18.7297 20.4872)"
                    >
                      {" "}
                      <stop stop-color="#FFAA00"></stop>{" "}
                      <stop offset="1" stop-color="#F05206"></stop>{" "}
                    </radialGradient>{" "}
                  </defs>{" "}
                </g>
              </svg>
            }
            tag1="121/80"
            tag2="mmHg"
          />

          <PillarCard
            title="Physical activity"
            content="Regular physical activity is key for managing weight, improving mental health, and reducing risk of chronic disease."
            imgpath="pic2.png"
            tag1="32"
            tag2="minutes"
            emj=""
          />
          <PillarCard
            title="Restorative sleep"
            content="Consistent, adequate sleep is vital for your mental and physical health, along with emotional well-being."
            imgpath="pic3.png"
            tag1="8"
            tag2="hours"
            emj=""
          />

          <PillarCard
            title="Stress management"
            content="Regular physical activity is key for managing weight, improving mental health, and reducing risk of chronic disease."
            imgpath="pic4.png"
            tag1="60"
            tag2="bpm"
            emj=""
          />
          <PillarCard
            title="Social Connection"
            content="Consistent, adequate sleep is vital for your mental and physical health, along with emotional well-being."
            imgpath="pic5.png"
            tag1="Feeling"
            tag2="better"
            emj=""
          />

          <PillarCard
            title="Substance abuse"
            content="Consistent, adequate sleep is vital for your mental and physical health, along with emotional well-being."
            imgpath="pic6.png"
            tag1="62"
            tag2="days"
            emj=""
          />
        </div>

        <div className="pillars-slide">
          <PillarCard
            title="Nutrition"
            content="Evidence supports the use of a whole-food, plant-predominant diet to prevent, treat, and reverse chronic illness."
            imgpath="pic1.png"
            emj={
              <svg
                viewBox="0 -2 32 32"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                <g
                  id="SVGRepo_tracerCarrier"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></g>
                <g id="SVGRepo_iconCarrier">
                  {" "}
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M18.2627 26.9922L29.2549 16C31.085 14.1699 32 11.9607 32 9.37258C32 6.78442 31.085 4.57528 29.2549 2.74517C27.4247 0.915055 
                            25.2155 0 22.6274 0C20.0392 0 17.8301 0.915055 16 2.74517C14.1699 0.915055 11.9607 0 9.37258 0C6.78442 0 4.57528 0.915055 2.74517 2.74517C0.915056 4.57528 0 6.78442 0 9.37258C0 11.9607 0.915056 14.1699 
                            2.74517 16L13.7373 26.9922C14.9869 28.2418 17.0131 28.2418 18.2627 26.9922Z"
                    fill="url(#paint0_radial_103_1602)"
                  ></path>{" "}
                  <defs>
                    {" "}
                    <radialGradient
                      id="paint0_radial_103_1602"
                      cx="0"
                      cy="0"
                      r="1"
                      gradientUnits="userSpaceOnUse"
                      gradientTransform="translate(8.07998 9.66157) rotate(59.8757) scale(18.7297 20.4872)"
                    >
                      {" "}
                      <stop stop-color="#FFAA00"></stop>{" "}
                      <stop offset="1" stop-color="#F05206"></stop>{" "}
                    </radialGradient>{" "}
                  </defs>{" "}
                </g>
              </svg>
            }
            tag1="121/80"
            tag2="mmHg"
          />

          <PillarCard
            title="Physical activity"
            content="Regular physical activity is key for managing weight, improving mental health, and reducing risk of chronic disease."
            imgpath="pic2.png"
            tag1="32"
            tag2="minutes"
            emj=""
          />
          <PillarCard
            title="Restorative sleep"
            content="Consistent, adequate sleep is vital for your mental and physical health, along with emotional well-being."
            imgpath="pic3.png"
            tag1="8"
            tag2="hours"
            emj=""
          />

          <PillarCard
            title="Stress management"
            content="Regular physical activity is key for managing weight, improving mental health, and reducing risk of chronic disease."
            imgpath="pic4.png"
            tag1="60"
            tag2="bpm"
            emj=""
          />
          <PillarCard
            title="Social Connection"
            content="Consistent, adequate sleep is vital for your mental and physical health, along with emotional well-being."
            imgpath="pic5.png"
            tag1="Feeling"
            tag2="better"
            emj=""
          />

          <PillarCard
            title="Substance abuse"
            content="Consistent, adequate sleep is vital for your mental and physical health, along with emotional well-being."
            imgpath="pic6.png"
            tag1="62"
            tag2="days"
            emj=""
          />
        </div>
      </div>
    </section>
  );
}

export default PillarsSection;
