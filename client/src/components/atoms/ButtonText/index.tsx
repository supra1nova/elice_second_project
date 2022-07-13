import React from 'react';
import * as UI from './style';

interface Props {
  component?: string;
  size?: string;
  children?: string;
  to?: string;
  onClick?: (e: any) => void;
}

const ButtonText = ({ component, size, children, to, onClick }: Props) => {
  if (to) {
    return (
      <UI.ButtonLink
        component={component}
        size={size}
        to={to}
        onClick={onClick}
      >
        {children}
      </UI.ButtonLink>
    );
  } else {
    return (
      <UI.Button component={component} size={size} onClick={onClick}>
        {children}
      </UI.Button>
    );
  }
};

ButtonText.defulatProps = {
  component: 'default', // default, primary, info, disable
  size: 'default', // default, small, medium, large
  block: false,
  to: null,
  onClick: () => null,
};

export default ButtonText;
