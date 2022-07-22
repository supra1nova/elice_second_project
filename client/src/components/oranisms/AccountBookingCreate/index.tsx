import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import DatePicker from 'react-datepicker';
import { ko } from 'date-fns/esm/locale';
import * as API from '../../../api/api';
import AccountHeader from '../../molecules/AccountHeader';
import Select from '../../atoms/Select';
import Button from '../../atoms/Button';
import Form from '../../atoms/Form';
import FormInputTextHorizontal from '../../molecules/FormInputTextHorizontal';
import { SECTION } from '../../../constants/title';
import { SELECT_TIME, LABELTITLE, BUTTON } from '../../../constants/input';
import { ERROR } from '../../../constants/error';
import * as UI from './style';
import InputText from '../../atoms/InputText';
import FormInputText from '../../molecules/FormInputText';
import { yearsToMonths } from 'date-fns';

type valueObject = {
  [key: string]: any;
};

const StyleSelect = styled(Select)`
  display: block;
  background-position: calc(100% - 20px) calc(100% - 30%);
`;

const AccountBookingCreate = () => {
  const REGNumber = localStorage.getItem('REGNumber');

  const initialValue = {
    inputREGNumber: REGNumber,
    inputYear: '',
    inputMonth: '',
    inputDate: '',
    inputSelectHour: '10',
    inputRemainder: '',
    inputInitialRemainder: '',
  };
  const [formValues, setFormValues] = useState<valueObject>(initialValue);
  const [formErrors, setFormErrors] = useState<valueObject>({});
  const [isSubmit, setIsSubmit] = useState(false);
  const [selectDate, setSelectDate] = useState(new Date());

  const errors: valueObject = {};

  const handleChange = (e: any) => {
    const target = e.target;
    const value = target.value;
    const name = target.name;
    setFormValues({ ...formValues, [name]: value });
  };

  useEffect(() => {
    const date = selectDate.toLocaleDateString('ko-KR').split(' ');
    const year = date[0].slice(0, -1);
    const month = date[1].slice(0, -1);
    const day = date[2].slice(0, -1);

    setFormValues({
      ...formValues,
      inputYear: year,
      inputMonth: month,
      inputDate: day,
    });
  }, [selectDate]);

  console.log(formValues);

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    setFormErrors(validate(formValues));
    setIsSubmit(true);
    try {
      const data = {
        REGNumber: formValues.inputREGNumber,
        year: formValues.inputYear,
        month: formValues.inputMonth,
        date: formValues.inputDate,
        hour: formValues.inputSelectHour,
        remainder: formValues.inputRemainder,
        initialRemainder: formValues.inputRemainder,
      };
      await API.tokenPost('/api/times', '', data);
    } catch (err: any) {
      console.error(err);
    }
  };

  const validate = (values: any) => {
    const inputYearValue = values.inputYearValue;
    const inputSelectHourValue = values.inputSelectHour;
    const inputRemainderValue = values.inputRemainder;

    if (!inputYearValue) {
      errors.inputYearValue = '에러발생 1';
    }

    if (!inputSelectHourValue) {
      errors.inputSelectHourValue = '에러발생 2';
    }

    if (!inputRemainderValue) {
      errors.inputSelectHourValue = '에러발생 3';
    }
    return errors;
  };

  console.log(errors);

  return (
    <UI.Container>
      <AccountHeader title={SECTION.RESERVATION_REGISTER} />
      <Form onSubmit={handleSubmit}>
        <UI.FormItem>
          <UI.FormColumn>
            <UI.FormInput>
              <UI.FormLabel>{LABELTITLE.RESERVES_DATE}</UI.FormLabel>
              <UI.DatePicker>
                <DatePicker
                  selected={selectDate}
                  onChange={(date: Date) => setSelectDate(date)}
                  minDate={new Date()}
                  dateFormat='yyyy/MM/dd'
                  locale={ko}
                  placeholderText={LABELTITLE.RESERVES_DATE}
                />
              </UI.DatePicker>
            </UI.FormInput>
          </UI.FormColumn>
          <UI.FormColumn>
            <UI.FormInput>
              <StyleSelect
                name='inputSelectHour'
                options={SELECT_TIME}
                onChange={handleChange}
                id='inputSelectHour'
                htmlFor='inputSelectHour'
                labelTitle={LABELTITLE.RESERVE_TIME}
              />
            </UI.FormInput>
          </UI.FormColumn>
          <UI.FormColumn>
            <UI.FormInput>
              <FormInputText
                htmlFor='inputRemainder'
                labelTitle={LABELTITLE.REMAINDER}
                type='text'
                id='inputRemainder'
                name='inputRemainder'
                value={formValues.inputRemainder || ''}
                maxLength='3'
                autoComplete={undefined}
                onChange={handleChange}
                placeholder=''
              />
            </UI.FormInput>
          </UI.FormColumn>
          <UI.FormButton>
            <Button component='primary' size='small'>
              {BUTTON.REGISTER}
            </Button>
          </UI.FormButton>
        </UI.FormItem>
        <UI.FormItem>{errors.inputSelectHourValue}</UI.FormItem>
      </Form>
    </UI.Container>
  );
};

export default AccountBookingCreate;
