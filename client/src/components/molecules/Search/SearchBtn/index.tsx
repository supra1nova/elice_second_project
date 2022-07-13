import * as Icon from '../../../../assets/svg';
import * as UI from './style';
import { useState } from 'react';

//main 의 검색창 클릭시 filter가 포함된 input으로 전환

const Search = () => {
  return (
    <UI.Container>
      <Icon.Search width={22} height={22} />
      <UI.InputBtn>
        원하는 날짜,지역,인원에 맞춰 식당을 검색해 보세요.
      </UI.InputBtn>
    </UI.Container>
  );
};

export default Search;
