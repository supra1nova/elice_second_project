import React from 'react';
import AccountHeader from '../../../../../components/molecules/AccountHeader';
import { SECTION } from '../../../../../constants/title';
import * as UI from './style';

const AccountMenusList = () => {
  return (
    <UI.Container>
      <AccountHeader title={SECTION.MENU_MANAGEMENT} />
    </UI.Container>
  );
};

export default AccountMenusList;
