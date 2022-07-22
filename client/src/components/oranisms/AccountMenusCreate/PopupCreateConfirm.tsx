import React from 'react';
import PopupContainer from '../../oranisms/Popup/PopupContainer';
import PopupHeader from '../..//oranisms/Popup/PopupHeader';
import PopupFooter from '../../oranisms/Popup/PopupFooter';
import { POPUP } from '../../../constants/title';

interface Props {
  open: boolean;
  onClose: any;
  onClick?: any;
}

const PopupSaveConfirm = ({ open, onClose, onClick }: Props) => {
  return (
    <PopupContainer open={open}>
      <PopupHeader
        title={POPUP.ACCOUNT_SAVE_CONFIRM}
        onClose={onClose}
      ></PopupHeader>

      <PopupFooter
        footerType={'closeType'}
        onClose={onClose}
        onClick={onClick}
      />
    </PopupContainer>
  );
};

export default PopupSaveConfirm;
