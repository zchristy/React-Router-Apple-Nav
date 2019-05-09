// d: path="";
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
      d="M 29 27 H 4 c -2.2 0 -4 1.8 -4 4 v 16 c 0 2.2 1.8 4 4 4 h 25 c 2.2 0 4 -1.8 4 -4 V 31 C 33 28.8 31.2 27 29 27 Z M 16.45 34.14 c 0.15 -0.33 0.35 -0.63 0.59 -0.9 c 0.25 -0.27 0.53 -0.49 0.86 -0.66 c 0.33 -0.17 0.67 -0.26 1.03 -0.28 c 0.01 0.04 0.01 0.09 0.01 0.13 c 0 0.05 0 0.09 0 0.13 c 0 0.35 -0.07 0.7 -0.22 1.04 c -0.14 0.34 -0.33 0.65 -0.57 0.92 c -0.24 0.27 -0.51 0.49 -0.81 0.65 c -0.3 0.16 -0.61 0.24 -0.92 0.24 c -0.13 0 -0.19 -0.02 -0.2 -0.07 c 0 -0.04 -0.01 -0.11 -0.01 -0.2 C 16.22 34.8 16.3 34.47 16.45 34.14 Z M 21.33 43.16 c -0.16 0.32 -0.33 0.61 -0.51 0.88 c -0.18 0.27 -0.35 0.51 -0.51 0.71 c -0.17 0.2 -0.3 0.35 -0.41 0.45 c -0.18 0.16 -0.37 0.29 -0.56 0.38 c -0.19 0.09 -0.39 0.14 -0.6 0.14 c -0.13 0 -0.3 -0.03 -0.49 -0.08 c -0.19 -0.05 -0.38 -0.11 -0.59 -0.18 c -0.2 -0.07 -0.4 -0.13 -0.61 -0.18 s -0.38 -0.08 -0.55 -0.08 c -0.18 0 -0.38 0.03 -0.59 0.09 c -0.21 0.06 -0.42 0.12 -0.63 0.19 c -0.21 0.07 -0.41 0.13 -0.59 0.18 c -0.18 0.05 -0.33 0.08 -0.44 0.08 c -0.16 0 -0.32 -0.03 -0.47 -0.08 c -0.15 -0.05 -0.31 -0.15 -0.48 -0.28 c -0.17 -0.13 -0.34 -0.31 -0.53 -0.53 c -0.18 -0.22 -0.39 -0.49 -0.61 -0.82 c -0.21 -0.31 -0.4 -0.64 -0.57 -1 c -0.18 -0.36 -0.33 -0.74 -0.45 -1.13 c -0.13 -0.39 -0.22 -0.78 -0.29 -1.18 c -0.07 -0.4 -0.1 -0.78 -0.1 -1.15 c 0 -0.58 0.09 -1.12 0.26 -1.61 c 0.17 -0.49 0.41 -0.91 0.71 -1.27 c 0.31 -0.36 0.66 -0.64 1.07 -0.84 c 0.4 -0.2 0.84 -0.3 1.32 -0.3 c 0.35 0 0.76 0.1 1.24 0.3 c 0.48 0.2 0.8 0.3 0.98 0.3 c 0.06 0 0.18 -0.03 0.35 -0.09 c 0.17 -0.06 0.42 -0.15 0.74 -0.26 c 0.31 -0.11 0.55 -0.18 0.74 -0.22 s 0.38 -0.06 0.58 -0.06 c 0.52 0 1.02 0.12 1.5 0.37 c 0.48 0.25 0.85 0.57 1.13 0.98 c -0.51 0.31 -0.88 0.67 -1.11 1.09 c -0.23 0.42 -0.34 0.91 -0.34 1.48 c 0 0.59 0.16 1.13 0.48 1.62 c 0.32 0.49 0.76 0.86 1.33 1.11 C 21.63 42.52 21.49 42.85 21.33 43.16 Z"
    />
  </svg>
);

export default SVG;