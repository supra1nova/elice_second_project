import React from 'react';
import Button from '../../../atoms/Button';
import * as UI from './style';

interface Props {
  children?: JSX.Element | JSX.Element[];
  footerType: string;
  onClose: any;
  onClick?: any;
}

const PopupFooter = ({ children, footerType, onClose, onClick }: Props) => {
  return (
    <UI.Container>
      {footerType === 'checkType' ? (
        <>
          <Button component='primary' onClick={onClick}>
            확인
          </Button>
          <Button onClick={onClose}>취소</Button>
        </>
      ) : null}
      {footerType === 'closeType' ? (
        <Button onClick={onClose}>취소</Button>
      ) : null}
      {footerType === 'customType' ? <>{children}</> : null}
    </UI.Container>
  );
};

PopupFooter.defaultProps = {
  footerType: 'checkType',
};

export default PopupFooter;
