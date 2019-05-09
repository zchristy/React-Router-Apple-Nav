import React from "react";

const SVG = ({
  style = {},
  fill = "#000",
  width = "100%",
  className = "",
  viewBox = "0 0 23 54"
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
      d="M 13 31.54 V 50.08 a 0.93 0.93 0 0 0 0.92 0.92 h 1.85 c 0.48 0 1.22 -0.4 1.22 -0.92 V 34.24 a 13.82 13.82 0 0 0 2 0.18 a 5.14 5.14 0 0 0 3.8 -1.81 A 0.82 0.82 0 0 0 23 32 V 28 a 1.05 1.05 0 0 0 -0.22 -0.62 a 5.77 5.77 0 0 0 -4.1 -1.85 C 15.73 25.51 13 29.51 13 31.54 Z"
    />
    <path
      fill={fill}
      d="M 10 31.54 V 50.08 a 0.93 0.93 0 0 1 -0.92 0.92 H 7.3 c -0.48 0 -1.22 -0.4 -1.22 -0.92 V 34.24 a 13.82 13.82 0 0 1 -2 0.18 A 5.14 5.14 0 0 1 0.3 32.61 A 0.82 0.82 0 0 1 0.08 32 V 28 A 1.05 1.05 0 0 1 0.3 27.4 a 5.77 5.77 0 0 1 4.1 -1.85 C 7.34 25.51 10 29.51 10 31.54 Z"
    />
  </svg>
);

export default SVG;