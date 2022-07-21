import React from 'react';
import LNBLayout from '../../../../../components/molecules/LNBLayout';
import { ACCOUNT } from '../../../../../constants/lnb';
import { SECTION } from '../../../../../constants/title';
import * as UI from './style';

const AccountRestaurantsListAdmin = () => {
  return (
    <LNBLayout items={ACCOUNT.ADMIN}>
      <UI.Container>
        <UI.Content>레스토랑 조회</UI.Content>
      </UI.Container>
    </LNBLayout>
  );
};

export default AccountRestaurantsListAdmin;
