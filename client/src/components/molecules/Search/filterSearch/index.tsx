import React, { ReactEventHandler, useState, useRef, useEffect } from 'react';
import * as UI from './style';
import * as Icon from '../../../../assets/svg';
import LocationFilter from '../filterSearch/LocationFilter';
import PriceFilter from '../filterSearch/PriceFilter';
import TimeFilter from '../filterSearch/TimeFIlter';

interface Props {
  userSelection: String;
}

const tabs = ['날짜 / 인원', '위치', '가격'];

const FilterSearch = ({ userSelection }: Props) => {
  const [currTab, setCurrTab] = useState('');

  const searchInputRef = useRef<HTMLDivElement>(null);
  const [isSearchMode, setIsSearchMode] = useState<boolean>(false);

  useEffect(() => {
    function handleClickOutside(e: MouseEvent): void {
      if (
        searchInputRef.current &&
        !searchInputRef.current.contains(e.target as Node)
      ) {
        setIsSearchMode(false);
        setCurrTab('');
      } else {
        setIsSearchMode(true);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [searchInputRef]);

  function handleClick(tab: any): void {
    setCurrTab(tab);
    console.log(isSearchMode);
  }

  return (
    <div ref={searchInputRef}>
      <UI.EXContainer>
        <Icon.Search width={22} height={22} />
        <UI.Container>
          <UI.Input
            onClick={() => setCurrTab('')}
            placeholder='음식종류/ 식당 입력'
          />
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
      {isSearchMode ? (
        <>
          {currTab === '' && null}
          {currTab === '날짜 / 인원' && <TimeFilter></TimeFilter>}
          {currTab === '위치' && <LocationFilter></LocationFilter>}
          {currTab === '가격' && <PriceFilter></PriceFilter>}
        </>
      ) : null}
    </div>
  );
};

FilterSearch.defaultProps = {
  userSelection: '유저의 선택 결과',
};

export default FilterSearch;
