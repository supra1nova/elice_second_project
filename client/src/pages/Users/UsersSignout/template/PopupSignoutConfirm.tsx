import React, { useState, useEffect } from 'react';
import * as API from '../../../../api/api';
import PopupContainer from '../../../../components/oranisms/Popup/PopupContainer';
import PopupHeader from '../../../../components/oranisms/Popup/PopupHeader';
import PopupContents from '../../../../components/oranisms/Popup/PopupContents';
import PopupFooter from '../../../../components/oranisms/Popup/PopupFooter';
import { POPUP } from '../../../../constants/title';
import { ROLE } from '../../../../constants/member';

interface Props {
  open: boolean;
  onClose: any;
  onClick?: any;
}

const PopupSignoutConfirm = ({ open, onClose, onClick }: Props) => {
  return (
    <PopupContainer open={open}>
      <PopupHeader
        title={POPUP.USER_MEMBER_DELETE}
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

export default PopupSignoutConfirm;
