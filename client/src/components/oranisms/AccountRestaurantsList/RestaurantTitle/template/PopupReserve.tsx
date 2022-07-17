import React, { useState } from 'react';
import PopupContainer from '../../../Popup/PopupContainer';
import PopupHeader from '../../../Popup/PopupHeader';
import PopupContents from '../../../Popup/PopupContents';
import PopupFooter from '../../../Popup/PopupFooter';
import { POPUP } from '../../../../../constants/title';
import * as UI from './style';
import * as Icon from '../../../../../assets/svg';

interface Props {
  open: boolean;
  onClose: any;
  onClick?: any;
  width: string;
  titleColor: boolean;
  title: string;
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

const PopupReserve = ({ open, onClose, onClick, width, titleColor, title }: Props) => {
  const [timeSelect, setTimeSelect] = useState('');
  const [count, setCount] = useState(0);

  function handleClickTime(time: any) {
    setTimeSelect(time);
  }

  function handleSeeMore(e: React.MouseEvent<HTMLButtonElement, MouseEvent>) {
    e.preventDefault();
    // 달력
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
    <PopupContainer 
      open={open}
      width={width}
    >
      <PopupHeader
        title={title}
        onClose={onClose}
        titleColor={titleColor}
      />

      <UI.FormContainer>
        <label>
          <Icon.Calender width={16} height={17.6} fill={'black'} />
          <input type="date" name="name" />
        </label>

        <UI.Divider />

        <label>
          <Icon.Clock width={16} height={16} fill={'black'} />
          시간 선택
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
          </UI.TimeWrapper>
          <div>
            <div></div>
            <span>선택</span>
            <div></div>
            <span>불가</span>
          </div>
        </label>

        <UI.Divider />

        <label>
          <Icon.Person width={16} height={16} fill={'black'} />
          인원 선택
          <UI.CountWrapper>
            <UI.ButtonWrapper onClick={onDecrease}>
              <Icon.PlusButton width={28} height={28}></Icon.PlusButton>
            </UI.ButtonWrapper>
            {count}
            <UI.ButtonWrapper onClick={onIncrease}>
              <Icon.MinusButton width={28} height={28}></Icon.MinusButton>
            </UI.ButtonWrapper>
          </UI.CountWrapper>
        </label>

        <UI.Divider />

        <label>
          <div>예약자 정보</div>
          예약자
          <input type="text" name="name" />
          연락처
          <input type="text" name="name" />
          요청사항
          <textarea placeholder='식당에 요청하실 내용을 적어주세요'>
          </textarea>
        </label>

        <UI.Divider />

        <input type="submit" value="Submit" />
      </UI.FormContainer>
    </PopupContainer>
  );
};

export default PopupReserve;