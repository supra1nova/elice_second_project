import React from 'react';
import * as UI from './style';

interface Props {
  component?: string;
  size?: string;
  children?: React.ReactElement | string;
}

const Button = ({ component, size, children }: Props) => {
  return (
    <UI.Button type='button' component={component} size={size}>
      {children}
    </UI.Button>
  );
};

Button.defulatProps = {
  component: 'default',
  size: 'small',
};

export default Button;
