import React, { useState } from 'react';
import * as UI from './style';
import * as Icon from '../../../../../assets/svg';

// timetable 옆에 버튼 있고 슬라이드하는거 어떻게 할까요...
// 선택된 것들을 모아서 검색창에 집어넣어야 함.
// => 모든 필터에서 집어넣고 form 으로 다시 모아서 검색 필터링 으ㅡ..

const mockData: { [key: string]: Array<string> } = {
  서울: [
    '강남/역삼/삼성',
    '서초/교대/방배',
    '사당',
    '신사/압구정/청담',
    '신사/압구정/청담',
    '신사/압구정/청담',
    '신사/압구정/청담',
    '신사/압구정/청담',
    '신사/압구정/청담',
    '신사/압구정/청담',
    '신사/압구정/청담',
  ],
  부산: ['1', '2', '3', '4', '5', '6'],
  제주: [
    '강남/역삼/삼성',
    '서초/교대/방배',
    '사당',
    '신사/압구정/청담',
    '잠실',
    '송파',
    '서울역',
    '이태원',
    '용산',
    '명구',
    '중구',
  ],
  강원: ['1', '2', '3', '4', '5', '6'],
  경기: ['1', '2', '3', '4', '5', '6'],
  대구: ['1', '2', '3', '4', '5', '6'],
  test1: ['1', '2', '3', '4', '5', '6'],
  test2: ['1', '2', '3', '4', '5', '6'],
  test3: ['1', '2', '3', '4', '5', '6'],
};

const address1 = Object.keys(mockData);
console.log(address1);

const LocationFilter = () => {
  const [currAddress1, setCurrAddress1] = useState('제주');
  const [currAddress2, setCurrAddress2] = useState('');
  const [address2, setAddress2] = useState<string[]>(mockData['제주']);
  console.log(address2);
  return (
    <UI.Container>
      <UI.Title>지역 선택</UI.Title>
      <UI.Divider />
      <UI.LocationWrapper>
        <UI.Address1Wrapper>
          {address1.map((item, idx) => {
            return (
              <UI.ButtonWrapper
                key={`${item}-${idx}`}
                active={item === currAddress1}
                onClick={() => {
                  setCurrAddress1(item);
                  setAddress2(mockData[item]);
                }}
              >
                {item}
              </UI.ButtonWrapper>
            );
          })}
        </UI.Address1Wrapper>
        <UI.Address2Wrapper>
          {address2.map((item, idx) => {
            return (
              <UI.ButtonWrapper
                key={`${item}-${idx}`}
                active={item === currAddress2}
                onClick={() => {
                  setCurrAddress2(item);
                }}
              >
                {item}
              </UI.ButtonWrapper>
            );
          })}
        </UI.Address2Wrapper>
      </UI.LocationWrapper>
    </UI.Container>
  );
};

export default LocationFilter;
