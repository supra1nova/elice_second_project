import React, { useState, useEffect } from 'react';
import * as UI from './style';
import SearchBar from '../../../components/oranisms/SearchBar';
import Category from '../../../components/molecules/Category';
import SearchShopList from '../../../components/oranisms/SearchList';
import * as API from '../../../api/api';

const SearchHome = () => {
  const [inputValue, setInputValue] = useState('');
  const [userEmail, setUserEmail] = useState('');
  useEffect(() => {
    API.userGet('/api/users/user').then((res) => setUserEmail(res.email));
  }, []);

  return (
    <UI.Container>
      <SearchBar setInputvalue={setInputValue} />
      <Category />
      <SearchShopList userEmail={userEmail} inputValue={inputValue} />
    </UI.Container>
  );
};

export default SearchHome;
