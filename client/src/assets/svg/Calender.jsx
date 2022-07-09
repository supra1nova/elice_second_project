import React from 'react';

export default function Calender({ width, height, fill }) {
  return (
    <svg
      width={width}
      height={height}
      viewBox='0 0 15 17'
      xmlns='http://www.w3.org/2000/svg'
    >
      <path
        d='M13.5 1.54545H12.75V0H11.25V1.54545H3.75V0H2.25V1.54545H1.5C0.675 1.54545 0 2.24091 0 3.09091V15.4545C0 16.3045 0.675 17 1.5 17H13.5C14.325 17 15 16.3045 15 15.4545V3.09091C15 2.24091 14.325 1.54545 13.5 1.54545ZM13.5 15.4545H1.5V5.40909H13.5V15.4545Z'
        fill={fill}
      />
    </svg>
  );
}

Calender.defaultProps = {
  width: '14px',
  height: '14px',
  fill: '#A6A8A3',
};
