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

const TimeFilter = ({ dateSelect }: Props) => {
  const [timeSelect, setTimeSelect] = useState('');
  const [count, setCount] = useState(0);

  function handleSeeMore(e: React.MouseEvent<HTMLButtonElement, MouseEvent>) {
    e.preventDefault();
    // 달력
  }

  function handleClickTime(time: any) {
    setTimeSelect(time);
  }

  function onIncrease() {
    setCount((prev) => prev + 1);
  }

  function onDecrease() {
    if (count <= 0) {
      return;
    }
    setCount((prev) => prev - 1);
  }
  return (
    <UI.Container>
      <UI.Title>
        <Icon.Calender width={16} height={17.6} fill={'black'} />
        {dateSelect}
        <UI.ButtonWrapper onClick={handleSeeMore}>
          <Icon.ArrowButton width={24} height={24}></Icon.ArrowButton>
        </UI.ButtonWrapper>
      </UI.Title>

      <UI.Divider />

      <UI.Title>
        <Icon.Clock width={16} height={16} fill={'black'} />
        시간 선택
      </UI.Title>
      <UI.TimeWrapper>
        {timeTable.map((time, idx) => {
          return (
            <UI.TimeSelectButton
              key={`${time}-${idx}`}
              active={timeSelect === time}
              onClick={() => handleClickTime(time)}
            >
              {time}
            </UI.TimeSelectButton>
          );
        })}
        <UI.ButtonWrapper onClick={handleSeeMore}>
          <Icon.ArrowButton width={24} height={24}></Icon.ArrowButton>
        </UI.ButtonWrapper>
      </UI.TimeWrapper>

      <UI.Divider />

      <UI.Title>
        <Icon.Person width={16} height={16} fill={'black'} />
        인원 선택
      </UI.Title>
      <UI.CountWrapper>
        <UI.ButtonWrapper onClick={onDecrease}>
          <Icon.PlusButton width={28} height={28}></Icon.PlusButton>
        </UI.ButtonWrapper>
        {count}
        <UI.ButtonWrapper onClick={onIncrease}>
          <Icon.MinusButton width={28} height={28}></Icon.MinusButton>
        </UI.ButtonWrapper>
      </UI.CountWrapper>
    </UI.Container>
  );
};

export default TimeFilter;

TimeFilter.defaultProps = {
  dateSelect: '2022년 7월 20일',
};
