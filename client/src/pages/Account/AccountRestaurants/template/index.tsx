import React, { useState } from 'react';
import PopupSaveConfirm from './PopupSaveConfirm';
import Button from '../../../../components/atoms/Button';
const AccountRestaurantsTemplate = () => {
  const [openPopupSaveConfirm, setOpenPopupSaveConfirm] = useState(false);

  return (
    <>
      <Button component='primary' block>
        변경사항 저장
      </Button>
      {openPopupSaveConfirm && <PopupSaveConfirm />}
      {}
    </>
  );
};

export default AccountRestaurantsTemplate;
