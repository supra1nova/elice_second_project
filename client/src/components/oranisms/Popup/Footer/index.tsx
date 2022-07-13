import React from 'react';
import Button from '../../../atoms/Button';
import * as UI from './style';

interface Props {
  children?: JSX.Element | JSX.Element[];
  footerType?: string;
}

const Footer = ({ children, footerType }: Props) => {
  return (
    <UI.Container>
      {footerType === 'checkType' && (
        <>
          <Button component={'primary'}>확인</Button>
          <Button>취소</Button>
        </>
      )}
      {footerType === 'closeType' && <Button>취소</Button>}
      {footerType === 'customType' && { children }}
    </UI.Container>
  );
};

Footer.defaultProps = {
  footerType: 'checkType',
};

export default Footer;
