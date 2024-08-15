import React from 'react';
import '../styles/PillarCard.css';

function PillarCard({ title, content ,imgpath ,emj,tag1,tag2 }) {
  return (
    <div className="pillar-card">
      <div className="pillar-imgcontainer">
         <img className="card-img" src ={imgpath} alt={title} />
         <div className="pillar-tag">
          <div className="tag-svg">
          {emj}
          </div>
          <div>
          <span className="tag-detail-1">{tag1}</span>
          <span className="tag-detail-2">{tag2}</span>
          </div>
         </div>
      </div>
      <div className="card-content">   
        <h3>{title}</h3>
        <p>{content}</p>
      </div>
    </div>
  );
}

export default PillarCard;