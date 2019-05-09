import React from "react";

const SVG = ({
  style = {},
  fill = "#000",
  width = "100%",
  className = "",
  viewBox = "0 0 21 54"
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
      d="M 17.82 7 H 3.18 A 3.19 3.19 0 0 0 0 10.18 V 47.82 A 3.2 3.2 0 0 0 3.19 51 H 17.81 A 3.2 3.2 0 0 0 21 47.82 V 10.18 A 3.19 3.19 0 0 0 17.82 7 Z M 13.5 8.13 a 0.38 0.38 0 1 1 -0.37 0.38 A 0.37 0.37 0 0 1 13.5 8.13 Z M 9 8.25 h 3 a 0.25 0.25 0 0 1 0 0.5 H 9 a 0.25 0.25 0 0 1 0 -0.5 Z M 20 48.08 A 1.92 1.92 0 0 1 18.08 50 H 2.92 A 1.92 1.92 0 0 1 1 48.08 V 10 A 2 2 0 0 1 2.92 8 H 4.55 C 4.7 8 5 8 5 8.26 c 0 0 0 0.79 0 0.85 a 1 1 0 0 0 1.09 0.9 h 8.83 A 1 1 0 0 0 16 9.13 c 0 -0.06 0 -0.85 0 -0.87 c 0 -0.27 0.32 -0.23 0.47 -0.26 h 1.61 A 2 2 0 0 1 20 10 Z"
    />
  </svg>
);

export default SVG;
