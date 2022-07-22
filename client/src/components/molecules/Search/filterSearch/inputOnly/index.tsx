import React, { useEffect, useRef, useState } from 'react';
import * as UI from './style';
import * as Icon from '../../../../../assets/svg';

const SearchInput = ({ setInputValue }: any) => {
  let timer: any;
  const inputRef = useRef<HTMLInputElement>(null);

  // 검색페이지 이동 시 input focus
  useEffect(() => {
    if (inputRef.current !== null) inputRef.current.focus();
  }, []);

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
          }, 100);
        }}
        ref={inputRef}
      />
    </UI.EXContainer>
  );
};

export default SearchInput;
