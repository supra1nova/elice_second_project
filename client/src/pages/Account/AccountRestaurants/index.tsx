import React, { useState, useEffect } from 'react';
import AccountRestaurantsCreate from './template/AccountRestaurantsCreate';
import AccountRestaurantsSecurity from './template/AccountRestaurantsSecurity';

const AccountRestaurants = () => {
  const REGNumber = localStorage.getItem('REGNumber');
  console.log(REGNumber);
  if (REGNumber) {
    return <AccountRestaurantsSecurity />;
  } else {
    return <AccountRestaurantsCreate />;
  }
};

export default AccountRestaurants;
