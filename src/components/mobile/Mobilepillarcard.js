import React from 'react';
import './mob-styles/mobilepillarcard.css';

function MobilePillarCard({ title, content ,imgpath ,emj,tag1,tag2 }) {
  return (
    <div className="mobpillar-card">
      <div className="mobpillar-imgcontainer">
         <img className="mobcard-img" src ={imgpath} alt={title} />
         <div className="mobpillar-tag">
          <div className="mobtag-svg">
          {emj}
          </div>
          <div>
          <span className="mobtag-detail-1">{tag1}</span>
          <span className="mobtag-detail-2">{tag2}</span>
          </div>
         </div>
      </div>
      <div className="mobcard-content">   
        <h3>{title}</h3>
        <p>{content}</p>
      </div>
    </div>
  );
}

export default MobilePillarCard;