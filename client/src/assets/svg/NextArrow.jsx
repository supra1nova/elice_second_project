import React from 'react';

export default function NextArrow({ width, height }) {
  return (
    <svg 
      width={width}
      height={height} 
      viewBox="0 0 42 42" 
      xmlns="http://www.w3.org/2000/svg"
    >
        <circle 
          cx="21" cy="21" r="20.5" 
          transform="rotate(-180 21 21)" 
          fill="white" 
          stroke="#E5E5E5"
        />
        <path 
          d="M18 16.41L22.58 21L18 25.59L19.41 27L25.41 21L19.41 15L18 16.41Z" 
          fill="#2F353D"
        />
    </svg>

  );
}

NextArrow.defaultProps = {
  width: '42px',
  height: '42px',
};
