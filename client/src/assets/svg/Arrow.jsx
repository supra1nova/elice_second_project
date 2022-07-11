import React from 'react';

export default function Setting({ width, height, fill }) {
  return (
    <svg
      width={width}
      height={height}
      viewBox='0 0 12 21'
      xmlns='http://www.w3.org/2000/svg'
    >
      <path
        d='M0 19.1415L1.80459 21L12 10.5L1.80459 0L0 1.8585L8.39082 10.5L0 19.1415Z'
        fill={fill}
      />
    </svg>
  );
}

Setting.defaultProps = {
  width: '14px',
  height: '14px',
  fill: '#A6A8A3',
};
