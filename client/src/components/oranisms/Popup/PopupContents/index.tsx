import React from 'react';
import * as UI from './style';

export interface Props {
  children?: any;
}

const PopupContents = ({ children }: Props) => {
  return <UI.Container>{children}</UI.Container>;
};

export default PopupContents;
