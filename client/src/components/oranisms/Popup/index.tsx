import React, { useState, useEffect } from 'react';
import { createPortal } from 'react-dom';
import Header from './Header';
import Contents from './Contents';
import Footer from './Footer';
import * as UI from './style';

interface Props {
  title?: React.ReactElement | string;
  subTitle?: React.ReactElement | string;
  footer?: boolean;
  foooterType?: string;
  children?: React.ReactElement | string;
  primary?: boolean;
}

const Popup = ({
  title,
  subTitle,
  footer,
  foooterType,
  children,
  primary,
}: Props) => {
  const modalDiv = document.getElementById('modal')!;
  const [domReady, setDomReady] = useState(false);

  useEffect(() => {
    setDomReady(true);
  });
  return domReady
    ? createPortal(
        <UI.Container>
          <UI.Content>
            <UI.Section>
              <Header title={title} subTitle={subTitle} primary={primary!} />
              {children && <Contents>{children}</Contents>}
              {footer && <Footer foooterType={foooterType} />}
            </UI.Section>
          </UI.Content>
          <UI.Dimd />
        </UI.Container>,
        modalDiv,
      )
    : null;
};

export default Popup;
