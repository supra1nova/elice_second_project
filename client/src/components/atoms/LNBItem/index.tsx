import React, { useState } from 'react';
import * as UI from './style';

interface Props {
  children: string | React.ReactElement;
  active?: boolean;
  onClick?: (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => void;
}

const LNBItem = ({ children, active = false, onClick }: Props) => {
  const [isActive, setIsActive] = useState(active);
  return (
    <UI.Container
      active={isActive}
      onClick={(event: any) => {
        onClick && onClick(event);
        !isActive && setIsActive(true);
      }}
      data-testid={'lnb-item'}
    >
      {children}
    </UI.Container>
  );
};

export default LNBItem;
