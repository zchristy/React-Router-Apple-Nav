import React from "react";

const SVG = ({
  style = {},
  fill = "#000",
  width = "100%",
  className = "",
  viewBox = "0 0 46 54"
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
      d="M 42 49 V 28.5 c 0 -0.9585 -0.5225 -1.5 -1.5 -1.5 h -35 C 4.522 27 4 27.5044 4 28.5 V 49 H 0 c 0.0527 0.0923 0.1274 0.3232 0.2114 0.3232 c 0 0 2.0713 1.248 4.6392 1.4219 C 7.417 50.9189 10.9946 51.0122 11 51 c 0.002 -0.0029 12 0 12 0 h 11 c 0 0 4.6382 -0.0835 7.2051 -0.2549 c 2.5684 -0.1714 4.6094 -1.4219 4.6094 -1.4219 c 0.0845 0 0.1328 -0.231 0.1855 -0.3232 H 42 Z M 6 29 h 34 v 20 H 6 V 29 Z"
    />
  </svg>
);

export default SVG;