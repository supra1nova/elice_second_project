import React, { useState, useEffect } from 'react';
import * as API from '../../../api/api';
import AccountReservesListOwner from './template/AccountReservesListOwner';
import AccountReservesListUser from './template/AccountReservesListUser';
const AccountRestaurantsTemplate = () => {
  const [role, setRole] = useState<string>();
  useEffect(() => {
    API.userGet('/api/users/user').then((res) => {
      console.log(res);
      setRole(res.role);
    });
  }, []);

  if (role === 'owner') {
    return <AccountReservesListOwner />;
  } else {
    return <AccountReservesListUser />;
  }
};

export default AccountRestaurantsTemplate;
