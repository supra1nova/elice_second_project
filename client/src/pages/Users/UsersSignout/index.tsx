import React, { useState } from 'react';
import PopupSignoutConfirm from './template/PopupSignoutConfirm';
import Button from '../../../components/atoms/Button';
import { BUTTON } from '../../../constants/input';
import * as UI from './style';

const UsersSignout = () => {
  const [openPopupSignoutConfirm, setOpenPopupSignoutConfirm] = useState(false);

  const handleOpenPopupSignoutConfirm = (e: any) => {
    e.preventDefault();
    setOpenPopupSignoutConfirm(true);
  };

  const handleClosePopupSignoutConfirm = (e: any) => {
    e.preventDefault();
    setOpenPopupSignoutConfirm(!openPopupSignoutConfirm);
  };

  return (
    <UI.Container>
      <Button
        component='disable'
        size='large'
        block
        onClick={handleOpenPopupSignoutConfirm}
      >
        {BUTTON.USER_MEMBER_DELETE}
      </Button>
      <PopupSignoutConfirm
        open={openPopupSignoutConfirm}
        onClose={handleClosePopupSignoutConfirm}
      />
    </UI.Container>
  );
};

export default UsersSignout;
