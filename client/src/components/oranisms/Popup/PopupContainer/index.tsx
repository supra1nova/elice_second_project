import React, { useState, useEffect } from 'react';
import { createPortal } from 'react-dom';
import * as UI from './style';

interface Props {
  open: boolean;
  width?: string;
  paddingBottom? : string;
  children: React.ReactNode;
}

const PopupContainer = ({ open, width, children, paddingBottom }: Props) => {
  const modalDiv = document.getElementById('modal')!;
  const [domReady, setDomReady] = useState(false);

  useEffect(() => {
    setDomReady(true);
  }, []);
  return domReady
    ? createPortal(
        <UI.Container open={open}>
          <UI.Content>
            <UI.Section width={width} paddingBottom={paddingBottom}>{children}</UI.Section>
            {/* <UI.Section>{children}</UI.Section> */}
          </UI.Content>
          <UI.Dimd />
        </UI.Container>,
        modalDiv,
      )
    : null;
};

PopupContainer.defaultProps = {
  width: '350',
  paddingBottom: '40'
};

export default PopupContainer;
