import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import * as API from '../../../api/api';
import AccountMenusOwner from './template/AccountMenusOwner';

const AccountMenus = () => {
  const navigate = useNavigate();
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

  return <>{role === 'owner' ? <AccountMenusOwner /> : <Navigate />}</>;
};

export default AccountMenus;
