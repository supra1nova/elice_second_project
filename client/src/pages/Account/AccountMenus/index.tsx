import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import * as API from '../../../api/api';
import AccountMenusContainer from './template/AccountMenusContainer';

const AccountMenus = () => {
  const navigate = useNavigate();
  const [role, setRole] = useState<string>();
  useEffect(() => {
    API.userGet('/api/users/user').then((res) => {
      console.log(res);
      setRole(res.role);
    });
  }, []);

  return <>{role === 'owner' ? <AccountMenusContainer /> : navigate('/')}</>;
};

export default AccountMenus;
