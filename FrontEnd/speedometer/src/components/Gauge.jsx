import React from "react";
import ReactSpeedometer from "react-d3-speedometer";

const Gauge = ({ speed }) => {
  return (
    // Center the speedometer using flex utilities
    <div className="flex justify-center items-center">
      <ReactSpeedometer
        value={speed}                 // Current speed to display
        minValue={0}                 // Minimum value of the speedometer
        maxValue={120}              // Maximum value of the speedometer
        segments={6}                // Number of colored segments
        needleColor="red"           // Color of the speedometer needle
        startColor="green"          // Start color for the gradient
        endColor="blue"             // End color for the gradient
        height={250}                // Height of the speedometer
        ringWidth={30}              // Width of the gauge ring
        valueTextFontSize="20px"    // Font size for the speed text
        currentValueText={`Current Speed: ${speed} km/h`} // Displayed text below the gauge
      />
    </div>
  );
};

export default Gauge;
