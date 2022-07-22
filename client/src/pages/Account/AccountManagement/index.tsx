import React, { useState, useEffect } from 'react';
import * as API from '../../../api/api';
import AccountManagementAdmin from './template/AccountManagementAdmin';

const AccountManagement = () => {
  const [role, setRole] = useState<string>();
  useEffect(() => {
    API.userGet('/api/users/user').then((res) => {
      setRole(res.role);
    });
  }, []);

  const Navigate = () => {
    window.location.href = '/';
    return <></>;
  };

  return <>{role === 'admin' ? <AccountManagementAdmin /> : <Navigate />}</>;
};

export default AccountManagement;
