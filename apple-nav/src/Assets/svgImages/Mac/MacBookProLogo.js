import React from "react";

const SVG = ({
  style = {},
  fill = "#000",
  width = "100%",
  className = "",
  viewBox = "0 0 58 54"
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
      d="M 52.987 48 V 20.503 c 0 -0.832 -0.643 -1.49 -1.491 -1.49 H 6.503 c -0.848 0 -1.49 0.658 -1.49 1.49 V 48 H 0 v 1.428 C 0.639 50.462 4.094 51 5.465 51 h 46.696 c 1.372 0 5.2 -0.538 5.839 -1.572 V 48 H 52.987 Z M 7 21 h 44 v 27 H 7 V 21 Z"
    />
  </svg>
);

export default SVG;