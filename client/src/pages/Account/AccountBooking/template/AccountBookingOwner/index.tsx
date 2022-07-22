import React from 'react';
import LNBLayout from '../../../../../components/molecules/LNBLayout';
import AccountHeader from '../../../../../components/molecules/AccountHeader';
import AccountBookingCreate from '../../../../../components/oranisms/AccountBookingCreate';
import AccountBookingList from '../../../../../components/oranisms/AccountBookingList';
import { ACCOUNT } from '../../../../../constants/lnb';
import { SECTION } from '../../../../../constants/title';
import * as UI from './style';

const AccountBookingOwner = () => {
  return (
    <LNBLayout items={ACCOUNT.OWNER}>
      <UI.Container>
        <UI.Content>
          <AccountBookingCreate />
          <AccountBookingList />
        </UI.Content>
      </UI.Container>
    </LNBLayout>
  );
};

export default AccountBookingOwner;
