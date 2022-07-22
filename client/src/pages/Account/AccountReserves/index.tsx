import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import * as API from '../../../api/api';
import AccountReservesListOwner from './template/AccountReservesListOwner';
import AccountReservesListUser from './template/AccountReservesListUser';

const AccountReserves = () => {
  const navigate = useNavigate();
  const [role, setRole] = useState<string>();

  const getData = async () => {
    API.userGet('/api/users/user').then((res) => {
      setRole(res.role);
    });
  };

  useEffect(() => {
    getData();
  }, []);

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
