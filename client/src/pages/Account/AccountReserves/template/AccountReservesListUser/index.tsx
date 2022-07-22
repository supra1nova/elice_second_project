import React from 'react';
import LNBLayout from '../../../../../components/molecules/LNBLayout';
import { UserReserveTable } from '../../../../../components/molecules/UserReserveTable';
import { ACCOUNT } from '../../../../../constants/lnb';
import * as UI from './style';

const AccountReservesListUser = () => {
  return (
    <UI.Container>
      <UI.Content>
        <UserReserveTable />
        USER TABLE
      </UI.Content>
    </UI.Container>
  );
};

export default AccountReservesListUser;
