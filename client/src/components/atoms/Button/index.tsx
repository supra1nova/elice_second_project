import React from 'react';
import * as UI from './style';

interface Props {
  color?: React.ReactElement | string;
  size?: React.ReactElement | string;
  children?: React.ReactElement | string;
}

const Button = ({ color, size, children }: Props) => {
  return (
    <UI.Button type='button' color={color} size={size}>
      {children}
    </UI.Button>
  );
};

export default Button;
