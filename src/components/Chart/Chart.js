import React from "react";

import ChartBar from "./ChartBar";
import "./Chart.css";

const Chart = (props) => {
  return (
    <div className="chart">
      {/* we design dataPoints to be an array object */}
      {props.dataPoints.map((dataPoint) => (
        <ChartBar
          // we design label to be a unique item for each list
          key={dataPoint.label}
          value={dataPoint.value} 
          maxValue={null}
          lable={dataPoint.label}
        />
      ))}
    </div>
  );
};

export default Chart;
