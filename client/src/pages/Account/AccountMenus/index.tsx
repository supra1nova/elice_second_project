import React from 'react';
import LNBLayout from '../../../components/molecules/LNBLayout';
import { ACCOUNT } from '../../../constants/lnb';
import * as UI from './style';
import AccountMenusCreate from './template/AccountMenusCreate';
import AccountMenusList from './template/AccountMenusList';

const AccountMenus = () => {
  return (
    <LNBLayout items={ACCOUNT.OWNER}>
      <UI.Container>
        <UI.Content>
          <AccountMenusCreate />
          <AccountMenusList />
        </UI.Content>
      </UI.Container>
    </LNBLayout>
  );
};

export default AccountMenus;
