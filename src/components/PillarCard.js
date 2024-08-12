import React from 'react';
import './PillarCard.css';

function PillarCard({ title, content }) {
  return (
    <div className="pillar-card">
      <div className="card-content">
        <h3>{title}</h3>
        <p>{content}</p>
      </div>
    </div>
  );
}

export default PillarCard;
