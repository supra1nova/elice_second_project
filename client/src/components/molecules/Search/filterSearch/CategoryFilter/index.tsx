import React from 'react';
import * as UI from './style';
import * as Icon from '../../../../../assets/svg';

const CategoryFilter = () => {
  return (
    <UI.EXContainer>
      <Icon.Search width={22} height={22} />
      <UI.Container>
        <UI.Input type='text' />
        <UI.FilterBtn>검색필터</UI.FilterBtn>
        <UI.SearchBtn>검색</UI.SearchBtn>
      </UI.Container>
    </UI.EXContainer>
  );
};

export default CategoryFilter;
