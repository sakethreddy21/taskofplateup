import React from 'react';
import PillarCard from './PillarCard';
import './PillarsSection.css';

function PillarsSection() {
  return (
    <section className="pillars-section">
      <h2>Lifestyle as medicine: The six pillars</h2>
      <div className="pillars-navigation">
        <button>Nutrition</button>
        <button>Physical activity</button>
        <button>Restorative sleep</button>
        <button>Stress management</button>
        <button>Social connection</button>
        <button>Substance abuse</button>
      </div>
      <div className="pillar-cards">
        <PillarCard title="Nutrition" content="Evidence supports the use of a whole-food, plant-predominant diet to prevent, treat, and reverse chronic illness." />
        <PillarCard title="Physical activity" content="Regular physical activity is key for managing weight, improving mental health, and reducing risk of chronic disease." />
        <PillarCard title="Restorative sleep" content="Consistent, adequate sleep is vital for your mental and physical health, along with emotional well-being." />
        {/* Add more PillarCard components as needed */}
      </div>
    </section>
  );
}

export default PillarsSection;
