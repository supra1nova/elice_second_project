import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import * as API from '../../../api/api';
import AccountLikesUser from './template/AccountLikesUser';

const AccountLikes = () => {
  const navigate = useNavigate();
  const [regNumber, setRegNumber] = useState<any>([]);
  const [wishes, setWishes] = useState();
  const [change, setChange] = useState(false);

  const getData = async () => {
    const email = await API.userGet('/api/users/user').then((res) => res.email);
    const wishList = await API.get(`/api/wishes/${email}`);
    setWishes(wishList);
    const wishRegNumber = wishList.map(
      (item: { REGNumber: string }) => item.REGNumber,
    );
    const filtered = new Set(wishRegNumber);
    const filteredArr = Array.from(filtered);
    setRegNumber(filteredArr);
  };
  useEffect(() => {
    getData();
  }, [change]);

  if (!localStorage.getItem('token')) {
    navigate('/');
  }

  return (
    <AccountLikesUser
      setChange={setChange}
      change={change}
      wishes={wishes}
      regNumber={regNumber}
    />
  );
};

export default AccountLikes;
