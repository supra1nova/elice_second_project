import React from 'react';
import { POPUP } from '../../../../../constants/title';
import Popup from '../../../../../components/oranisms/Popup';

const PopupConfirm = () => {
  return (
    <Popup
      title={POPUP.ACCOUNT_CATEGORY_DELETE_CONFIRM}
      foooterType={'closeType'}
    />
  );
};

export default PopupConfirm;
