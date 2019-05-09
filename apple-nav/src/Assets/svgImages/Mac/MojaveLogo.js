    import React from "react";

const SVG = ({
  style = {},
  fill = "#000",
  width = "100%",
  className = "",
  viewBox = "0 0 42 54"
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
      d="M 23.091 23.018 v -0.342 l -1.063 0.073 c -0.301 0.019 -0.527 0.083 -0.679 0.191 c -0.152 0.109 -0.228 0.26 -0.228 0.453 c 0 0.188 0.075 0.338 0.226 0.449 c 0.15 0.112 0.352 0.167 0.604 0.167 c 0.161 0 0.312 -0.025 0.451 -0.074 s 0.261 -0.118 0.363 -0.206 c 0.102 -0.087 0.182 -0.191 0.239 -0.312 C 23.062 23.296 23.091 23.163 23.091 23.018 Z M 21 9.25 C 9.421 9.25 0.25 18.421 0.25 30 c 0 11.58 9.171 20.75 20.75 20.75 c 11.579 0 20.75 -9.17 20.75 -20.75 C 41.75 18.421 32.58 9.25 21 9.25 Z M 25.028 21.549 c 0.098 -0.275 0.236 -0.511 0.415 -0.707 c 0.179 -0.196 0.394 -0.347 0.646 -0.453 c 0.252 -0.106 0.533 -0.159 0.842 -0.159 c 0.279 0 0.531 0.042 0.755 0.125 c 0.225 0.083 0.417 0.195 0.578 0.336 c 0.161 0.141 0.289 0.305 0.383 0.493 c 0.094 0.188 0.15 0.387 0.169 0.596 h -0.833 c -0.021 -0.115 -0.059 -0.223 -0.113 -0.322 s -0.125 -0.185 -0.213 -0.258 c -0.089 -0.073 -0.193 -0.13 -0.312 -0.171 c -0.12 -0.042 -0.254 -0.062 -0.405 -0.062 c -0.177 0 -0.338 0.036 -0.481 0.107 c -0.144 0.071 -0.267 0.172 -0.369 0.302 c -0.102 0.13 -0.181 0.289 -0.237 0.475 c -0.057 0.187 -0.085 0.394 -0.085 0.622 c 0 0.236 0.028 0.448 0.085 0.634 c 0.056 0.187 0.136 0.344 0.24 0.473 c 0.103 0.129 0.228 0.228 0.373 0.296 c 0.145 0.068 0.305 0.103 0.479 0.103 c 0.285 0 0.517 -0.067 0.697 -0.201 c 0.18 -0.134 0.296 -0.33 0.35 -0.588 h 0.834 c -0.024 0.228 -0.087 0.436 -0.189 0.624 s -0.234 0.348 -0.396 0.481 c -0.163 0.133 -0.354 0.236 -0.574 0.308 s -0.462 0.109 -0.725 0.109 c -0.312 0 -0.593 -0.052 -0.846 -0.155 c -0.252 -0.103 -0.469 -0.252 -0.649 -0.445 c -0.18 -0.193 -0.319 -0.428 -0.417 -0.705 c -0.098 -0.277 -0.147 -0.588 -0.147 -0.935 C 24.881 22.133 24.93 21.825 25.028 21.549 Z M 13.175 20.287 h 0.834 v 0.741 h 0.016 c 0.051 -0.123 0.118 -0.234 0.2 -0.33 c 0.082 -0.097 0.176 -0.179 0.284 -0.248 c 0.107 -0.069 0.226 -0.121 0.354 -0.157 c 0.129 -0.036 0.265 -0.054 0.407 -0.054 c 0.306 0 0.565 0.073 0.775 0.219 c 0.211 0.146 0.361 0.356 0.449 0.63 h 0.021 c 0.056 -0.132 0.13 -0.25 0.221 -0.354 s 0.196 -0.194 0.314 -0.268 c 0.118 -0.074 0.248 -0.13 0.389 -0.169 c 0.141 -0.039 0.289 -0.058 0.445 -0.058 c 0.215 0 0.41 0.034 0.586 0.103 c 0.176 0.069 0.326 0.165 0.451 0.29 c 0.125 0.125 0.221 0.277 0.288 0.455 c 0.067 0.178 0.101 0.376 0.101 0.594 v 2.981 h -0.87 V 21.89 c 0 -0.287 -0.074 -0.51 -0.222 -0.667 c -0.147 -0.157 -0.358 -0.236 -0.632 -0.236 c -0.134 0 -0.257 0.024 -0.369 0.071 c -0.111 0.047 -0.208 0.113 -0.288 0.198 c -0.081 0.084 -0.144 0.186 -0.189 0.304 c -0.046 0.118 -0.069 0.247 -0.069 0.387 v 2.715 h -0.858 v -2.844 c 0 -0.126 -0.02 -0.24 -0.059 -0.342 c -0.039 -0.102 -0.094 -0.189 -0.167 -0.262 c -0.072 -0.073 -0.161 -0.128 -0.264 -0.167 c -0.104 -0.039 -0.22 -0.059 -0.349 -0.059 c -0.134 0 -0.258 0.025 -0.373 0.075 c -0.114 0.05 -0.212 0.119 -0.294 0.207 c -0.082 0.089 -0.146 0.193 -0.191 0.314 C 14.072 21.704 14 21.836 14 21.978 v 2.683 h -0.825 V 20.287 Z M 15.068 41.226 c -3.825 0 -6.224 -2.658 -6.224 -6.9 c 0 -4.242 2.399 -6.909 6.224 -6.909 s 6.215 2.667 6.215 6.909 C 21.283 38.567 18.893 41.226 15.068 41.226 Z M 22.15 24.651 c -0.141 0.036 -0.285 0.054 -0.433 0.054 c -0.218 0 -0.417 -0.031 -0.598 -0.093 c -0.182 -0.062 -0.337 -0.149 -0.467 -0.262 c -0.13 -0.113 -0.232 -0.249 -0.304 -0.409 c -0.073 -0.16 -0.109 -0.338 -0.109 -0.534 c 0 -0.384 0.143 -0.684 0.429 -0.9 c 0.286 -0.216 0.7 -0.342 1.243 -0.377 l 1.18 -0.068 v -0.338 c 0 -0.252 -0.08 -0.445 -0.24 -0.576 c -0.16 -0.131 -0.386 -0.197 -0.679 -0.197 c -0.118 0 -0.229 0.015 -0.331 0.044 c -0.102 0.03 -0.192 0.072 -0.27 0.127 c -0.078 0.055 -0.143 0.121 -0.193 0.198 c -0.051 0.076 -0.086 0.162 -0.105 0.256 h -0.818 c 0.005 -0.193 0.053 -0.372 0.143 -0.536 c 0.09 -0.164 0.212 -0.306 0.367 -0.427 s 0.336 -0.215 0.546 -0.282 s 0.438 -0.101 0.685 -0.101 c 0.266 0 0.507 0.033 0.723 0.101 s 0.401 0.163 0.554 0.288 c 0.153 0.125 0.271 0.275 0.354 0.451 c 0.083 0.176 0.125 0.373 0.125 0.59 v 3.001 h -0.833 v -0.729 h -0.021 c -0.062 0.118 -0.14 0.225 -0.235 0.32 c -0.096 0.095 -0.203 0.177 -0.322 0.244 C 22.421 24.563 22.291 24.615 22.15 24.651 Z M 27.653 41.226 c -2.917 0 -4.9 -1.528 -5.038 -3.927 h 1.899 c 0.148 1.371 1.473 2.279 3.288 2.279 c 1.741 0 2.992 -0.908 2.992 -2.149 c 0 -1.074 -0.76 -1.723 -2.519 -2.167 l -1.714 -0.426 c -2.464 -0.611 -3.584 -1.732 -3.584 -3.575 c 0 -2.269 1.982 -3.844 4.807 -3.844 c 2.76 0 4.686 1.584 4.76 3.862 h -1.88 c -0.13 -1.371 -1.25 -2.214 -2.918 -2.214 c -1.658 0 -2.806 0.852 -2.806 2.084 c 0 0.972 0.722 1.547 2.482 1.991 l 1.445 0.361 c 2.751 0.667 3.881 1.751 3.881 3.696 C 32.747 39.679 30.784 41.226 27.653 41.226 Z M 15.068 29.12 c -2.621 0 -4.26 2.01 -4.26 5.205 c 0 3.186 1.639 5.196 4.26 5.196 c 2.612 0 4.26 -2.01 4.26 -5.196 C 19.329 31.13 17.68 29.12 15.068 29.12 Z"
    />
  </svg>
);

export default SVG;