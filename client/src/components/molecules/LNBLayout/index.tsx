import React from 'react';
import * as UI from './style';

interface Props {
  children: any;
}

const LNBLayout = ({ children }: Props) => {
  return <UI.Container>{children}</UI.Container>;
};

export default LNBLayout;
