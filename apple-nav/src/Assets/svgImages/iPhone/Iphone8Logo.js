import React from "react";

const SVG = ({
  style = {},
  fill = "#000",
  width = "100%",
  className = "",
  viewBox = "0 0 37 54"
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
      d="M 14 48 l 0 -1 H 1 V 17 H 14 V 13 H 2.87 A 2.89 2.89 0 0 0 0 15.88 V 48 a 3 3 0 0 0 2.87 3 H 15.64 A 4.08 4.08 0 0 1 14 48 Z M 8 15 h 3 v 0.5 H 8 Z M 9.5 50.5 A 1.5 1.5 0 1 1 11 49 A 1.5 1.5 0 0 1 9.5 50.5 Z M 33.65 6 H 18.33 A 3.34 3.34 0 0 0 15 9.35 V 47.63 A 3.36 3.36 0 0 0 18.33 51 H 33.65 A 3.37 3.37 0 0 0 37 47.63 V 9.35 A 3.36 3.36 0 0 0 33.65 6 Z M 24.5 8.5 h 3 V 9 h -3 Z M 26 50.25 a 1.75 1.75 0 1 1 1.75 -1.75 A 1.75 1.75 0 0 1 26 50.25 Z M 36 46 H 16 V 11 H 36 Z M 26 49.5 a 1 1 0 1 1 1 -1 A 1 1 0 0 1 26 49.5 Z m -16.5 0.38 a 0.88 0.88 0 1 1 0.88 -0.88 A 0.88 0.88 0 0 1 9.5 49.88 Z"
    />
  </svg>
);

export default SVG;
