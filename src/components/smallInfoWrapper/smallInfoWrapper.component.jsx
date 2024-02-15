import React from "react";
import "./smallInfoWrapper.component.css";
const SmallInfoWrapper = ({ title, subtitle }) => {
  return (
    <div className="small-info-wrapper-container">
      <div className="small-info-title">{title}</div>
      <div className="small-info-subtitle">{subtitle}</div>
    </div>
  );
};

export default SmallInfoWrapper;
