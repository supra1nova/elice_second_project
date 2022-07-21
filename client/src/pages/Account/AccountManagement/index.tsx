import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import * as API from '../../../api/api';
import AccountManagementAdmin from './template/AccountManagementAdmin';

const AccountManagement = () => {
  const navigate = useNavigate();
  const [role, setRole] = useState<string>();
  useEffect(() => {
    API.userGet('/api/users/user').then((res) => {
      console.log(res);
      setRole(res.role);
    });
  }, []);

  return <>{role === 'admin' ? <AccountManagementAdmin /> : navigate('/')}</>;
};

export default AccountManagement;
