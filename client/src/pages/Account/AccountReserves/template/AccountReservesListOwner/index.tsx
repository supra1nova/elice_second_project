import React from 'react';
import LNBLayout from '../../../../../components/molecules/LNBLayout';
import { PaginationTable } from '../../../../../components/molecules/Table';
import { ACCOUNT } from '../../../../../constants/lnb';
import * as UI from './style';

const AccountReservesListOwner = () => {
  return (
    <LNBLayout items={ACCOUNT.OWNER}>
      <UI.Container>
        <UI.Content>
          <PaginationTable />
        </UI.Content>
      </UI.Container>
    </LNBLayout>
  );
};

export default AccountReservesListOwner;
