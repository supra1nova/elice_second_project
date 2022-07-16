import * as Icon from '../../../../assets/svg';
import * as UI from './style';
import { useState } from 'react';

//main 의 검색창 클릭시 filter가 포함된 input으로 전환
//검색 클릭 시 검색페이지 경로 하나 추가해야 할듯 (필터링 정보들 스토리지에 담아서 요청 혹은 state?)
//main 은 그냥 추천 리스트

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
