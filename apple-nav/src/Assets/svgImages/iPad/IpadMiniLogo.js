// Smallest
import React from "react";

const SVG = ({
  style = {},
  fill = "#000",
  width = "100%",
  className = "",
  viewBox = "0 0 22 54"
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
      d="M 20.74 20 H 1.27 A 1.3 1.3 0 0 0 0 21.26 V 49.8 A 1.26 1.26 0 0 0 1.27 51 H 20.74 A 1.31 1.31 0 0 0 22 49.74 V 21.26 A 1.3 1.3 0 0 0 20.74 20 Z m -9.79 1.25 a 0.43 0.43 0 1 1 -0.43 0.43 A 0.43 0.43 0 0 1 10.94 21.25 Z M 11 50.5 a 1 1 0 1 1 1 -1 A 1 1 0 0 1 11 50.5 Z M 20 48 H 2 V 23 H 20 Z"
    />
  </svg>
);

export default SVG;