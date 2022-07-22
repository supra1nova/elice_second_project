import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import * as API from '../../../api/api';
import AccountManagementAdmin from './template/AccountManagementAdmin';

const AccountManagement = () => {
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

  if (role !== 'admin') {
    navigate('/');
  }

  return <AccountManagementAdmin />;
};

export default AccountManagement;
