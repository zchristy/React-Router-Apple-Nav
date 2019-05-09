import React from "react";

const SVG = ({
  style = {},
  fill = "#000",
  width = "100%",
  className = "",
  viewBox = "0 0 47.92 54"
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
      d="M12.23,28H35.44L36,28c6.12.18,10.87,4.63,10.87,10.54,0,6.19-5.29,11.63-11.29,11.63a7.19,7.19,0,0,1-5.32-1.73,8.47,8.47,0,0,0-5.88-2,10.44,10.44,0,0,0-6.28,2,9.63,9.63,0,0,1-6,1.81c-6,0-11.24-5.45-11.24-11.64C.91,32.55,6,28,12.23,28m0-1C5.45,27-.08,32-.08,38.55S5.41,51.16,12.19,51.16c6.62,0,6.26-3.7,12.24-3.75s4.6,3.75,11.22,3.75c6.78,0,12.27-6.06,12.27-12.62S42.67,27.19,36.08,27H12.23Z"
    />
    <polygon 
    fill={fill}
    points="15.91 39.99 12.92 39.99 12.92 42.99 10.92 42.99 10.92 39.99 7.92 39.99 7.92 38.02 10.92 38.02 10.92 35 12.92 35 12.92 38.02 15.91 38.02 15.91 39.99"/>
    <circle 
    fill={fill}
    cx="32.92" cy="38.89" r="1.5"/>
    <circle 
    fill={fill}
    cx="36.42" cy="42.39" r="1.5"/>
    <circle 
    fill={fill}
    cx="36.42" cy="35.39" r="1.5"/>
    <circle 
    fill={fill}
    cx="39.92" cy="38.89" r="1.5"/>
  </svg>
);

export default SVG;