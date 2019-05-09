import React from "react";

const SVG = ({
  style = {},
  fill = "#000",
  width = "100%",
  className = "",
  viewBox = "0 0 44 54"
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
      d="M 16.139 29.131 c -2.59 0 -4.21 1.986 -4.21 5.143 c 0 3.148 1.62 5.134 4.21 5.134 c 2.581 0 4.21 -1.986 4.21 -5.134 C 20.348 31.117 18.719 29.131 16.139 29.131 Z"
    />
    <path
      fill={fill}
      d="M 18.245 23.479 c 0 0.375 0.325 0.618 0.832 0.618 c 0.651 0 1.136 -0.416 1.136 -0.992 v -0.338 l -1.058 0.066 C 18.558 22.874 18.245 23.096 18.245 23.479 Z"
    />
    <path
      fill={fill}
      d="M 22 9.25 C 10.558 9.25 1.25 18.558 1.25 30 c 0 11.442 9.308 20.75 20.75 20.75 c 11.442 0 20.75 -9.308 20.75 -20.75 C 42.75 18.558 33.442 9.25 22 9.25 Z M 29.074 18.781 h 0.819 v 2.363 h 0.016 c 0.259 -0.506 0.7 -0.766 1.359 -0.766 c 0.947 0 1.511 0.634 1.511 1.602 v 2.742 h -0.823 v -2.59 c 0 -0.646 -0.325 -1.042 -0.964 -1.042 c -0.683 0 -1.095 0.465 -1.095 1.169 v 2.462 h -0.823 V 18.781 Z M 26.5 20.375 c 1.091 0 1.766 0.692 1.845 1.503 h -0.791 c -0.078 -0.457 -0.445 -0.803 -1.046 -0.803 c -0.7 0 -1.174 0.589 -1.174 1.499 c 0 0.939 0.478 1.503 1.182 1.503 c 0.56 0 0.935 -0.276 1.046 -0.782 h 0.791 c -0.103 0.885 -0.824 1.478 -1.845 1.478 c -1.211 0 -2.009 -0.836 -2.009 -2.199 C 24.499 21.244 25.297 20.375 26.5 20.375 Z M 19.299 21.062 c -0.478 0 -0.823 0.247 -0.898 0.626 h -0.774 c 0.025 -0.753 0.737 -1.313 1.688 -1.313 c 1.042 0 1.717 0.548 1.717 1.4 v 2.948 h -0.786 v -0.721 H 20.23 c -0.243 0.469 -0.778 0.766 -1.367 0.766 c -0.856 0 -1.445 -0.511 -1.445 -1.272 c 0 -0.749 0.572 -1.186 1.631 -1.252 l 1.165 -0.07 v -0.338 C 20.213 21.338 19.884 21.062 19.299 21.062 Z M 12.056 20.424 l 0.815 3.426 h 0.017 l 0.922 -3.426 h 0.795 l 0.922 3.426 h 0.021 l 0.811 -3.426 h 0.811 l -1.186 4.299 h -0.848 l -0.922 -3.261 h -0.021 l -0.926 3.261 h -0.84 l -1.19 -4.299 H 12.056 Z M 16.139 41.092 c -3.78 0 -6.15 -2.626 -6.15 -6.818 c 0 -4.191 2.37 -6.827 6.15 -6.827 s 6.141 2.636 6.141 6.827 C 22.279 38.465 19.918 41.092 16.139 41.092 Z M 22.249 23.595 v -2.512 h -0.626 v -0.659 h 0.626 v -1.029 h 0.824 v 1.029 h 0.823 v 0.659 h -0.823 v 2.438 c 0 0.375 0.165 0.552 0.523 0.552 c 0.09 0 0.243 -0.012 0.296 -0.021 v 0.659 c -0.09 0.025 -0.292 0.037 -0.478 0.037 C 22.578 24.748 22.249 24.422 22.249 23.595 Z M 28.574 41.092 c -2.883 0 -4.841 -1.51 -4.978 -3.88 h 1.876 c 0.146 1.354 1.455 2.251 3.249 2.251 c 1.721 0 2.956 -0.897 2.956 -2.123 c 0 -1.061 -0.751 -1.702 -2.489 -2.141 l -1.693 -0.421 c -2.434 -0.604 -3.542 -1.711 -3.542 -3.532 c 0 -2.242 1.958 -3.798 4.75 -3.798 c 2.727 0 4.631 1.565 4.704 3.816 h -1.858 c -0.128 -1.354 -1.236 -2.187 -2.883 -2.187 c -1.638 0 -2.773 0.842 -2.773 2.059 c 0 0.961 0.714 1.528 2.453 1.968 l 1.428 0.357 c 2.718 0.659 3.834 1.73 3.834 3.652 C 33.607 39.564 31.667 41.092 28.574 41.092 Z"
    />
  </svg>
);

export default SVG;