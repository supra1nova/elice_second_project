import React, { useState, useEffect, useRef } from 'react';
import * as UI from './style';
import SearchBar from '../../components/oranisms/SearchBar';
import Category from '../../components/molecules/Category';
import SearchShopList from '../../components/oranisms/SearchList';
import HomeList from '../../components/oranisms/HomeList';

const SearchHome = () => {
  const [inputValue, setInputValue] = useState('');
  const [select, setSelect] = useState('');

  return (
    <UI.Container>
      <SearchBar setInputvalue={setInputValue} />
      <Category setSelect={setSelect} />

      {select !== '' ? (
        <SearchShopList categorySelect={select} />
      ) : inputValue !== '' ? (
        <SearchShopList inputValue={inputValue} />
      ) : (
        <SearchShopList inputValue={inputValue} categorySelect={select} />
      )}
    </UI.Container>
  );
};

export default SearchHome;
