import React, { ReactEventHandler, useState } from 'react';
import * as UI from './style';
import * as Icon from '../../../../assets/svg';
import TimeFilter from '../filterSearch/TimeFIlter';

interface Props {
  userSelection: String;
}

const tabs = ['날짜 / 인원', '위치', '가격'];

const FilterSearch = ({ userSelection }: Props) => {
  const [currTab, setCurrTab] = useState('날짜 / 인원');

  function handleClick(tab: any): void {
    setCurrTab(tab);
  }

  return (
    <>
      <UI.EXContainer>
        <Icon.Search width={22} height={22} />
        <UI.Container>
          <UI.Input placeholder='음식종류/ 식당 입력' />
          {tabs.map((tab, i) => {
            return (
              <UI.SelectBtn
                key={`${tab} - ${i}`}
                active={currTab === tab}
                onClick={() => handleClick(tab)}
              >
                {tab}
                <UI.BtnSubTtile>{userSelection}</UI.BtnSubTtile>
              </UI.SelectBtn>
            );
          })}
          <UI.SearchBtn>검색</UI.SearchBtn>
        </UI.Container>
      </UI.EXContainer>
      {currTab === '날짜 / 인원' && <TimeFilter></TimeFilter>}
    </>
  );
};

FilterSearch.defaultProps = {
  userSelection: '유저의 선택 결과',
};

export default FilterSearch;
