import React from "react";

const SVG = ({
  style = {},
  fill = "#000",
  width = "100%",
  className = "",
  viewBox = "0 0 48 54"
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
      d="M 46.469 11 H 1.531 C 0.831 11 0 11.833 0 12.531 l 0.042 29.938 C 0.042 43.167 0.872 44 1.572 44 H 21 l -0.89 4.119 c -0.302 1.37 -1.563 2.273 -2.927 2.188 c -0.024 0.002 -0.043 0.003 -0.069 0.005 c -0.191 0 -0.346 0.154 -0.346 0.345 c 0 0.153 0.104 0.28 0.243 0.324 c 0.015 0.007 0.028 0.013 0.042 0.015 V 51 H 17.2 h 13.75 v -0.005 c 0.015 -0.002 0.029 -0.008 0.042 -0.015 c 0.141 -0.043 0.244 -0.17 0.244 -0.324 c 0 -0.191 -0.154 -0.345 -0.346 -0.345 c -0.026 -0.001 -0.044 -0.003 -0.069 -0.005 c -1.363 0.085 -2.626 -0.817 -2.928 -2.188 L 27 44 h 19.469 C 47.169 44 48 43.167 48 42.469 V 12.531 C 48 11.833 47.169 11 46.469 11 Z M 24.946 41.829 c -0.03 0.06 -0.061 0.117 -0.093 0.167 c -0.034 0.051 -0.066 0.097 -0.096 0.136 c -0.033 0.039 -0.059 0.066 -0.076 0.085 c -0.035 0.029 -0.07 0.055 -0.107 0.073 c -0.035 0.019 -0.072 0.026 -0.111 0.026 c -0.025 0 -0.055 -0.005 -0.09 -0.016 c -0.036 -0.011 -0.072 -0.022 -0.109 -0.034 c -0.038 -0.012 -0.075 -0.023 -0.112 -0.035 c -0.039 -0.01 -0.072 -0.015 -0.103 -0.015 c -0.033 0 -0.07 0.005 -0.108 0.017 c -0.04 0.011 -0.079 0.023 -0.118 0.036 c -0.04 0.013 -0.077 0.024 -0.109 0.035 c -0.033 0.01 -0.062 0.015 -0.083 0.015 c -0.032 0 -0.061 -0.005 -0.088 -0.015 c -0.029 -0.011 -0.059 -0.029 -0.09 -0.054 c -0.031 -0.025 -0.062 -0.058 -0.096 -0.1 c -0.036 -0.042 -0.074 -0.092 -0.116 -0.155 c -0.04 -0.058 -0.073 -0.121 -0.107 -0.189 c -0.031 -0.07 -0.061 -0.141 -0.083 -0.216 c -0.022 -0.073 -0.041 -0.147 -0.052 -0.223 c -0.013 -0.075 -0.021 -0.147 -0.021 -0.219 c 0 -0.109 0.016 -0.211 0.048 -0.304 c 0.032 -0.092 0.078 -0.174 0.134 -0.242 c 0.057 -0.069 0.123 -0.121 0.198 -0.159 c 0.075 -0.037 0.157 -0.056 0.246 -0.056 c 0.065 0 0.143 0.019 0.231 0.056 c 0.087 0.038 0.148 0.057 0.183 0.057 c 0.012 0 0.034 -0.005 0.064 -0.017 c 0.032 -0.011 0.079 -0.027 0.138 -0.05 c 0.059 -0.02 0.104 -0.034 0.138 -0.042 c 0.035 -0.008 0.071 -0.012 0.107 -0.012 c 0.099 0 0.19 0.023 0.28 0.071 c 0.088 0.046 0.159 0.108 0.21 0.186 c -0.095 0.057 -0.164 0.125 -0.208 0.206 c -0.042 0.079 -0.063 0.173 -0.063 0.28 c 0 0.112 0.029 0.214 0.089 0.307 c 0.059 0.093 0.142 0.164 0.248 0.211 C 25.001 41.704 24.975 41.768 24.946 41.829 Z M 23.995 40.306 c 0 -0.063 0.014 -0.125 0.042 -0.188 c 0.028 -0.062 0.063 -0.121 0.111 -0.173 c 0.044 -0.049 0.098 -0.092 0.16 -0.125 c 0.061 -0.033 0.125 -0.049 0.191 -0.053 c 0.003 0.009 0.004 0.018 0.004 0.025 v 0.027 c 0 0.064 -0.014 0.13 -0.041 0.195 c -0.027 0.065 -0.061 0.123 -0.106 0.174 c -0.044 0.052 -0.094 0.093 -0.151 0.123 c -0.056 0.031 -0.113 0.045 -0.171 0.045 c -0.024 0 -0.036 -0.003 -0.038 -0.014 C 23.995 40.336 23.995 40.324 23.995 40.306 Z M 46 38 H 2 V 13 h 44 V 38 Z"
    />
  </svg>
);

export default SVG;