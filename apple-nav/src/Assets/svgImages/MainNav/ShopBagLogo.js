import React from "react";

const SVG = ({
  style = {},
  fill = "#000",
  width = "100%",
  className = "",
  viewBox = "0 -2 14 44"
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
      d="M 12.5 15 h -1.81 c -0.28 -1.86 -2.04 -3 -3.69 -3 s -3.42 1.14 -3.69 3 H 1.5 c -0.83 0 -1.5 0.67 -1.5 1.5 v 11 c 0 0.83 0.67 1.5 1.5 1.5 h 11 c 0.83 0 1.5 -0.67 1.5 -1.5 v -11 c 0 -0.83 -0.67 -1.5 -1.5 -1.5 Z M 7 13 c 1.18 0 2.43 0.75 2.7 2 H 4.3 c 0.27 -1.25 1.52 -2 2.7 -2 Z m 6 14.5 c 0 0.28 -0.22 0.5 -0.5 0.5 h -11 c -0.28 0 -0.5 -0.22 -0.5 -0.5 v -11 c 0 -0.28 0.22 -0.5 0.5 -0.5 h 11 c 0.28 0 0.5 0.22 0.5 0.5 v 11 Z"
    />
  </svg>
);

export default SVG;
