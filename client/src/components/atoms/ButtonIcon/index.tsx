import React from 'react';
import * as UI from './style';

interface Props {
  children: JSX.Element | JSX.Element[];
  to?: string | null;
  onClick: (e: any) => void;
}

const ButtonIcon = ({ children, to, onClick }: Props) => {
  if (to) {
    return (
      <UI.ButtonLink to={to} onClick={onClick}>
        {children}
      </UI.ButtonLink>
    );
  } else {
    return (
      <UI.Button type='button' onClick={onClick}>
        {children}
      </UI.Button>
    );
  }
};

ButtonIcon.defulatProps = {
  children: null,
  to: null,
  onClick: () => null,
};

export default ButtonIcon;
