import React from "react";

const SVG = ({
  style = {},
  fill = "#000",
  width = "100",
  className = "",
  viewBox = "0 0 31 54"
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
      d="M 27.63 11 H 14.51 C 12.4 11 11 12.05 11 14.13 v 33.1 A 3.58 3.58 0 0 0 14.51 51 h 13 A 3.58 3.58 0 0 0 31 47.23 V 14.13 h 0 C 31 12.1 29.66 11.06 27.63 11 Z M 16 17.5 a 1.5 1.5 0 1 1 -3 0 v -3 a 1.5 1.5 0 0 1 3 0 Z"
    />
    <path
      fill={fill}
      d="M 9.91 47.24 V 14.13 c 0 -2.54 1.73 -4.13 4.51 -4.13 H 22 V 8.5 C 22 6.21 20.42 5 18.08 5 H 3.93 C 1.56 5 0 6.18 0 8.5 V 46.78 A 4 4 0 0 0 3.93 51 h 7.71 A 4.86 4.86 0 0 1 9.91 47.24 Z M 5 11.5 a 1.5 1.5 0 0 1 -3 0 v -3 a 1.5 1.5 0 0 1 3 0 Z"
    />
  </svg>
);

export default SVG;
