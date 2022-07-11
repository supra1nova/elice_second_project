import React from 'react';

export default function ArrowButton({ width, height, fill }) {
  return (
    <svg
      width={width}
      height={height}
      viewBox='0 0 24 24'
      xmlns='http://www.w3.org/2000/svg'
    >
      <circle
        cx='12'
        cy='12'
        r='11.5'
        transform='rotate(180 12 12)'
        fill='white'
        stroke='#E5E5E5'
      />
      <path
        d='M10.2857 9.37716L12.9029 12L10.2857 14.6229L11.0914 15.4286L14.52 12L11.0914 8.57144L10.2857 9.37716Z'
        fill='#2F353D'
      />
    </svg>
  );
}

ArrowButton.defaultProps = {
  width: '14px',
  height: '14px',
  fill: '#A6A8A3',
};
