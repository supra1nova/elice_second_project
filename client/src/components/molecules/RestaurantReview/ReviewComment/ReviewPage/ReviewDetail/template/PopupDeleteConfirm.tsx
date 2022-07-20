import React from 'react';
import PopupContainer from '../../../../../../oranisms/Popup/PopupContainer';
import PopupHeader from '../../../../../../oranisms/Popup/PopupHeader';
import PopupContents from '../../../../../../oranisms/Popup/PopupContents';
import PopupFooter from '../../../../../../oranisms/Popup/PopupFooter';
import { POPUP } from '../../../../../../../constants/title';

interface Props {
  open: boolean;
  onClose: any;
  onClick?: any;
}

const PopupDeleteConfirm = ({ open, onClose, onClick }: Props) => {
  return (
    <PopupContainer open={open}>
      <PopupHeader
        title={POPUP.REVIEW_DELETE}
        onClose={onClose}
      ></PopupHeader>
      <PopupFooter
        footerType={'checkType'}
        onClose={onClose}
        onClick={onClick}
      />
    </PopupContainer>
  );
};

export default PopupDeleteConfirm;