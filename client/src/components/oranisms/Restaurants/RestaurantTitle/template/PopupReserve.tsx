import React, { useState, useEffect, useRef } from 'react';
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
import { ko } from "date-fns/esm/locale";

interface Props {
  open: boolean;
  onClose: any;
  onClick?: any;
  width: string;
  titleColor: boolean;
  title: string;
}

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
  const [booker, setBooker] = useState<valueObject>({
    name: '',
    phoneNumber: ''
  });
  const [selectDate, setSelectDate] = useState(new Date());
  const [timeTable, setTimetable] = useState<string[]>([])
  const [reserveDate, setReserveDate] = useState<valueObject>({
    year: 0,
    month: 0,
    date: 0,
    hour: 0
  })

  // ----- 예약시간 선택 ----------------
  function handleClickTime(time: any) {
    setTimeSelect(time);
    
    const sliceTime = time.slice(3, 5)
    setReserveDate({...reserveDate, hour: sliceTime})
  }
  // ---------------------------------

  // ----- 인원 선택 ----------------
  function onIncrease() {
    setCount((prev) => prev + 1);
    setFormValues({ ...formValues, number: count + 1 });
  }

  function onDecrease() {
    if (count <= 0) {
      return;
    }
    setCount((prev) => prev - 1);
    setFormValues({ ...formValues, number: count - 1 });
  }
  // ---------------------------------

  const handleChange = (e: any) => {
    const { name, value} = e.target;
    setFormValues({ ...formValues, [name]: value });
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();

    setFormErrors(validate(formValues));
    setIsSubmit(true);

    try {
      const data = {
        timeId: formValues.timeId,
        email: formValues.email,
        number: formValues.number,
        REGNumber: formValues.REGNumber,
        comment: formValues.comment,
        phoneNumber: formValues.phoneNumber,
        name: formValues.name,
      };

      await API.post('/api/reserves', '', data);
      navigate('/account/reserves');
    } catch (err: any) {
      console.error(err);
    }
  };

  useEffect(() => {
    API.userGet('/api/users/user').then((res) => {
      if(res) {
        const name = res.name
        const phoneNumber = res.phoneNumber
        const email = res.email

        setBooker({...booker, name, phoneNumber});
        setFormValues({ ...formValues, email, phoneNumber, name, REGNumber});
      }
    });

    // Time테이블 전체 목록 불러오기
    // API.get(`/api/times/?REGNumber=${REGNumber}&year=2022&month=8&date=`).then((res) => {
    //     const startData = res[0]
    //     const lastData = res.slice(-1)
        
    //     setStart(startData)
    //     setLast(lastData[0])
    //   });
    }, []);

    // ----- 타임테이블 ----------------
    useEffect(() => {
      setTimetable([])

      const data = selectDate.toLocaleDateString('ko-KR').split(' ')
      const year = data[0].slice(0, -1)
      const month = data[1].slice(0, -1)
      const date = data[2].slice(0, -1)

      setReserveDate({...reserveDate, year, month, date})

      API.get(`/api/times/?REGNumber=${REGNumber}&year=${year}&month=${month}&date=${date}&`).then((res) => {
        console.log(res)
        if(res) {
          res.forEach((data: any) => {
            data.hour >= 12
            ? setTimetable((time: any) => [...time, `오후 ${data.hour}:00`])
            : setTimetable((time: any) => [...time, `오전 ${data.hour}:00`])
          })
        }
      });
    }, [selectDate])
    // ---------------------------------

    useEffect(() => {
      API.get(`/api/times/?REGNumber=${REGNumber}&year=${reserveDate.year}&month=${reserveDate.month}&date=${reserveDate.date}&`).then((res) => {
        if(res.length > 0) {
          const timeIdIndex = res.findIndex((list: any) => list.hour === parseInt(reserveDate.hour))
          setFormValues({ ...formValues, timeId: res[timeIdIndex].timeId });
        }
      });
    }, [reserveDate])

    useEffect(() => {
      console.log(formErrors);
      if (Object.keys(formErrors).length === 0 && isSubmit) {
        console.log(formValues);
      }
    }, [formErrors]);

  const validate = (values: any) => {
    const errors: valueObject = {};
    const isInputIdValue = values.timeId === 0;
    const isInputNumberValue = values.number === 0;

    if (isInputIdValue) {
      errors.inputTime = ERROR.TIME_INPUT;
    }
    if (isInputNumberValue) {
      errors.inputNumber = ERROR.NUMBER_INPUT;
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
                  minDate={new Date()} 
                  // minDate={startDate}
                  // maxDate={lastDate}
                  className={'datePicker'}
                  dateFormat="yyyy/MM/dd"
                  locale={ko}
                  placeholderText="예약 날짜 선택"
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
              <UI.StyledInput type="text" name="name" onChange={handleChange} defaultValue={booker.name} placeholder='예약자 성함을 입력해주세요' />
            </div>
            <div>
              <span>연락처</span>
              <UI.StyledInput type="text" name="phoneNumber" onChange={handleChange} defaultValue={booker.phoneNumber} placeholder='예약자 연락처를 입력해주세요' />
            </div>
            <div>
              <span>요청사항</span>
              <UI.StyledTextarea name="comment" onChange={handleChange} placeholder='식당에 요청하실 내용을 적어주세요' rows={2}>
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
