import React from 'react';

export default function Setting({ width, height, fill }) {
  return (
    <svg width="42" height="42" viewBox="0 0 42 42" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="21" cy="21" r="20.5" fill="white" stroke="#E5E5E5"/>
        <path d="M24 25.59L19.42 21L24 16.41L22.59 15L16.59 21L22.59 27L24 25.59Z" fill="#2F353D"/>
    </svg>
  );
}

Setting.defaultProps = {
  width: '14px',
  height: '14px',
  fill: '#A6A8A3',
};
