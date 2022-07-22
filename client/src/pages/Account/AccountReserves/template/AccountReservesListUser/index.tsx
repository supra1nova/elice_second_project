import React from 'react';
import LNBLayout from '../../../../../components/molecules/LNBLayout';
import { PaginationTable } from '../../../../../components/molecules/Table';
import { ACCOUNT } from '../../../../../constants/lnb';
import * as UI from './style';

const AccountReservesListUser = () => {
  return (
    <UI.Container>
      <UI.Content>
        <PaginationTable />
        USER TABLE
      </UI.Content>
    </UI.Container>
  );
};

export default AccountReservesListUser;
