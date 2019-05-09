import React from "react";

const SVG = ({
  style = {},
  fill = "#000",
  width = "100%",
  className = "",
  viewBox = "0 0 52 54"
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
      d="M 47 49 V 25.5 c 0 -0.958 -0.522 -1.5 -1.5 -1.5 h -39 C 5.522 24 5 24.504 5 25.5 V 49 H 0 c 0.053 0.092 0.127 0.323 0.211 0.323 c 0 0 2.071 1.248 4.639 1.422 c 2.566 0.174 7.59 0.264 7.596 0.252 C 12.448 50.994 25.366 51 25.366 51 l 12.969 -0.003 c 0 0 6.023 -0.081 8.59 -0.252 c 2.568 -0.171 4.639 -1.422 4.639 -1.422 c 0.084 0 0.383 -0.231 0.436 -0.323 H 47 Z M 7 26 h 38 v 23 H 7 V 26 Z"
    />
  </svg>
);

export default SVG;