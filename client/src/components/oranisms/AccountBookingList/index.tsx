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
import ReserveList from '../../molecules/ReserveList'

type valueObject = {
  [key: string]: any;
};

const AccountBookingList = () => {
  const handleSubmit = () => {};
  return (
    <UI.Container>
      <AccountHeader title={SECTION.RESERVATION_MANAGEMENT} />
      <UI.StyledText>* 예약자가 있을 시 삭제가 불가능합니다.</UI.StyledText>
      <ReserveList />
    </UI.Container>
  );
};

export default AccountBookingList;
