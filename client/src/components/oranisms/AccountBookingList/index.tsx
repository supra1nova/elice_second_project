import React from 'react';
import * as API from '../../../api/api';
import AccountHeader from '../../molecules/AccountHeader';
import Form from '../../atoms/Form';
import FormInputTextHorizontal from '../../molecules/FormInputTextHorizontal';
import { SECTION } from '../../../constants/title';
import { LABELTITLE, BUTTON } from '../../../constants/input';
import { ERROR } from '../../../constants/error';
import * as UI from './style';
import Button from '../../atoms/Button';
import BookingList from '../../molecules/BookingList'

type valueObject = {
  [key: string]: any;
};

const AccountBookingList = () => {
  const handleSubmit = () => {};
  return (
    <UI.Container>
      <AccountHeader title={SECTION.RESERVATION_MANAGEMENT} />
      <BookingList />
    </UI.Container>
  );
};

export default AccountBookingList;
