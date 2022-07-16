import React from 'react';

export default function PlusButton({ width, height, fill }) {
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
        transform='rotate(-180 12 12)'
        fill='white'
        stroke='#E5E5E5'
      />
      <line x1='8' y1='12' x2='16' y2='12' stroke='#6C6C6C' strokeWidth='2' />
    </svg>
  );
}

PlusButton.defaultProps = {
  width: '14px',
  height: '14px',
  fill: '#A6A8A3',
};
