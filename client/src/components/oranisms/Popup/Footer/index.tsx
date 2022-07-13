import React from 'react';
import Button from '../../../atoms/Button';
import * as UI from './style';

interface Props {
  children: JSX.Element | JSX.Element[];
  footerType: string;
}

const Footer = ({ children, footerType }: Props) => {
  if (footerType === 'checkType') {
    return (
      <UI.Container>
        <Button component='primary'>확인</Button>
        <Button>취소</Button>
      </UI.Container>
    );
  }
  if (footerType === 'closeType') {
    return (
      <UI.Container>
        <Button>취소</Button>
      </UI.Container>
    );
  }
  if (footerType === 'customType') {
    return <UI.Container>{children}</UI.Container>;
  }
};

Footer.defaultProps = {
  footerType: 'checkType',
};

export default Footer;
