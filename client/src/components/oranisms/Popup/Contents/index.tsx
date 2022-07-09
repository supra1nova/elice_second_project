import React from 'react';
import * as UI from './style';

export interface Props {
  children?: React.ReactElement | string;
}

const Contents = ({ children }: Props) => {
  return <UI.Container>{children}</UI.Container>;
};

export default Contents;
