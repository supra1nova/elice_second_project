import React from 'react';
import PopupContainer from '../../oranisms/Popup/PopupContainer';
import PopupHeader from '../..//oranisms/Popup/PopupHeader';
import PopupContents from '../Popup/PopupContents';
import PopupFooter from '../../oranisms/Popup/PopupFooter';
import { POPUP } from '../../../constants/title';

interface Props {
  open: boolean;
  message: string;
  onClose: any;
  onClick?: any;
}

const PopupSaveConfirm = ({ open, onClose, message, onClick }: Props) => {
  return (
    <PopupContainer open={open}>
      <PopupHeader title={message} onClose={onClose}></PopupHeader>
      <PopupFooter
        footerType={'closeType'}
        onClose={onClose}
        onClick={onClick}
      />
    </PopupContainer>
  );
};

export default PopupSaveConfirm;
