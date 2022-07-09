import React from 'react';

export default function Exit({ width, height, fill }) {
  return (
    <svg
      width={width}
      height={height}
      viewBox='0 0 21 19'
      xmlns='http://www.w3.org/2000/svg'
    >
      <path
        d='M15.75 4.22222L14.2695 5.71056L16.9785 8.44444H6.3V10.5556H16.9785L14.2695 13.2789L15.75 14.7778L21 9.5L15.75 4.22222ZM2.1 2.11111H10.5V0H2.1C0.945 0 0 0.95 0 2.11111V16.8889C0 18.05 0.945 19 2.1 19H10.5V16.8889H2.1V2.11111Z'
        fill={fill}
      />
    </svg>
  );
}

Exit.defaultProps = {
  width: '14px',
  height: '14px',
  fill: '#A6A8A3',
};
