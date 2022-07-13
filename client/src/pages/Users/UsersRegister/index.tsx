import React, { useState, useEffect } from 'react';
import InputText from '../../../components/atoms/InputText';
import InputSwitch from '../../../components/atoms/InputSwitch';
import Form from '../../../components/atoms/Form';
import FormHeader from '../../../components/molecules/FormHeader';
import FormItem from '../../../components/molecules/FormItem';
import FormInput from '../../../components/molecules/FormInput';
import FormError from '../../../components/molecules/FromError';
import FormFooter from '../../../components/molecules/FormFooter';
import Button from '../../../components/atoms/Button';
import { PAGES } from '../../../constants/title';
import { LABELTITLE, PLACEHOLDER } from '../../../constants/input';
import { ERROR } from '../../../constants/error';
import { validateEmail } from '../../../functions';
import * as UI from './style';

type valueObject = {
  [key: string]: any;
};

const UsersRegister = () => {
  const initialValue: valueObject = {
    inputId: '',
    inputNickname: '',
    inputEmail: '',
    inputPassword: '',
    inputPasswordConfirm: '',
    inputPhone: '',
  };
  const [formValues, setFormValues] = useState(initialValue);
  const [formErrors, setFormErrors] = useState<valueObject>({});
  const [isSubmit, setIsSubmit] = useState(false);

  const handleChange = (e: any) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    setFormErrors(validate(formValues));
    setIsSubmit(true);
  };

  useEffect(() => {
    console.log(formErrors);
    if (Object.keys(formErrors).length === 0 && isSubmit) {
      console.log(formValues);
    }
  }, [formErrors]);

  const validate = (values: any) => {
    const errors: valueObject = {};
    const isInputIdValue = values.inputId;
    const isInputNicknameValue = values.inputNickname;
    const isInputEmailValue = values.inputEmail;
    const isInputPasswordValue = values.inputPassword;
    const isInputPasswordConfirmValue = values.inputPasswordConfirm;
    const isInputPhoneValue = values.inputPhone;

    const isValidEmail = validateEmail(values.inputId);
    const isMinPasswordLength = isInputPasswordValue.length >= 8;

    if (!isInputIdValue) {
      errors.inputId = ERROR.ID_INPUT;
    } else if (!isValidEmail) {
      errors.inputId = ERROR.ID_EMAIL_VALID;
    }

    if (!isInputNicknameValue) {
      errors.inputPassword = ERROR.NICKNAME_INPUT;
    } else if (!isMinPasswordLength) {
      errors.inputPassword = ERROR.NICKNAME_IS_ALEADY;
    }

    if (!isInputEmailValue) {
      errors.inputPassword = ERROR.EMAIL_INPUT;
    } else if (!isMinPasswordLength) {
      errors.inputPassword = ERROR.EMAIL_VALID;
    }

    if (!isInputPasswordValue) {
      errors.inputPassword = ERROR.PASSWORD_INPUT;
    } else if (!isMinPasswordLength) {
      errors.inputPassword = ERROR.PASSWORD_MIN_LENGTH;
    }

    if (!isInputPasswordConfirmValue) {
      errors.inputPassword = ERROR.PASSWORD_INPUT;
    } else if (!isMinPasswordLength) {
      errors.inputPassword = ERROR.PASSWORD_SAME;
    }

    if (!isInputPhoneValue) {
      errors.inputPassword = ERROR.PHONE_INPUT;
    } else if (!isMinPasswordLength) {
      errors.inputPassword = ERROR.PHONE_VALID;
    }

    return errors;
  };

  const inputData = [
    {
      htmlFor: 'inputId',
      labelTitle: LABELTITLE.ID,
      type: 'text',
      id: 'inputId',
      name: 'inputId',
      value: formValues.inputId,
      maxLength: undefined,
      autoComplete: undefined,
      onChange: handleChange,
      placeholder: PLACEHOLDER.ID,
      error: formErrors.inputId,
    },
    {
      htmlFor: 'inputNickname',
      labelTitle: LABELTITLE.NICKNAME,
      type: 'text',
      id: 'inputNickname',
      name: 'inputNickname',
      value: formValues.inputNickname,
      maxLength: 10,
      autoComplete: undefined,
      onChange: handleChange,
      placeholder: PLACEHOLDER.NICKNAME,
      error: formErrors.inputNickname,
    },
    {
      htmlFor: 'inputEmail',
      labelTitle: LABELTITLE.EMAIL,
      type: 'text',
      id: 'inputEmail',
      name: 'inputEmail',
      value: formValues.inputEmail,
      maxLength: undefined,
      autoComplete: undefined,
      onChange: handleChange,
      placeholder: PLACEHOLDER.EMAIL,
      error: formErrors.inputEmail,
    },
    {
      htmlFor: 'inputPassword',
      labelTitle: LABELTITLE.PASSWORD,
      type: 'password',
      id: 'inputPassword',
      name: 'inputPassword',
      value: formValues.inputPassword,
      maxLength: 20,
      autoComplete: 'current-password',
      onChange: handleChange,
      placeholder: PLACEHOLDER.PASSWORD,
      error: formErrors.inputPassword,
    },
    {
      htmlFor: 'inputPasswordConfirm',
      labelTitle: LABELTITLE.PASSWORD_CONFIRM,
      type: 'password',
      id: 'inputPasswordConfirm',
      name: 'inputPasswordConfirm',
      value: formValues.inputPasswordConfirm,
      maxLength: undefined,
      autoComplete: undefined,
      onChange: handleChange,
      placeholder: PLACEHOLDER.PASSWORD_CONFIRM,
      error: formErrors.inputPasswordConfirm,
    },
    {
      htmlFor: 'inputPhone',
      labelTitle: LABELTITLE.PHONE,
      type: 'text',
      id: 'inputPhone',
      name: 'inputPhone',
      value: formValues.inputPhone,
      maxLength: 11,
      autoComplete: undefined,
      onChange: handleChange,
      placeholder: PLACEHOLDER.PHONE,
      error: formErrors.inputPhone,
    },
  ];

  return (
    <UI.Container>
      <Form onSubmit={handleSubmit}>
        <FormHeader title={PAGES.USER_REGISTER} />
        {inputData.map((item, index) => {
          return (
            <FormItem key={index}>
              <FormInput htmlFor={item.htmlFor} labelTitle={item.labelTitle}>
                <InputText
                  type={item.type}
                  id={item.id}
                  name={item.name}
                  value={item.value}
                  maxLength={item.maxLength}
                  autoComplete={item.autoComplete}
                  onChange={item.onChange}
                  placeholder={item.placeholder}
                />
              </FormInput>
              {item.error ? <FormError message={item.error} /> : null}
            </FormItem>
          );
        })}

        <InputSwitch htmlFor={'check'} id={'check'} name={'check'} value={''} />

        <FormFooter>
          <Button component={'primary'} size={'large'} block>
            회원가입
          </Button>
        </FormFooter>
      </Form>
    </UI.Container>
  );
};

export default UsersRegister;
