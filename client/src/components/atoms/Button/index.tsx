import React from 'react';
import * as UI from './style';

interface Props {
  component?: string;
  size?: string;
  block: boolean;
  children?: React.ReactElement | string;
}

const Button = ({ component, size, children, block }: Props) => {
  return (
    <UI.Button type='button' component={component} size={size}>
      {children}
    </UI.Button>
  );
};

Button.defulatProps = {
  component: 'default',
  size: 'small',
  block: false,
};

export default Button;
