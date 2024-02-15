import React from "react";
import "./info-cards.css";

const InfoCards = ({ title, description }) => {
  return (
    <div
      className="flex 
    justify-center info-cards-wrapper"
    >
      <div className="info-cards-title">{title}</div>
      <div className="info-cards-description whitespace-pre-wrap">
        {description}
      </div>
    </div>
  );
};

export default InfoCards;
