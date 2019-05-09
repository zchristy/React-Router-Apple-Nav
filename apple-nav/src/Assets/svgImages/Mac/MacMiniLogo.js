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
      d="M 0 44 v 6 a 0.93 0.93 0 0 0 1 1 h 26 a 0.93 0.93 0 0 0 1 -1 v -6 Z m 23.5 5.45 a 0.93 0.93 0 1 1 1 -0.93 a 0.95 0.95 0 0 1 -1 0.93 Z"
    />
  </svg>
);

export default SVG;