import React, { useEffect, useRef, useState } from 'react';
import * as UI from './style';
import * as Icon from '../../../../../assets/svg';

const SearchInput = ({ setInputValue }: any) => {
  let timer: any;

  return (
    <UI.EXContainer>
      <Icon.Search width={22} height={22} />
      <UI.Input
        placeholder='찾으시는 가게, 음식종류 등의 키워드로 검색해보세요.'
        onChange={(e) => {
          if (timer) {
            clearTimeout(timer);
          }
          timer = setTimeout(function () {
            setInputValue(e.target.value);
          }, 300);
        }}
      />
    </UI.EXContainer>
  );
};

export default SearchInput;
