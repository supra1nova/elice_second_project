import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import * as API from '../../../api/api';
import AccountReservesListOwner from './template/AccountReservesListOwner';
import AccountReservesListUser from './template/AccountReservesListUser';
const AccountReserves = () => {
  const navigate = useNavigate();
  const [role, setRole] = useState<string>();
  useEffect(() => {
    API.userGet('/api/users/user').then((res) => {
      console.log(res);
      setRole(res.role);
    });
  }, []);

  // const Navigate = () => {
  //   window.location.href = '/';
  //   return <></>;
  // };
  console.log(role);

  if (role === 'admin') {
    navigate('/');
  }

  if (role === 'owner') {
    return <AccountReservesListOwner />;
  } else {
    return <AccountReservesListUser />;
  }
};

export default AccountReserves;
