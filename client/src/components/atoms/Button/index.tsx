import React from 'react';
import * as UI from './style';

interface Props {
  component?: string;
  size?: string;
  block?: boolean;
  children?: string;
  to?: string;
  onClick?: (e: any) => void;
}

const Button = ({ component, size, block, children, to, onClick }: Props) => {
  if (to) {
    return (
      <UI.ButtonLink
        component={component}
        size={size}
        to={to}
        block={block!}
        onClick={onClick}
      >
        {children}
      </UI.ButtonLink>
    );
  } else {
    return (
      <UI.Button
        component={component}
        size={size}
        block={block!}
        onClick={onClick}
      >
        {children}
      </UI.Button>
    );
  }
};

Button.defulatProps = {
  component: 'default', // default, primary, info, disable
  size: 'default', // default, small, medium, large
  block: false,
  to: null,
  children: '',
  onClick: () => null,
};

export default Button;
