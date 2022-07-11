import React from 'react';
import * as UI from './style';

interface Props {
  component?: string;
  size?: string;
  children?: React.ReactNode | string;
}

const Button = ({ component, size, children }: Props) => {
  console.log(component, size);
  return (
    <UI.Button type='button' component={component} size={size}>
      {children}
    </UI.Button>
  );
};

Button.defulatProps = {
  component: 'default', // default, primary, info, disable
  size: 'default', // default, small, medium, large
};

export default Button;
