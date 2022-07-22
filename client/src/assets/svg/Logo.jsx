import React from 'react';

export default function Home({ width, height, fill }) {
  return (
    <svg
      width={width}
      height={height}
      viewBox='0 0 18 16'
      xmlns='http://www.w3.org/2000/svg'
    >
      <path
        d='M7.2 15.3V9.9H10.8V15.3H15.3V8.1H18L9 0L0 8.1H2.7V15.3H7.2Z'
        fill={fill}
      />
    </svg>
  );
}

Home.defaultProps = {
  width: '14px',
  height: '14px',
  fill: '#A6A8A3',
};
