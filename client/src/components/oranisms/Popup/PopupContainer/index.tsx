import React, { useState, useEffect } from 'react';
import { createPortal } from 'react-dom';
import * as UI from './style';

interface Props {
  open: boolean;
  children: React.ReactNode;
}

const PopupContainer = ({ open, children }: Props) => {
  const modalDiv = document.getElementById('modal')!;
  const [domReady, setDomReady] = useState(false);

  useEffect(() => {
    setDomReady(true);
  });

  return domReady
    ? createPortal(
        <UI.Container open={open}>
          <UI.Content>
            <UI.Section>{children}</UI.Section>
          </UI.Content>
          <UI.Dimd />
        </UI.Container>,
        modalDiv,
      )
    : null;
};

export default PopupContainer;
