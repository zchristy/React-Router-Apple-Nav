import React from "react";

const SVG = ({
  style = {},
  fill = "#000",
  width = "100%",
  className = "",
  viewBox = "0 0 36 54"
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
      d="M 32 25 H 4 a 4 4 0 0 0 -4 4 V 47 a 4 4 0 0 0 4 4 H 32 a 4 4 0 0 0 4 -4 V 29 A 4 4 0 0 0 32 25 Z M 7.29 28.45 a 1.45 1.45 0 0 1 1 -0.53 A 1.48 1.48 0 0 1 8 29 a 1.31 1.31 0 0 1 -1.06 0.56 A 1.46 1.46 0 0 1 7.29 28.45 Z m 2 5.7 c -0.29 0.44 -0.63 0.93 -1.11 0.93 s -0.65 -0.31 -1.18 -0.31 s -0.74 0.31 -1.18 0.31 s -0.81 -0.49 -1.12 -0.93 A 4.57 4.57 0 0 1 4 31.8 a 2.29 2.29 0 0 1 0.31 -1.24 a 1.83 1.83 0 0 1 1.49 -0.93 c 0.47 0 0.89 0.31 1.18 0.31 a 9.18 9.18 0 0 1 1.36 -0.31 a 1.61 1.61 0 0 1 1.3 0.74 a 1.57 1.57 0 0 0 -0.81 1.35 a 1.64 1.64 0 0 0 1 1.44 A 4.19 4.19 0 0 1 9.33 34.15 Z"
    />
  </svg>
);

export default SVG;
