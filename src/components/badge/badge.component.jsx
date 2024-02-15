import React from "react";
import "./badge.css";
const Badge = ({ badgeText, badgeIcon }) => {
  return (
    <span className="badge-wrapper ">
      {badgeIcon}
      {badgeText}
    </span>
  );
};

export default Badge;
