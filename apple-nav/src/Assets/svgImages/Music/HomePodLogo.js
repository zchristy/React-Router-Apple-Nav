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
      d="M 21.12 18.43 c 0 0.38 -3.19 0.68 -7.12 0.68 s -7.12 -0.31 -7.12 -0.68 c 0 -0.38 3.19 -0.68 7.12 -0.68 S 21.12 18.06 21.12 18.43 Z M 22.19 18.81 c -0.16 0.46 -1.21 1.15 -8.19 1.15 s -8.03 -0.69 -8.19 -1.15 C 2.52 19.38 0 21.87 0 25.31 v 17.97 c 0 3.45 2.54 6.33 5.84 6.88 c 0.24 0.46 1.52 1.08 8.16 1.08 s 7.92 -0.63 8.16 -1.08 c 3.3 -0.56 5.84 -3.44 5.84 -6.88 V 25.31 C 28 21.87 25.48 19.38 22.19 18.81 Z"
    />
  </svg>
);

export default SVG;