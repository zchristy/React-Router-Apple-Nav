import React from "react";

const SVG = ({
  style = {},
  fill = "#000",
  width = "100%",
  className = "",
  viewBox = "0 0 46 54"
}) => (
  <svg
    width={width}
    style={style}
    height={width}
    viewBox={viewBox}
    xmlns="http://www.w3.org/2000/svg"
    className={`svg-icon ${className || ""}`}
    xmlnsXlink="http://www.w3.org/1999/xlink"
  >
    <path
      fill={fill}
      d="M 20.74 20 H 1.27 A 1.3 1.3 0 0 0 0 21.26 V 49.8 A 1.26 1.26 0 0 0 1.27 51 H 20.74 A 1.31 1.31 0 0 0 22 49.74 V 21.26 A 1.3 1.3 0 0 0 20.74 20 Z m -9.79 1.25 a 0.43 0.43 0 1 1 -0.43 0.43 A 0.43 0.43 0 0 1 10.94 21.25 Z M 11 50.5 a 1 1 0 1 1 1 -1 A 1 1 0 0 1 11 50.5 Z M 20 48 H 2 V 23 H 20 Z M 33.74 11 H 8.26 A 1.24 1.24 0 0 0 7 12.25 V 19 H 9 V 15 H 33 V 47 H 23 v 2.59 c 0 0.8 -0.1 1.19 -0.69 1.41 H 33.74 A 1.24 1.24 0 0 0 35 49.75 V 12.25 A 1.24 1.24 0 0 0 33.74 11 Z M 21 13.5 a 0.5 0.5 0 1 1 0.5 -0.5 A 0.5 0.5 0 0 1 21 13.5 Z"
    />    
    <path
      fill={fill}
      d="M35.39,51h9.24A1.34,1.34,0,0,0,46,49.68V4.51A1.51,1.51,0,0,0,44.64,3H13.31A1.48,1.48,0,0,0,12,4.56V10h2V6.05A1,1,0,0,1,15,5H43a1,1,0,0,1,1,1V48a1,1,0,0,1-1,1H36v.87A1.19,1.19,0,0,1,35.39,51Z"
    />
  </svg>
);

export default SVG;