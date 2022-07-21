import React from 'react';
import AccountHeader from '../../molecules/AccountHeader';
import { SECTION } from '../../../constants/title';
import * as UI from './style';

const AccountMenusList = () => {
  return (
    <UI.Container>
      <AccountHeader title={SECTION.MENU_MANAGEMENT} />
      테이블이들어갑니다
    </UI.Container>
  );
};

export default AccountMenusList;
