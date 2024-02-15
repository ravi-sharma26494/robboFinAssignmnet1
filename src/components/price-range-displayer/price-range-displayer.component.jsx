import React, { useEffect, useState } from "react";
import "./price-range-displayer.css";
const PricerangeDisplayer = ({ minValue, maxValue }) => {
  const minValueNum = parseFloat(minValue);
  const maxValueNum = parseFloat(maxValue);

  const [percent, setPercent] = useState(20);

  useEffect(() => {
    // Calculate the percentage based on the min and max values
    const calculatedPercent = (minValueNum / maxValueNum) * 100;
    setPercent(calculatedPercent);
  }, [minValueNum, maxValueNum]);
  return (
    <div className="range-container">
      <div className="price-container">
        <div class="price-min">Rs. {minValue}</div>
        <div class="price-max">Rs. {maxValue}</div>
      </div>
      <div className="divider">
        <div style={{ width: `${percent}%` }}></div>
      </div>
    </div>
  );
};

export default PricerangeDisplayer;
