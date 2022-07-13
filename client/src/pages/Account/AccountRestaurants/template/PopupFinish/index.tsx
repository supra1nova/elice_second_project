import React from 'react';
import { TITLE } from '../../../../../constants/title';
import Popup from '../../../../../components/oranisms/Popup';

const PopupConfirm = () => {
  return (
    <Popup
      title={TITLE.ACCOUNT_CATEGORY_DELETE_CONFIRM}
      foooterType={'closeType'}
    />
  );
};

export default PopupConfirm;
