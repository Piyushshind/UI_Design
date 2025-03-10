import React from "react";



export const BrowserControls = () => (
  <svg
    width="133"
    height="22"
    viewBox="0 0 133 22"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M76 3.5H61V18.5H76V3.5ZM70.6429 5.64286H63.1429V16.3571H70.6429V5.64286Z"
      fill="#5F6368"
    />
    <circle cx="103" cy="11" r="11" fill="#7E7E7E" />
    <circle cx="131.5" cy="6" r="1.5" fill="#5F6368" />
    <circle cx="131.5" cy="11" r="1.5" fill="#5F6368" />
    <circle cx="131.5" cy="16" r="1.5" fill="#5F6368" />
  </svg>
);

export const FrameBorder = () => (
  <svg
    width="802"
    height="460"
    viewBox="0 0 802 460"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <rect width="800" height="460" fill="url(#paint0_linear_11_600)" />
    <path
      d="M760 458H784C792.837 458 800 450.837 800 442V418"
      stroke="#2181DA"
      strokeWidth="3"
    />
    <path d="M800 41V418" stroke="#2181DA" strokeWidth="0.6" />
    <path
      d="M760 2H784C792.837 2 800 9.16344 800 18V42"
      stroke="#2181DA"
      strokeWidth="3"
    />
    <path d="M42 2H759" stroke="#2181DA" strokeWidth="0.6" />
    <path d="M35 458H752" stroke="#2181DA" strokeWidth="0.6" />
    <path
      d="M42 458H18C9.16344 458 2 450.837 2 442V418"
      stroke="#2181DA"
      strokeWidth="3"
    />
    <path d="M2 41V418" stroke="#2181DA" strokeWidth="0.6" />
    <path
      d="M42 2H18C9.16344 2 2 9.16344 2 18V42"
      stroke="#2181DA"
      strokeWidth="3"
    />
    <defs>
      <linearGradient
        id="paint0_linear_11_600"
        x1="400"
        y1="-129"
        x2="400"
        y2="460"
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#F0F0F1" />
        <stop offset="1" stopColor="#FDFDFD" />
      </linearGradient>
    </defs>
  </svg>
);

export const RecordButtonSvg = () => (
  <svg
    width="266"
    height="68"
    viewBox="0 0 266 68"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <g filter="url(#filter0_d_11_637)">
      <rect
        x="8"
        y="4"
        width="250"
        height="52"
        rx="26"
        fill="url(#paint0_linear_11_637)"
        shapeRendering="crispEdges"
      />
      <path
        d="M59 38C58.45 38 57.9792 37.8042 57.5875 37.4125C57.1958 37.0208 57 36.55 57 36V24C57 23.45 57.1958 22.9792 57.5875 22.5875C57.9792 22.1958 58.45 22 59 22H71C71.55 22 72.0208 22.1958 72.4125 22.5875C72.8042 22.9792 73 23.45 73 24V28.5L77 24.5V35.5L73 31.5V36C73 36.55 72.8042 37.0208 72.4125 37.4125C72.0208 37.8042 71.55 38 71 38H59ZM59 36H71V24H59V36Z"
        fill="white"
      />
      <text
        fill="white"
        fontFamily="Plus Jakarta Sans"
        fontSize="16"
        fontWeight="600"
      >
        <tspan x="89" y="36.528">
          Start Recording
        </tspan>
      </text>
    </g>
    <defs>
      <filter
        id="filter0_d_11_637"
        x="0"
        y="0"
        width="266"
        height="68"
        filterUnits="userSpaceOnUse"
        colorInterpolationFilters="sRGB"
      >
        <feFlood floodOpacity="0" result="BackgroundImageFix" />
        <feColorMatrix
          in="SourceAlpha"
          type="matrix"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
          result="hardAlpha"
        />
        <feOffset dy="4" />
        <feGaussianBlur stdDeviation="4" />
        <feComposite in2="hardAlpha" operator="out" />
        <feColorMatrix
          type="matrix"
          values="0 0 0 0 0.439216 0 0 0 0 0.501961 0 0 0 0 0.564706 0 0 0 0.5 0"
        />
        <feBlend
          mode="normal"
          in2="BackgroundImageFix"
          result="effect1_dropShadow_11_637"
        />
        <feBlend
          mode="normal"
          in="SourceGraphic"
          in2="effect1_dropShadow_11_637"
          result="shape"
        />
      </filter>
      <linearGradient
        id="paint0_linear_11_637"
        x1="8"
        y1="30"
        x2="258"
        y2="30"
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#55ACFF" />
        <stop offset="1" stopColor="#2181DA" />
      </linearGradient>
    </defs>
  </svg>
);
