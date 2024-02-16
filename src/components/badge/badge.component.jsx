import React from "react";
import "./badge.css";
const Badge = ({ badgeText, badgeIcon }) => {
  return (
    <span className="badge-wrapper ">
      {badgeIcon}
      <span className="badge-text">{badgeText}</span>
    </span>
  );
};

export default Badge;
