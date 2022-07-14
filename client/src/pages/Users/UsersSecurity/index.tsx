import React, { useState } from 'react';
import LNBLayout from '../../../components/molecules/LNBLayout';
import PopupCurrentPassword from './template/PopupCurrentPassword';
import Button from '../../../components/atoms/Button';
import { USERS } from '../../../constants/lnb';
import { BUTTON } from '../../../constants/input';
import * as UI from './style';

const UsersSignout = () => {
  const [openPopupCurrentPassword, setOpenPopupCurrentPassword] =
    useState(false);

  const handleOpenPopupCurrentPassword = (e: any) => {
    e.preventDefault();
    setOpenPopupCurrentPassword(true);
  };

  const handleClosePopupCurrentPassword = (e: any) => {
    e.preventDefault();
    setOpenPopupCurrentPassword(!openPopupCurrentPassword);
  };

  return (
    <LNBLayout items={USERS}>
      <UI.Container>
        <Button
          component='primary'
          size='large'
          block
          onClick={handleOpenPopupCurrentPassword}
        >
          {BUTTON.USER_SECURITY_MODIFY}
        </Button>
        <PopupCurrentPassword
          open={openPopupCurrentPassword}
          onClose={handleClosePopupCurrentPassword}
        />
      </UI.Container>
    </LNBLayout>
  );
};

export default UsersSignout;
