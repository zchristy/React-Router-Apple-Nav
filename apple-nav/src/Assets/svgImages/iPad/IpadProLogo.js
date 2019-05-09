import React from "react";

const SVG = ({
  style = {},
  fill = "#000",
  width = "100%",
  className = "",
  viewBox = "0 0 41 54"
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
  
    <defs>
      <clipPath id="clipPath">
        <polygon
          fill="none"
          clipRule="evenodd"
          points="-12.98 51.42 9.98 51.42 10.02 6.92 38.26 6.92 38.26 -15 -12.98 -15 -12.98 51.42" />
      </clipPath>
    </defs>
    <path
      fill={fill}
      fillRule="evenodd"
      d="M 39.69 8 H 12.36 A 1.51 1.51 0 0 0 11 9.51 V 49.68 A 1.34 1.34 0 0 0 12.36 51 H 39.69 A 1.3 1.3 0 0 0 41 49.68 V 9.51 A 1.47 1.47 0 0 0 39.69 8 Z M 39 48 a 1 1 0 0 1 -1 1 H 14 a 1 1 0 0 1 -1 -1 V 11 a 1 1 0 0 1 1 -1 H 38 a 1 1 0 0 1 1 1 Z"
    />
    <path
      fill={fill}
      clipPath={`url(#clipPath)`}
      d="M 34 8 V 4.51 A 1.47 1.47 0 0 0 32.69 3 H 1.36 A 1.51 1.51 0 0 0 0 4.51 V 49.68 A 1.34 1.34 0 0 0 1.36 51 H 10 m 0 -2 H 3 a 1 1 0 0 1 -1 -1 V 6 A 1 1 0 0 1 3 5 H 31 a 1 1 0 0 1 1 1 V 8"
    />
  </svg>
);

export default SVG;