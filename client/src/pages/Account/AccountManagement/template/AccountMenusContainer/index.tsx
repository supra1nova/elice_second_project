import React from 'react';
import LNBLayout from '../../../../../components/molecules/LNBLayout';
import { ACCOUNT } from '../../../../../constants/lnb';
import * as UI from './style';
import AccountMenusCreate from '../AccountMenusCreate';
import AccountMenusList from '../AccountMenusList';

const AccountMenusContainer = () => {
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

export default AccountMenusContainer;
