
import React from 'react';

const GradientBlur = () => {
  return (
    <div className="absolute inset-0 w-full h-full overflow-hidden -z-10">
      <svg
        className="w-full h-full"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 2100 900"
        fill="none"
        style={{
          width: '926px',
          height: '899px',
          flexShrink: 0,
          position: 'absolute',
          top: '0',
          left: '0',
        }}
      >
        <g filter="url(#filter0_f_1_1021)">
          <path
            d="M262.258 207.72C361.719 -1.01575 563.649 -110.385 823.972 -171.611C1142.62 -246.555 1947.88 -364.276 2102.12 -92.1264C2208.3 95.2325 1948.74 222.514 1733.71 251.675C1132.25 333.244 759.383 697.287 469.891 649.409C264.485 615.437 166.132 409.46 262.258 207.72Z"
            fill="url(#paint0_linear_1_1021)"
            fillOpacity="0.8"
          />
        </g>
        <defs>
          <filter
            id="filter0_f_1_1021"
            x="-74.8203"
            y="-562.415"
            width="2501.5"
            height="1516.14"
            filterUnits="userSpaceOnUse"
            colorInterpolationFilters="sRGB"
          >
            <feFlood floodOpacity="0" result="BackgroundImageFix" />
            <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
            <feGaussianBlur stdDeviation="150" result="effect1_foregroundBlur_1_1021" />
          </filter>
          <linearGradient
            id="paint0_linear_1_1021"
            x1="389.858"
            y1="327.552"
            x2="1698.58"
            y2="315.379"
            gradientUnits="userSpaceOnUse"
          >
            <stop offset="0" stopColor="#B762F7" stopOpacity="0.95" />
            <stop offset="0.4" stopColor="#B762F7" stopOpacity="0.8" />
            <stop offset="0.55" stopColor="#FF6200" stopOpacity="0.8" />
            <stop offset="1" stopColor="#FF6200" stopOpacity="0" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
};

export default GradientBlur;
