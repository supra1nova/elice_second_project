import React, { useState, useEffect } from 'react';
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

type valueObject = {
  [key: string]: any;
};

const AccountBookingCreate = () => {
  const initialValue = {
    inputREGNumber: '',
    inputStartAt: {
      inputYear: '',
      inputMonth: '',
      inputDate: '',
      inputHour: '',
    },
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

    if (target.type === 'select-one') {
      const index = target.options.selectedIndex;
      const text = target.options[index].text;
      setFormValues({ ...formValues, [name]: text });
    }
  };
  const handleSubmit = () => {};
  return (
    <UI.Container>
      <AccountHeader title={SECTION.RESERVATION_REGISTER} />
      <Form onSubmit={handleSubmit}>
        <UI.FormItem>
          <UI.FormColumn>
            <UI.FormInput>
              <DatePicker
                selected={selectStartData}
                onChange={(date: Date) => setSelectStartData(date)}
                minDate={new Date()}
                className={'datePicker'}
                dateFormat='yyyy/MM/dd'
                locale={ko}
                placeholderText={LABELTITLE.RESERVES_DATE}
              />
            </UI.FormInput>
            <UI.FormInput>
              <DatePicker
                selected={selectLastData}
                onChange={(date: Date) => setSelectLastData(date)}
                minDate={new Date()}
                className={'datePicker'}
                dateFormat='yyyy/MM/dd'
                locale={ko}
                placeholderText=''
              />
            </UI.FormInput>
          </UI.FormColumn>
          <UI.FormColumn>
            <UI.FormInput>
              <Select
                name='inputSelectOpenTime'
                options={SELECT_TIME}
                onChange={handleChange}
                id='inputSelectOpenTime'
                htmlFor='inputSelectOpenTime'
                labelTitle={LABELTITLE.OPEN_TIME}
              />
            </UI.FormInput>
            <UI.FormInput>
              <Select
                name='inputSelectCloseTime'
                options={SELECT_TIME}
                onChange={handleChange}
                id='inputSelectCloseTime'
                htmlFor='inputSelectCloseTime'
                labelTitle={LABELTITLE.CLOSE_TIME}
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
