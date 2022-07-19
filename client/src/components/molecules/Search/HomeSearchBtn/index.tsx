import React, { useEffect, useRef, useState } from 'react';
import * as UI from './style';
import * as Icon from '../../../../assets/svg';
import { Link } from 'react-router-dom';

const HomeSearchBtn = ({ setInputValue }: any) => {
  let timer: any;

  return (
    <Link to='/search'>
      <UI.EXContainer>
        <Icon.Search width={22} height={22} />
        <UI.Text>찾으시는 가게, 음식종류 등의 키워드로 검색해보세요.</UI.Text>
      </UI.EXContainer>
    </Link>
  );
};

export default HomeSearchBtn;
