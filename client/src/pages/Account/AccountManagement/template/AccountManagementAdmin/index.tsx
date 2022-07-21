import React from 'react';
import LNBLayout from '../../../../../components/molecules/LNBLayout';
import { ACCOUNT } from '../../../../../constants/lnb';
import { SECTION } from '../../../../../constants/title';
import * as UI from './style';

const AccountManagementAdmin = () => {
  return (
    <LNBLayout items={ACCOUNT.ADMIN}>
      <UI.Container>
        <UI.Content>어드민이다</UI.Content>
      </UI.Container>
    </LNBLayout>
  );
};

export default AccountManagementAdmin;
