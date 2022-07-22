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

type valueObject = {
  [key: string]: any;
};

const StyleSelect = styled(Select)`
  display: block;
  background-position: calc(100% - 20px) calc(100% - 30%);
`;

const AccountBookingCreate = () => {
  const initialValue = {
    inputREGNumber: '',
    inputYear: '',
    inputMonth: '',
    inputDate: '',
    inputHour: '',
    inputRemainder: '',
    inputInitialRemainder: '',
  };
  const [formValues, setFormValues] = useState<valueObject>(initialValue);
  const [formErrors, setFormErrors] = useState<valueObject>({});
  const [selectStartData, setSelectStartData] = useState(new Date());
  const [selectLastData, setSelectLastData] = useState(new Date());

  const handleChange = (e: any) => {
    const target = e.target;
    const value =
      target.type === 'checkbox' || target.type === 'radio'
        ? target.checked
        : target.value;
    const name = target.name;
    setFormValues({ ...formValues, [name]: value });
  };
  const handleSubmit = (e: any) => {
    e.prevendDefault();

    const data = {
      REGNumber: formValues.inputREGNumber,
      year: formValues.inputYear,
      month: formValues.inputMonth,
      date: formValues.inputDate,
      hour: formValues.inputHour,
      remainder: formValues.inputRemainder,
      initialRemainder: formValues.inputRemainder,
    };

    console.log(data);
  };

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
                  selected={selectStartData}
                  onChange={(date: Date) => setSelectStartData(date)}
                  minDate={new Date()}
                  dateFormat='yyyy/MM/dd'
                  locale={ko}
                  placeholderText={LABELTITLE.RESERVES_DATE}
                />
              </UI.DatePicker>
            </UI.FormInput>
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
          <UI.FormColumn>
            <UI.FormInput>
              <StyleSelect
                name='inputSelectOpenTime'
                options={SELECT_TIME}
                onChange={handleChange}
                id='inputSelectOpenTime'
                htmlFor='inputSelectOpenTime'
                labelTitle={LABELTITLE.OPEN_TIME}
              />
            </UI.FormInput>
          </UI.FormColumn>
          <UI.FormButton>
            <Button component='primary' size='small'>
              {BUTTON.REGISTER}
            </Button>
          </UI.FormButton>
        </UI.FormItem>
      </Form>
    </UI.Container>
  );
};

export default AccountBookingCreate;
