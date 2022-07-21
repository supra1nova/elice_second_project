import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import PopupContainer from '../../../Popup/PopupContainer';
import PopupHeader from '../../../Popup/PopupHeader';
import PopupContents from '../../../Popup/PopupContents';
import PopupFooter from '../../../Popup/PopupFooter';
import { POPUP } from '../../../../../constants/title';
import * as UI from './style';
import * as Icon from '../../../../../assets/svg';
import './App.css';
import * as API from '../../../../../api/api';
import Button from '../../../../atoms/Button';
import { ERROR } from '../../../../../constants/error';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

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

type valueObject = {
  [key: string]: any;
};

const PopupReserve = ({ open, onClose, width, titleColor, title }: Props) => {
  const navigate = useNavigate();
  const initialValue = {
    timeId: 0,
    email: '',
    number: 0,
    REGNumber: '',
    comment: '',
    phoneNumber: '',
    name: '',
  };

  const REGNumber = window.location.href.split('/')[5];

  const [formErrors, setFormErrors] = useState<valueObject>({});
  const [formValues, setFormValues] = useState<valueObject>(initialValue);
  const [isSubmit, setIsSubmit] = useState(false);
  const [timeSelect, setTimeSelect] = useState('');
  const [count, setCount] = useState(0);
  const [booker, setBooker] = useState({
    name: '',
    phoneNumber: '',
  });
  const [selectDate, setSelectDate] = useState(new Date());

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

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    setFormErrors(validate(formValues));
    setIsSubmit(true);
    try {
      const data = {};
      await API.post('/api/reserves/', '', data);

      navigate('/');
    } catch (err: any) {
      console.error(err);
    }
  };

  useEffect(() => {
    API.userGet('/api/users/user').then((res) => {
      if(res) {
        setBooker(res);
      }
    });
    API.get(`/api/times/?REGNumber=57672-53532&year=2022&month=8&date=26`).then((res) => {
      console.log(res)
    });

    // Time테이블 목록 불러오기
    // API.get(`/api/times/?REGNumber=${REGNumber}&year=2022&month=8&date=`).then((res) => {
    //     const startData = res[0]
    //     const lastData = res.slice(-1)
        
    //     setStart(startData)
    //     setLast(lastData[0])
    //   });
    }, []);

    useEffect(() => {
      const data = selectDate.toLocaleDateString('ko-KR').split(' ')
      const year = data[0].slice(0, -1)
      const month = data[1].slice(0, -1)
      const date = data[2].slice(0, -1)
      API.get(`/api/times/?REGNumber=${REGNumber}&year=${year}&month=${month}&date=${date}`).then((res) => {
        // console.log(res)
      });
    }, [selectDate])

  const validate = (values: any) => {
    const errors: valueObject = {};
    const isInputIdValue = values.inputTime;
    const isInputNumberValue = values.inputNumber === 0;
    const isInputBookerNameValue = values.inputBookerName;
    const isInputBookerPhoneNumberValue = values.inputBookerPhoneNumber;

    if (!isInputIdValue) {
      errors.inputTime = ERROR.TIME_INPUT;
    }
    if (!isInputNumberValue) {
      errors.inputNumber = ERROR.NUMBER_INPUT;
    }
    if (!isInputBookerNameValue) {
      errors.inputBookerName = ERROR.RESERVE_PHONE_INPUT;
    }
    if (!isInputBookerPhoneNumberValue) {
      errors.inputBookerPhoneNumber = ERROR.RESERVE_NAME_INPUT;
    }

    return errors;
  };

  return (
    <PopupContainer open={open} width={width} paddingBottom={'20'}>
      <PopupHeader title={title} onClose={onClose} titleColor={titleColor} />

      <UI.FormContainer onSubmit={handleSubmit}>
        <label>
          <UI.FormCategory>
            <Icon.Calender width={16} height={17.6} fill={'black'} />
            <div style={{marginLeft: 10}}>
              <DatePicker 
                  selected={selectDate}
                  onChange={(date:Date) => setSelectDate(date)} 
                  // minDate={startDate}
                  // maxDate={lastDate}
                  className={'datePicker'}
              />
            </div>
          </UI.FormCategory>
        </label>

        <UI.Divider />

        <label>
          <UI.FormCategory>
            <Icon.Clock width={16} height={16} fill={'black'} />
            <UI.FormName>시간 선택</UI.FormName>
          </UI.FormCategory>
          <UI.TimeWrapper>
            {timeTable.map((time, idx) => {
              return (
                <UI.TimeSelectButton
                  key={`${time}-${idx}`}
                  active={timeSelect === time}
                  onClick={() => handleClickTime(time)}
                  type='button'
                >
                  {time}
                </UI.TimeSelectButton>
              );
            })}
          </UI.TimeWrapper>
          <UI.TimeLegend>
            <UI.SelectBox></UI.SelectBox>
            <span>선택</span>
            <UI.NoneBox></UI.NoneBox>
            <span>불가</span>
          </UI.TimeLegend>
        </label>

        <UI.Divider />

        <label>
          <UI.FormCategory>
            <Icon.Person width={16} height={16} fill={'black'} />
            <UI.FormName>인원 선택</UI.FormName>
          </UI.FormCategory>
          <UI.CountWrapper>
            <UI.ButtonWrapper onClick={onDecrease} type='button'>
              <Icon.PlusButton width={28} height={28}></Icon.PlusButton>
            </UI.ButtonWrapper>
            {count}
            <UI.ButtonWrapper onClick={onIncrease} type='button'>
              <Icon.MinusButton width={28} height={28}></Icon.MinusButton>
            </UI.ButtonWrapper>
          </UI.CountWrapper>
        </label>

        <UI.Divider />

        <label>
          <div>예약자 정보</div>
          <UI.BookerInfo>
            <div>
              <span>예약자</span>
              <UI.StyledInput type="text" name="name" value={booker.name} />
            </div>
            <div>
              <span>연락처</span>
              <UI.StyledInput type="text" name="name" value={booker.phoneNumber} />
            </div>
            <div>
              <span>요청사항</span>
              <UI.StyledTextarea placeholder='식당에 요청하실 내용을 적어주세요' rows={2}>
              </UI.StyledTextarea>
            </div>
          </UI.BookerInfo>
        </label>

        <UI.Divider />

        <Button component={'primary'} size={'large'} block>
          예약하기
        </Button>
      </UI.FormContainer>
    </PopupContainer>
  );
};

export default PopupReserve;
