import React from "react";

const SVG = ({
  style = {},
  fill = "#000",
  width = "100%",
  className = "",
  viewBox = "0 -2 16 44"
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
      d="M 15.27 28.29 l -4.06 -4.06 a 6.113 6.113 0 0 0 1.35 -3.83 c 0 -3.39 -2.76 -6.15 -6.15 -6.15 c -3.39 0 -6.15 2.76 -6.15 6.15 s 2.76 6.15 6.15 6.15 c 1.43 0 2.75 -0.5 3.8 -1.33 l 4.06 4.06 l 1 -0.99 Z M 6.4 25.33 a 4.93 4.93 0 0 1 -4.92 -4.92 c 0 -2.71 2.2 -4.92 4.92 -4.92 s 4.92 2.21 4.92 4.92 c 0.01 2.71 -2.2 4.92 -4.92 4.92 Z"
    />
  </svg>
);

export default SVG;
