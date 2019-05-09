import React from "react";

const SVG = ({
  style = {},
  fill = "#000",
  width = "100%",
  className = "",
  viewBox = "0 0 33 54"
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
      d="M 30 51 h 1.5 A 1.45 1.45 0 0 0 33 49.5 V 4.5 A 1.45 1.45 0 0 0 31.5 3 H 30 V 8 h 1 V 46 H 30 Z m -1 0.51 v -49 A 1.72 1.72 0 0 0 27.5 1 c -0.5 0 -6 1.5 -6 1.5 A 2.47 2.47 0 0 0 20 4.62 V 49.38 a 2.47 2.47 0 0 0 1.5 2.12 S 27 53 27.5 53 A 1.61 1.61 0 0 0 29 51.51 Z M 0 4.7 V 49.3 A 1.71 1.71 0 0 0 1.72 51 H 10 a 2.63 2.63 0 0 1 -1 -1.7 V 4.7 A 2.62 2.62 0 0 1 10 3 H 1.72 A 1.71 1.71 0 0 0 0 4.7 Z m 10 0 V 49.3 A 1.71 1.71 0 0 0 11.72 51 H 20 a 2.63 2.63 0 0 1 -1 -1.7 V 4.7 A 2.62 2.62 0 0 1 20 3 H 11.72 A 1.71 1.71 0 0 0 10 4.7 Z"
    />
  </svg>
);

export default SVG;