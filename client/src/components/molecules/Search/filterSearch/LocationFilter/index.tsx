import React, { useState } from 'react';
import * as UI from './style';
import * as Icon from '../../../../../assets/svg';

// timetable 옆에 버튼 있고 슬라이드하는거 어떻게 할까요...
// 선택된 것들을 모아서 검색창에 집어넣어야 함.
// => 모든 필터에서 집어넣고 form 으로 다시 모아서 검색 필터링 으ㅡ..

interface Props {
  dateSelect: String;
}

const timeTable = [
  '오전 10:00',
  '오전 11:00',
  '오후 12:00',
  '오후 13:00',
  '오후 14:00',
  '오후 15:00',
  '오후 16:00',
];

const LocationFilter = ({ dateSelect }: Props) => {
  const [timeSelect, setTimeSelect] = useState('');
  const [count, setCount] = useState(0);

  function handleSeeMore(e: React.MouseEvent<HTMLButtonElement, MouseEvent>) {
    e.preventDefault();
    // 달력
  }

  return (
    <UI.Container>
      <UI.Title></UI.Title>
      <UI.Divider />
    </UI.Container>
  );
};

export default LocationFilter;

LocationFilter.defaultProps = {
  dateSelect: '2022년 7월 20일',
};
