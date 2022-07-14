import React from 'react';
import LNB from '../LNB';
import * as UI from './style';

interface Props {
  items: any;
  children: any;
}

const LNBLayout = ({ items, children }: Props) => {
  return (
    <UI.Container>
      <LNB items={items} />
      <UI.Content>{children}</UI.Content>
    </UI.Container>
  );
};

export default LNBLayout;
