import React from 'react';
import { POPUP } from '../../../../../constants/title';
import Popup from '../../../../../components/oranisms/Popup';

export interface Props {
  close: () => void;
}

const PopupSaveConfirm = ({ close }: Props) => {
  return <Popup title={POPUP.ACCOUNT_SAVE_CONFIRM} footer />;
};

export default PopupSaveConfirm;
