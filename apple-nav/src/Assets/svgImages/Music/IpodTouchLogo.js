// d: path="";
import React from "react";

const SVG = ({
  style = {},
  fill = "#000",
  width = "100%",
  className = "",
  viewBox = "0 0 23 54"
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
      d="M 17.06 16 H 6 a 2.82 2.82 0 0 0 -3 2.93 v 29.14 A 2.82 2.82 0 0 0 6 51 h 11.06 A 2.81 2.81 0 0 0 20 48.07 V 18.93 A 2.8 2.8 0 0 0 17.06 16 Z m -5.54 33 a 1 1 0 1 1 1 -1 a 1 1 0 0 1 -1 1 Z M 19 46 H 4 V 21 h 15 Z m -7 -27.49 a 0.5 0.5 0 1 1 -0.5 -0.5 a 0.5 0.5 0 0 1 0.5 0.5 Z"
    />
  </svg>
);

export default SVG;