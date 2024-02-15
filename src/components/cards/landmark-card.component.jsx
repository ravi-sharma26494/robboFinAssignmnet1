import React from "react";
import "./landmark-card.css";

const LandmarkCard = ({ icon, iconText, distance, additionalDetail }) => {
  return (
    <div className="landmark-card-info-container">
      <div className="landmark-details-wrapper">
        <div className="landmark-card-info-icon-wapper flex items-center gap-2">
          <span>{icon}</span>
          <span className="landmark-card-info-icontext">{iconText}</span>
        </div>
        <div className="landmark-card-info-details">
          <div className="landmark-card-info-deatils-distance">{distance}</div>
          <div className="landmark-card-info-deatils-additionaldetail">
            {additionalDetail}
          </div>
        </div>
      </div>
    </div>
  );
};

export default LandmarkCard;
