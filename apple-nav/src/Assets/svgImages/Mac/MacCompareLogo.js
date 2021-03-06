    import React from "react";

const SVG = ({
  style = {},
  fill = "#000",
  width = "100%",
  className = "",
  viewBox = "0 0 70 54"
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
      d="M 42 49 V 28.5 c 0 -0.96 -0.52 -1.5 -1.5 -1.5 h -35 C 4.52 27 4 27.5 4 28.5 V 49 H 0 c 0.05 0.09 0.13 0.32 0.21 0.32 c 0 0 2.07 1.25 4.64 1.42 C 7.42 50.92 9.99 51.01 10 51 c 0 0 13 0 13 0 l 13 0 c 0 0 2.36 -0.08 4.93 -0.25 c 2.57 -0.17 4.64 -1.42 4.64 -1.42 c 0.08 0 0.38 -0.23 0.44 -0.32 H 42 Z M 6 29 h 34 v 20 H 6 V 29 Z M 52.95 51 L 52.95 51 c 0.02 -0.01 0.03 -0.01 0.04 -0.02 c 0.14 -0.04 0.24 -0.17 0.24 -0.32 c 0 -0.19 -0.15 -0.34 -0.35 -0.34 c -0.03 0 -0.04 0 -0.07 0 c -1.36 0.09 -2.63 -0.82 -2.93 -2.19 L 49 44 h 19.47 c 0.7 0 1.53 -0.83 1.53 -1.53 V 12.53 c 0 -0.7 -0.83 -1.53 -1.53 -1.53 H 23.53 c -0.7 0 -1.53 0.83 -1.53 1.53 L 22.02 26 L 24 26 V 13 h 44 v 25 H 43 v 6 v 4 h 4 v 1 c -0.04 1.54 -3 2 -3 2 H 52.95 Z M 46.95 41.83 c -0.03 0.06 -0.06 0.12 -0.09 0.17 c -0.03 0.05 -0.07 0.1 -0.1 0.14 c -0.03 0.04 -0.06 0.07 -0.08 0.08 c -0.04 0.03 -0.07 0.05 -0.11 0.07 c -0.03 0.02 -0.07 0.03 -0.11 0.03 c -0.02 0 -0.06 -0.01 -0.09 -0.02 c -0.04 -0.01 -0.07 -0.02 -0.11 -0.03 c -0.04 -0.01 -0.08 -0.02 -0.11 -0.04 c -0.04 -0.01 -0.07 -0.01 -0.1 -0.01 c -0.03 0 -0.07 0 -0.11 0.02 c -0.04 0.01 -0.08 0.02 -0.12 0.04 c -0.04 0.01 -0.08 0.02 -0.11 0.04 c -0.03 0.01 -0.06 0.02 -0.08 0.02 c -0.03 0 -0.06 -0.01 -0.09 -0.02 c -0.03 -0.01 -0.06 -0.03 -0.09 -0.05 c -0.03 -0.02 -0.06 -0.06 -0.1 -0.1 c -0.04 -0.04 -0.07 -0.09 -0.12 -0.15 c -0.04 -0.06 -0.07 -0.12 -0.11 -0.19 c -0.03 -0.07 -0.06 -0.14 -0.08 -0.22 c -0.02 -0.07 -0.04 -0.15 -0.05 -0.22 c -0.01 -0.08 -0.02 -0.15 -0.02 -0.22 c 0 -0.11 0.02 -0.21 0.05 -0.3 c 0.03 -0.09 0.08 -0.17 0.13 -0.24 c 0.06 -0.07 0.12 -0.12 0.2 -0.16 c 0.08 -0.04 0.16 -0.06 0.25 -0.06 c 0.07 0 0.14 0.02 0.23 0.06 c 0.09 0.04 0.15 0.06 0.18 0.06 c 0.01 0 0.03 -0.01 0.06 -0.02 c 0.03 -0.01 0.08 -0.03 0.14 -0.05 c 0.06 -0.02 0.1 -0.03 0.14 -0.04 c 0.04 -0.01 0.07 -0.01 0.11 -0.01 c 0.1 0 0.19 0.02 0.28 0.07 c 0.09 0.05 0.16 0.11 0.21 0.19 c -0.09 0.06 -0.16 0.13 -0.21 0.21 c -0.04 0.08 -0.06 0.17 -0.06 0.28 c 0 0.11 0.03 0.21 0.09 0.31 c 0.06 0.09 0.14 0.16 0.25 0.21 C 47 41.7 46.97 41.77 46.95 41.83 Z M 46 40.31 c 0 -0.06 0.01 -0.12 0.04 -0.19 c 0.03 -0.06 0.06 -0.12 0.11 -0.17 c 0.04 -0.05 0.1 -0.09 0.16 -0.12 c 0.06 -0.03 0.13 -0.05 0.19 -0.05 c 0 0.01 0 0.02 0 0.03 v 0.03 c 0 0.06 -0.01 0.13 -0.04 0.2 c -0.03 0.06 -0.06 0.12 -0.11 0.17 c -0.04 0.05 -0.09 0.09 -0.15 0.12 c -0.06 0.03 -0.11 0.05 -0.17 0.05 c -0.02 0 -0.04 0 -0.04 -0.01 C 46 40.34 46 40.32 46 40.31 Z"
    />
  </svg>
);

export default SVG;