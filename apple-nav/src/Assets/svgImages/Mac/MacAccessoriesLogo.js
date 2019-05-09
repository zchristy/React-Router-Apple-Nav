import React from "react";

const SVG = ({
  style = {},
  fill = "#000",
  width = "100%",
  className = "",
  viewBox = "0 0 28.98 54"
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
      d="M 14.48 24 C 3.98 24 0 32.18 0 40.02 v 8.24 c 0 0.42 0.34 0.76 0.75 0.76 c 0.42 0 0.73 -0.34 0.73 -0.76 v -8.24 c 0 -7.13 3.5 -14.5 13 -14.5 M 14.48 25.52 c 9.5 0 13 7.37 13 14.5 v 8.21 c 0 0.42 0.31 0.76 0.73 0.76 c 0.42 0 0.75 -0.34 0.75 -0.76 v -8.21 c 0 -7.83 -3.98 -16.02 -14.48 -16.02 M 5.5 38.99 c 1.66 0 3 1.34 3 3 v 7 c 0 1.66 -1.34 3 -3 3 c -1.66 0 -3 -1.34 -3 -3 v -7 C 2.5 40.33 3.84 38.99 5.5 38.99 Z M 23.48 38.99 c 1.66 0 3 1.34 3 3 v 7 c 0 1.66 -1.34 3 -3 3 c -1.66 0 -3 -1.34 -3 -3 v -7 C 20.48 40.33 21.82 38.99 23.48 38.99 Z"
    />
  </svg>
);

export default SVG;