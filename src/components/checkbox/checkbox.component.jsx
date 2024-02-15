import React from "react";
import "./checkbox.css";

const CustomCheckbox = ({ isClickable }) => {
  if (!isClickable) {
    return <input type="checkbox" id="disabled-checkbox" disabled />;
  } else {
    return (
      <label className="checkbox-container">
        <input type="checkbox" />
        <span className="checkmark"></span>
      </label>
    );
  }
};

export default CustomCheckbox;
