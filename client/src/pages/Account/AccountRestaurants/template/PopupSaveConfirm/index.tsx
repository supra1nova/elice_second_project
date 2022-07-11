import React from 'react';
import { TITLE } from '../../../../../constants/title';
import Popup from '../../../../../components/oranisms/Popup';

const PopupSaveConfirm = () => {
  return <Popup title={TITLE.ACCOUNT_SAVE_CONFIRM} footer primary={true} />;
};

export default PopupSaveConfirm;
