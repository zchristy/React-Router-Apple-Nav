// Smaller
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
      d="M 26.74 11 H 1.26 A 1.24 1.24 0 0 0 0 12.25 v 37.5 A 1.24 1.24 0 0 0 1.26 51 H 26.74 A 1.24 1.24 0 0 0 28 49.75 V 12.25 A 1.24 1.24 0 0 0 26.74 11 Z M 14 12.5 a 0.5 0.5 0 1 1 -0.5 0.5 A 0.5 0.5 0 0 1 14 12.5 Z M 14 50 a 1 1 0 1 1 1 -1 A 1 1 0 0 1 14 50 Z m 12 -3 H 2 V 15 H 26 Z"
    />
  </svg>
);

export default SVG;