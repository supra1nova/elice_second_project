import React, { useEffect } from 'react';
import * as API from '../../../api/api';
import AccountReservesOwner from './template/AccountReservesOwner';

const AccountRestaurantsTemplate = () => {
  useEffect(() => {
    API.userGet('/api/users/user').then((res) => {
      const { role } = res;
      console.log(role);
    });
  }, []);

  return (
    // 사장님일 경우 => role 체크 필요 페이지
    <AccountReservesOwner />
  );
};

export default AccountRestaurantsTemplate;
