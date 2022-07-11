import React from 'react';
import * as UI from './style';

interface Props {
  component?: string;
  size?: string;
  block?: boolean;
  children?: React.ReactNode | string;
  onClick?: (e: any) => void;
}

const Button = ({ component, size, block, children, onClick }: Props) => {
  return (
    <UI.Button
      type='button'
      component={component}
      size={size}
      block={block!}
      onClick={onClick}
    >
      {children}
    </UI.Button>
  );
};

Button.defulatProps = {
  component: 'default', // default, primary, info, disable
  size: 'default', // default, small, medium, large
  block: false,
};

export default Button;
