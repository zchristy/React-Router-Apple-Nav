import React from "react";

const SVG = ({
  style = {},
  fill = "#000",
  width = "100%",
  className = "",
  viewBox = "0 0 30 54"
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
      d="M 28.69 8 H 1.36 A 1.51 1.51 0 0 0 0 9.51 V 49.68 A 1.34 1.34 0 0 0 1.36 51 H 28.69 A 1.3 1.3 0 0 0 30 49.68 V 9.51 A 1.47 1.47 0 0 0 28.69 8 Z M 15 9.42 a 0.66 0.66 0 1 1 -0.66 0.66 A 0.66 0.66 0 0 1 15 9.42 Z m 0 40.53 a 1.07 1.07 0 1 1 1.07 -1.07 A 1.07 1.07 0 0 1 15 49.94 Z M 28 47 H 2 V 12 H 28 Z"
    />
  </svg>
);

export default SVG;