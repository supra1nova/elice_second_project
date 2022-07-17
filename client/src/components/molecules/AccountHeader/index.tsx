import React from 'react';
import * as UI from './style';

interface Props {
  title: string;
  children?: React.ReactNode | string;
}

const AccountHeader = ({ title, children }: Props) => {
  return (
    <UI.Container>
      <UI.Title>{title}</UI.Title>
      {children}
    </UI.Container>
  );
};

export default AccountHeader;
