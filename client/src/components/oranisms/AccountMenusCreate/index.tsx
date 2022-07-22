import React, { useState } from 'react';
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

const REGNumber = localStorage.getItem('REGNumber');

const AccountMenusCreate = () => {
  const initialValue = {
    inputMenuName: '',
    inputMenuPrice: '',
    inputREGNumber: REGNumber,
    inputDescirption: '',
  };

  const [formValues, setFormValues] = useState<valueObject>(initialValue);
  const [formErrors, setFormErrors] = useState<valueObject>({});
  const [isSubmit, setIsSubmit] = useState(false);
  const errors: valueObject = {};

  const handleChange = (e: any) => {
    const target = e.target;
    const value =
      target.type === 'checkbox' || target.type === 'radio'
        ? target.checked
        : target.value;
    const name = target.name;
    setFormValues({ ...formValues, [name]: value });
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    setFormErrors(validate(formValues));
    setIsSubmit(true);
    try {
      const data = {
        REGNumber: formValues.inputREGNumber,
        name: formValues.inputMenuName,
        price: formValues.inputMenuPrice,
        description: formValues.inputDescirption,
      };
      console.log(data);
      await API.tokenPost('/api/menus', '', data);
    } catch (err: any) {
      console.error(err);
    }
  };

  const validate = (values: any) => {
    const inputMenuNameValue = values.inputMenuName;
    const inputMenuPrice = values.inputMenuPrice;

    if (!inputMenuNameValue) {
      errors.inputMenuNameValue = ERROR.MENU_INPUT;
    }

    if (!inputMenuPrice) {
      errors.inputMenuPrice = ERROR.PRICE_INPUT;
    }
    return errors;
  };

  const inputMenuData = {
    owner: [
      {
        htmlFor: 'inputMenuName',
        labelTitle: LABELTITLE.MENU_NAME,
        type: 'text',
        id: 'inputMenuName',
        name: 'inputMenuName',
        value: formValues.inputMenuName || '',
        maxLength: undefined,
        autoComplete: undefined,
        placeholder: '',
        onChange: handleChange,
        error: formErrors.inputMenuName,
      },
      {
        htmlFor: 'inputMenuPrice',
        labelTitle: LABELTITLE.PRICE,
        type: 'text',
        id: 'inputMenuPrice',
        name: 'inputMenuPrice',
        value: formValues.inputMenuPrice || '',
        maxLength: undefined,
        autoComplete: undefined,
        placeholder: '',
        onChange: handleChange,
        error: formErrors.inputMenuPrice,
      },
    ],
  };

  return (
    <UI.Container>
      <AccountHeader title={SECTION.MENU_REGISTER} />
      <Form onSubmit={handleSubmit}>
        <UI.FormItem>
          <UI.FormColumn>
            {inputMenuData.owner.map((item, index) => {
              return FormInputTextHorizontal(item, index);
            })}
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

export default AccountMenusCreate;
