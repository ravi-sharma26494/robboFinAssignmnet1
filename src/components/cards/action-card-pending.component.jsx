import React from "react";
import CustomCheckbox from "../checkbox/checkbox.component";
import Button from "../button/button.component";
import "./action-card-pending.component.css";

const ActionCardPending = ({
  title,
  ctaText,
  toggleComponent,
  onClick,
  isBlur,
  isDisabled,
}) => {
  return (
    <div
      className="action-card-pending-container"
      style={{
        filter: isBlur ? "blur(0.8px)" : "none",
        pointerEvents: isDisabled ? "none" : "all",
      }}
    >
      <div className="action-card-pending-left">
        <div className="action-card-left-checkbox">
          <CustomCheckbox isClickable={false} />
        </div>
        <div className="action-card-left-details">
          <span className="action-card-title">{title}</span>
        </div>
      </div>

      <div className="action-card-pending-right">
        <Button text={ctaText} onClick={onClick} className={"button-medium"} />
      </div>
    </div>
  );
};

export default ActionCardPending;
