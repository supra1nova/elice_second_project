import { time } from 'console';
import React, { useState, useEffect } from 'react';
import LNBItem from '../../atoms/LNBItem';
import * as UI from './style';

interface Props {
  items: any;
}

const LNB = ({ items }: Props) => {
  return (
    <UI.Container>
      {items.map((item: any, index: any) => (
        <LNBItem key={`${item.menu}-${index}`} menu={item.menu} to={item.to} />
      ))}
    </UI.Container>
  );
};

export default LNB;
