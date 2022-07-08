import React from 'react';

export default function Clock({ width, height, fill }) {
  return (
    <svg
      width={width}
      height={height}
      viewBox='0 0 22 22'
      xmlns='http://www.w3.org/2000/svg'
    >
      <path
        d='M10.989 0C4.917 0 0 4.928 0 11C0 17.072 4.917 22 10.989 22C17.072 22 22 17.072 22 11C22 4.928 17.072 0 10.989 0ZM11 19.8C6.138 19.8 2.2 15.862 2.2 11C2.2 6.138 6.138 2.2 11 2.2C15.862 2.2 19.8 6.138 19.8 11C19.8 15.862 15.862 19.8 11 19.8Z'
        fill={fill}
      />
      <path
        d='M11.5504 5.5H9.90039V12.1L15.6754 15.565L16.5004 14.212L11.5504 11.275V5.5Z'
        fill={fill}
      />
    </svg>
  );
}

Clock.defaultProps = {
  width: '14px',
  height: '14px',
  fill: '#A6A8A3',
};
