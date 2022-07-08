import React, { useState } from 'react';

import PopupConfirm from './PopupConfirm';
import PopupFinish from './PopupFinish';

const AccountRestaurantsTemplate = () => {
  return (
    <>
      <PopupConfirm />
      <PopupFinish />
    </>
  );
};

export default AccountRestaurantsTemplate;
