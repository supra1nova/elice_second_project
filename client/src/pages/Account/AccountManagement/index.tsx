import React from 'react';
import LNBLayout from '../../../components/molecules/LNBLayout';
import AccountHeader from '../../../components/molecules/AccountHeader';
import { ACCOUNT } from '../../../constants/lnb';
import { SECTION } from '../../../constants/title';
import * as UI from './style';

const AccountManagement = () => {
  return (
    <LNBLayout items={ACCOUNT.OWNER}>
      <UI.Container>
        <UI.Content>
          <AccountHeader title={SECTION.RESERVATION_REGISTER} />

          <AccountHeader title={SECTION.RESERVATION_MANAGEMENT} />
        </UI.Content>
      </UI.Container>
    </LNBLayout>
  );
};

export default AccountManagement;
