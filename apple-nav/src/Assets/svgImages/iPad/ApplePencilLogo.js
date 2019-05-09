import React from "react";

const SVG = ({
  style = {},
  fill = "#000",
  width = "100%",
  className = "",
  viewBox = "0 0 2.5 54"
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
      d="M 1.27 3.06 h 0 A 1.23 1.23 0 0 0 0 4.29 V 45.56 H 0 a 12.39 12.39 0 0 0 0.21 1.49 c 0.12 0.58 0.37 1.78 0.37 1.78 h 0 l 0.42 2 a 0.25 0.25 0 0 0 0.49 0 l 0.42 -2 h 0 s 0.25 -1.2 0.37 -1.78 a 12.59 12.59 0 0 0 0.21 -1.5 h 0 V 4.29 A 1.23 1.23 0 0 0 1.27 3.06 Z"
    />
  </svg>
);

export default SVG;