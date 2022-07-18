import React, { useState, useEffect } from 'react';
import * as UI from './style';
import SearchBar from '../../../components/oranisms/SearchBar';
import Category from '../../../components/molecules/Category';
import SearchShopList from '../../../components/oranisms/SearchList';
import * as API from '../../../api/api';

const SearchHome = () => {
  const [inputValue, setInputValue] = useState('');

  return (
    <UI.Container>
      <SearchBar setInputvalue={setInputValue} />
      <Category />
      <SearchShopList inputValue={inputValue} />
    </UI.Container>
  );
};

export default SearchHome;
