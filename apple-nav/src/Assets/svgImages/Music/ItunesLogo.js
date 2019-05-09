// d: path="";
import React from "react";

const SVG = ({
  style = {},
  fill = "#000",
  width = "100%",
  className = "",
  viewBox = "0 0 28 54"
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
      d="M 22 23 H 6 c -3.3 0 -6 2.7 -6 6 v 16 c 0 3.3 2.7 6 6 6 h 16 c 3.3 0 6 -2.7 6 -6 V 29 C 28 25.7 25.3 23 22 23 Z M 23.4 34.8 c 0 0.1 0 0.1 -0.1 0.2 c 0 0 0 0 0 0 c -0.1 0.1 -0.1 0.2 -0.2 0.2 c -0.2 0.2 -0.5 0.4 -0.7 0.5 L 18 38.9 l 1.7 5.3 c 0.1 0.3 0.2 0.6 0.2 0.8 c 0 0.1 0 0.2 0 0.3 c 0 0 0 0 0 0 c 0 0.1 0 0.1 0 0.2 c 0 0 -0.1 0.1 -0.1 0.1 c 0 0 -0.1 0 -0.1 0 s -0.1 0 -0.2 0 c 0 0 0 0 0 0 c -0.1 0 -0.2 -0.1 -0.3 -0.1 c -0.2 -0.2 -0.5 -0.3 -0.7 -0.5 L 14 41.8 l 0 0 l 0 0 l -4.5 3.2 c -0.2 0.2 -0.5 0.3 -0.7 0.5 c -0.1 0 -0.2 0.1 -0.3 0.1 c 0 0 0 0 0 0 c -0.1 0 -0.1 0 -0.2 0 c -0.1 0 -0.1 0 -0.1 0 s -0.1 -0.1 -0.1 -0.1 c 0 0 0 -0.1 0 -0.2 c 0 0 0 0 0 0 c 0 -0.1 0 -0.2 0 -0.3 c 0.1 -0.3 0.2 -0.6 0.2 -0.8 l 1.7 -5.2 l -4.5 -3.2 c -0.2 -0.2 -0.5 -0.3 -0.7 -0.5 C 4.8 35.1 4.7 35 4.7 35 c 0 0 0 0 0 0 c 0 -0.1 -0.1 -0.1 -0.1 -0.2 c 0 -0.1 0 -0.1 0 -0.2 c 0 0 0.1 -0.1 0.1 -0.1 c 0.1 0 0.1 -0.1 0.2 -0.1 c 0 0 0 0 0 0 c 0.1 0 0.2 0 0.3 0 c 0.3 0 0.6 0 0.9 0 h 5.5 l 1.7 -5.2 c 0.1 -0.3 0.2 -0.5 0.3 -0.8 c 0 -0.1 0.1 -0.2 0.1 -0.3 c 0 0 0 0 0 0 c 0 -0.1 0.1 -0.1 0.1 -0.1 c 0.1 0 0.1 0 0.1 0 s 0.1 0 0.1 0 c 0.1 0 0.1 0.1 0.1 0.1 c 0 0 0 0 0 0 c 0.1 0.1 0.1 0.2 0.1 0.3 c 0.1 0.3 0.2 0.5 0.3 0.8 l 1.7 5.2 H 22 c 0.3 0 0.6 0 0.9 0 c 0.1 0 0.2 0 0.3 0 c 0 0 0 0 0 0 c 0.1 0 0.1 0 0.2 0.1 c 0 0 0.1 0.1 0.1 0.1 C 23.4 34.6 23.4 34.7 23.4 34.8 C 23.4 34.7 23.5 34.7 23.4 34.8 Z"
    />
  </svg>
);

export default SVG;