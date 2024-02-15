import React from "react";
import MapImage from "../../assets/images/sample_image.jfif";

import ArrowIcon from "../../assets/icons/arrow_back.svg?react";
import "./simple.card.css";
import Button from "../button/button.component";

export const SimpleCardComponent = ({ title, image, buttonText }) => {
  const scheduleCallHandler = () => {
    return alert("Work in progress");
  };
  return (
    <div className="simple-card-container">
      <div className="simple-card-title">Map</div>
      <div className="simple-card-image">
        <img src={MapImage} alt="map-image" />
      </div>
      <div className="simple-card-button">
        <Button
          text={"Schedule a call"}
          onClick={scheduleCallHandler}
          buttonIcon={<ArrowIcon />}
          buttonIconAlignment={"right"}
          className={"button-outline-medium"}
        />
      </div>
    </div>
  );
};
