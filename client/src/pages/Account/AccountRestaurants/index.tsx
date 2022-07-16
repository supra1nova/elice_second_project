import React, { useState } from 'react';
import Button from '../../../components/atoms/Button';
import PopupSaveConfirm from './template/PopupSaveConfirm';
import * as UI from './style';

const AccountRestaurants = () => {
  const [openPopupSaveConfirm, setOpenPopupSaveConfirm] = useState(false);

  const handleOpenPopupSaveConfirm = (e: any) => {
    e.preventDefault();
    setOpenPopupSaveConfirm(true);
  };

  const handleClosePopupSaveConfirm = (e: any) => {
    e.preventDefault();
    setOpenPopupSaveConfirm(!openPopupSaveConfirm);
  };

  return (
    <UI.Container>
      <Button
        component='primary'
        size='large'
        block
        onClick={handleOpenPopupSaveConfirm}
      >
        변경사항 저장
      </Button>

      <PopupSaveConfirm
        open={openPopupSaveConfirm}
        onClose={handleClosePopupSaveConfirm}
      />
    </UI.Container>
  );
};

export default AccountRestaurants;
