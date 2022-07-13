import React from 'react';

export default function Person({ width, height, fill }) {
  return (
    <svg
      width={width}
      height={height}
      viewBox='0 0 22 22'
      xmlns='http://www.w3.org/2000/svg'
    >
      <path
        d='M9.075 12.1C9.075 12.859 8.459 13.475 7.7 13.475C6.941 13.475 6.325 12.859 6.325 12.1C6.325 11.341 6.941 10.725 7.7 10.725C8.459 10.725 9.075 11.341 9.075 12.1ZM14.3 10.725C13.541 10.725 12.925 11.341 12.925 12.1C12.925 12.859 13.541 13.475 14.3 13.475C15.059 13.475 15.675 12.859 15.675 12.1C15.675 11.341 15.059 10.725 14.3 10.725ZM22 11C22 17.072 17.072 22 11 22C4.928 22 0 17.072 0 11C0 4.928 4.928 0 11 0C17.072 0 22 4.928 22 11ZM9.526 2.332C11.066 4.884 13.86 6.6 17.05 6.6C17.556 6.6 18.051 6.545 18.524 6.468C16.984 3.916 14.19 2.2 11 2.2C10.494 2.2 9.999 2.255 9.526 2.332ZM2.662 8.217C4.543 7.15 5.995 5.412 6.688 3.333C4.807 4.4 3.355 6.138 2.662 8.217ZM19.8 11C19.8 10.142 19.668 9.317 19.437 8.536C18.667 8.701 17.875 8.8 17.05 8.8C13.607 8.8 10.538 7.216 8.514 4.741C7.359 7.557 5.06 9.768 2.2 10.846C2.211 10.89 2.2 10.945 2.2 11C2.2 15.851 6.149 19.8 11 19.8C15.851 19.8 19.8 15.851 19.8 11Z'
        fill={fill}
      />
    </svg>
  );
}

Person.defaultProps = {
  width: '14px',
  height: '14px',
  fill: '#A6A8A3',
};
