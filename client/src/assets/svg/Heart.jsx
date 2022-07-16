import React from 'react';

export default function Heart({ width, height, fill, stroke }) {
  return (
    <svg
      width={width}
      height={height}
      viewBox='0 0 24 22'
      xmlns='http://www.w3.org/2000/svg'
    >
      <path
        d='M10.4673 20.0497L10.4665 20.0491C7.40619 17.2405 4.90622 14.9454 3.16532 12.7913C1.43034 10.6445 0.5 8.69765 0.5 6.59401C0.5 3.17183 3.14855 0.5 6.51538 0.5C8.42297 0.5 10.2633 1.4012 11.4636 2.82763L11.8462 3.28233L12.2287 2.82763C13.429 1.4012 15.2693 0.5 17.1769 0.5C20.5438 0.5 23.1923 3.17183 23.1923 6.59401C23.1923 8.69766 22.262 10.6446 20.5269 12.7929C18.7898 14.9438 16.297 17.2364 13.2459 20.0426L13.2264 20.0604L13.2254 20.0614L11.8474 21.3213L10.4673 20.0497Z'
        fill={fill}
        stroke={stroke}
      />
    </svg>
  );
}

Heart.defaultProps = {
  width: '14px',
  height: '14px',
  fill: '#FB5E64',
  stroke: 'none',
};
