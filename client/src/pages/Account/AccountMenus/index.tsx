import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import * as API from '../../../api/api';
import AccountMenusOwner from './template/AccountMenusOwner';

const AccountMenus = () => {
  const navigate = useNavigate();
  const [role, setRole] = useState<string>();
  const [email, setEmail] = useState('');
  useEffect(() => {
    API.userGet('/api/users/user').then((res) => {
      setRole(res.role);
      setEmail(res.email);
    });
  }, []);
  // useEffect(() => {
  //   if (role !== 'owner') {
  //     navigate('/');
  //   }
  // }, [role]);
  // const Navigate = () => {
  //   window.location.href = '/';
  //   return <></>;
  // };

  return <AccountMenusOwner email={email} />;
};

export default AccountMenus;
