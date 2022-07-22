import React, { useState, useEffect } from 'react';
import * as API from '../../../api/api';
import AccountReservesListOwner from './template/AccountReservesListOwner';
import AccountReservesListUser from './template/AccountReservesListUser';
const AccountReserves = () => {
  const [role, setRole] = useState<string>();
  useEffect(() => {
    async function roleCheck() {
      await API.userGet('/api/users/user').then((res) => {
        console.log(res);
        setRole(res.role);
      });
    }
    roleCheck();
  }, []);

  const Navigate = () => {
    window.location.href = '/';
    return <></>;
  };

  if (role === 'owner') {
    return <AccountReservesListOwner />;
  } else if (role === 'admin') {
    return <Navigate />;
  } else {
    return <AccountReservesListUser />;
  }
};

export default AccountReserves;
