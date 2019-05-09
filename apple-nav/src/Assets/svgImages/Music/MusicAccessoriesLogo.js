import React from "react";

const SVG = ({
  style = {},
  fill = "#000",
  width = "100%",
  className = "",
  viewBox = "0 0 33 54"
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
      d="M 6 50.5 L 6 50.5 c -1.65 0 -3 -1.35 -3 -3 v -8 c 0 -1.65 1.35 -3 3 -3 l 0 0 c 1.65 0 3 1.35 3 3 v 8 C 9 49.15 7.65 50.5 6 50.5 Z M 30 47.5 v -8 c 0 -1.65 -1.35 -3 -3 -3 l 0 0 c -1.65 0 -3 1.35 -3 3 v 8 c 0 1.65 1.35 3 3 3 l 0 0 C 28.65 50.5 30 49.15 30 47.5 Z M 32.5 38 c 0 -9.19 -7.34 -17.25 -16 -17.25 S 0.5 28.81 0.5 38 v 10 H 2 V 38 c 0 -8.39 6.64 -15.75 14.5 -15.75 S 31 29.61 31 38 v 10 h 1.5 V 38 Z"
    />
  </svg>
);

export default SVG;