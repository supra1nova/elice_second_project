import React, { useState } from 'react';
import * as UI from './style';

interface Props {
  menu: any;
  to: any;
}

const style = {
  color: 'red',
};

const LNBItem = ({ menu, to }: Props) => {
  return <UI.Container to={to}>{menu}</UI.Container>;
};

export default LNBItem;
