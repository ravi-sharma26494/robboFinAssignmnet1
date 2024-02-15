import React from "react";
import "./action-card-completed.css";
import Button from "../button/button.component";
import DownloadIcon from "../../assets/icons/download.svg?react";

const ActionCardCompleted = ({ title, subtext, completionText, ctaText }) => {
  return (
    <div className="action-card-completed-container">
      <div className="action-card-completed-checkboxarea">
        <input type="checkbox" checked={true} />
      </div>
      <div className="action-card-completed-textarea">
        <span className="action-card-completed-textarea-title">{title}</span>
        {subtext && (
          <span className="action-card-completed-textarea-subtext">
            {subtext}
          </span>
        )}
        <span className="action-card-completed-textarea-completiontext">
          {completionText}
        </span>
      </div>
      <div className="action-card-completed-buttonarea">
        <div className="action-card-completed-buttonarea-date">
          <span className="buttonarea-date">12/12/2023</span>
        </div>
        <div className="action-card-completed-buttonarea-button">
          <Button
            text={ctaText ? ctaText : "Download"}
            onClick={() => alert("Thanks, work in progress")}
            className={"button-outline-medium"}
            buttonIcon={<DownloadIcon />}
            buttonIconAlignment={"right"}
          />
        </div>
      </div>
    </div>
  );
};

export default ActionCardCompleted;
