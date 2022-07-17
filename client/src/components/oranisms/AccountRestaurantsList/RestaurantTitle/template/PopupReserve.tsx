import React from 'react';
import PopupContainer from '../../../Popup/PopupContainer';
import PopupHeader from '../../../Popup/PopupHeader';
import PopupContents from '../../../Popup/PopupContents';
import PopupFooter from '../../../Popup/PopupFooter';
import { POPUP } from '../../../../../constants/title';

interface Props {
  open: boolean;
  onClose: any;
  onClick?: any;
  width: string;
}

const PopupReserve = ({ open, onClose, onClick, width }: Props) => {
  return (
    <PopupContainer 
      open={open}
      width={width}
    >
      <PopupHeader
        title={POPUP.REVIEW_DELETE}
        onClose={onClose}
      />
      <PopupFooter
        footerType={'checkType'}
        onClose={onClose}
        onClick={onClick}
      />
    </PopupContainer>
  );
};

export default PopupReserve;