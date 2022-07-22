import React from 'react';

export default function Home({ width, height, fill }) {
  return (
    <svg
      width={width}
      height={height}
      viewBox='0 0 0 16'
      xmlns='http://www.w3.org/2000/svg'
    >
      <path
        d='M7.2 15.6501V10.2501H10.8V15.6501H15.3V8.4501H18L9 0.350098L0 8.4501H2.7V15.6501H7.2Z'
        fill='#64AD57'
      />
    </svg>
  );
}

Home.defaultProps = {
  width: '14px',
  height: '14px',
  fill: '#A6A8A3',
};
