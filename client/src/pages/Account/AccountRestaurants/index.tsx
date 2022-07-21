import React, { useState, useEffect } from 'react';
import * as API from '../../../api/api';
import AccountRestaurantsListUser from './template/AccountRestaurantsListUser';
import AccountRestaurantsListAdmin from './template/AccountRestaurantsListAdmin';
import AccountRestaurantsCreateOwner from './template/AccountRestaurantsCreateOwner';
import AccountRestaurantsSecurityOwner from './template/AccountRestaurantsSecurityOwner';

const AccountRestaurants = () => {
  const [role, setRole] = useState<string>();
  const REGNumber = localStorage.getItem('REGNumber');

  useEffect(() => {
    API.userGet('/api/users/user').then((res) => {
      console.log(res);
      setRole(res.role);
    });
  }, []);

  if (role === 'admin') {
    return <AccountRestaurantsListAdmin />;
  } else if (role === 'owner') {
    if (REGNumber) {
      return <AccountRestaurantsSecurityOwner />;
    } else {
      return <AccountRestaurantsCreateOwner />;
    }
  } else {
    return <AccountRestaurantsListUser />;
  }
};

export default AccountRestaurants;
