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

type valueObject = {
  [key: string]: any;
};

const AccountBookingCreate = () => {
  const handleSubmit = () => {};
  return (
    <UI.Container>
      <AccountHeader title={SECTION.RESERVATION_REGISTER} />
      <Form onSubmit={handleSubmit}>
        <UI.FormItem>
          <UI.FormColumn></UI.FormColumn>
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
