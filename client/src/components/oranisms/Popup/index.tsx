import React, { useState, useEffect, Children } from 'react';
import { createPortal } from 'react-dom';
import Template from './Template';

export interface Props {
  title?: React.ReactElement | string;
  subTitle?: React.ReactElement | string;
  children?: React.ReactElement | string;
}

const Popup = ({ children }: Props) => {
  const [domReady, setDomReady] = useState(false);
  const modalDiv = document.getElementById('modal')!;
  useEffect(() => {
    setDomReady(true);
  });

  return domReady ? createPortal(<Template></Template>, modalDiv) : null;
};

export default Popup;
