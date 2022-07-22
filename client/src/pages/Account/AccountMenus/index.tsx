import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import * as API from '../../../api/api';
import AccountMenusOwner from './template/AccountMenusOwner';

const AccountMenus = () => {
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

  if (role !== 'owner') {
    navigate('/');
  }

  return (
    <>
      <AccountMenusOwner />
    </>
  );
};

export default AccountMenus;
