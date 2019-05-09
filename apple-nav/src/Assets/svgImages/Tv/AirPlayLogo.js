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
      d="M15.21,41.78a.58.58,0,0,0-.87,0l-7.4,8.38a.5.5,0,0,0,.37.82H22.24a.5.5,0,0,0,.37-.82Z"
    />
    <path
      fill={fill}
      d="M26.79,27A2.21,2.21,0,0,1,29,29V43a2.17,2.17,0,0,1-2.2,2H20.71l.88.95,5.21,0A3.14,3.14,0,0,0,30,43V29a3.18,3.18,0,0,0-3.19-3H2.8A2.83,2.83,0,0,0,0,29V43a2.83,2.83,0,0,0,2.78,3H7.56l1-1H2.78A1.83,1.83,0,0,1,1,43V29a1.84,1.84,0,0,1,1.79-2h24"
    />
  </svg>
);

export default SVG;