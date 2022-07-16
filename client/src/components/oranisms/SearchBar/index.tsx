import React, { useState } from 'react';
import * as UI from './style';
import Search from '../../molecules/Search/filterSearch/inputOnly';
// import FilterSearch from '../../molecules/Search/filterSearch';

const SearchBar = ({ setInputvalue }: any) => {
  return (
    <UI.Container>
      <Search setInputValue={setInputvalue} />
    </UI.Container>
  );
};

export default SearchBar;
