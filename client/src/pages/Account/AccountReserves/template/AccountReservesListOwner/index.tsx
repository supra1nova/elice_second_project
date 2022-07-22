import React from 'react';
import LNBLayout from '../../../../../components/molecules/LNBLayout';
import { UserReserveTable } from '../../../../../components/molecules/UserReserveTable';
import { ACCOUNT } from '../../../../../constants/lnb';
import * as UI from './style';
import BookingList from '../../../../../components/molecules/BookingList'
import AccountHeader from '../../../../../components/molecules/AccountHeader';
import { SECTION } from '../../../../../constants/title';

const AccountReservesListOwner = () => {
  return (
    <LNBLayout items={ACCOUNT.OWNER}>
      <UI.Container>
        <UI.Content>
          <AccountHeader title={SECTION.RESERVATION_RESERVES} />
          <BookingList />
        </UI.Content>
      </UI.Container>
    </LNBLayout>
  );
};

export default AccountReservesListOwner;
