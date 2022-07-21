import React from 'react';
import LNBLayout from '../../../../../components/molecules/LNBLayout';
import { UserReserveTable } from '../../../../../components/molecules/UserReserveTable';
import { ACCOUNT } from '../../../../../constants/lnb';
import * as UI from './style';

const AccountReservesListUser = () => {
  return (
    <LNBLayout items={ACCOUNT.OWNER}>
      <UI.Container>
        <UI.Content>
          <UserReserveTable />
        </UI.Content>
      </UI.Container>
    </LNBLayout>
  );
};

export default AccountReservesListUser;
