import React, { useState } from 'react';
import PopupSaveConfirm from './PopupSaveConfirm';
import Button from '../../../../components/atoms/Button';

export interface PopupProps {
  close: () => void;
}

const AccountRestaurantsTemplate = ({ close }: PopupProps) => {
  const [openPopupSaveConfirm, setOpenPopupSaveConfirm] = useState(false);
  const handleOpenPopupSaveConfirm = (e: any) => {
    e.preventDefault();
    setOpenPopupSaveConfirm(true);
  };

  const handleClosePopupSaveConfirm = () => {
    setOpenPopupSaveConfirm(true);
  };

  return (
    <>
      <Button
        component='primary'
        size='large'
        block
        onClick={handleOpenPopupSaveConfirm}
      >
        변경사항 저장
      </Button>
      {openPopupSaveConfirm && (
        <PopupSaveConfirm close={handleClosePopupSaveConfirm} />
      )}
      {}
    </>
  );
};

export default AccountRestaurantsTemplate;
