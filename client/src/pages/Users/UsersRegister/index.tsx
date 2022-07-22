import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import * as API from '../../../api/api';
import Form from '../../../components/atoms/Form';
import FormHeader from '../../../components/molecules/FormHeader';
import FormInputText from '../../../components/molecules/FormInputText';
import FormInputSwitch from '../../../components/molecules/FormInputSwitch';
import FormFooter from '../../../components/molecules/FormFooter';
import Button from '../../../components/atoms/Button';
import { BUTTON } from '../../../constants/input';
import { CODE, ROLE } from '../../../constants/member';
import { PAGES } from '../../../constants/title';
import { LABELTITLE, PLACEHOLDER } from '../../../constants/input';
import { ERROR } from '../../../constants/error';
import { validateEmail } from '../../../functions';
import * as UI from './style';

type valueObject = {
  [key: string]: any;
};

const UsersRegister = () => {
  const navigate = useNavigate();
  const initialValue = {
    inputName: '',
    inputNickname: '',
    inputEmail: '',
    inputPassword: '',
    inputPasswordConfirm: '',
    inputPhone: '',
    inputCheckOwner: undefined,
    inputCheckAdmin: undefined,
    inputAdminCode: '',
    inputRole: ROLE.USER,
  };

  const [formValues, setFormValues] = useState<valueObject>(initialValue);
  const [formErrors, setFormErrors] = useState<valueObject>({});
  const [isSubmit, setIsSubmit] = useState(false);
  const errors: valueObject = {};

  const handleChange = (e: any) => {
    const target = e.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;
    setFormValues({ ...formValues, [name]: value });
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();

    if (formValues.inputCheckOwner) {
      formValues.inputRole = ROLE.OWNER;
    } else if (
      formValues.inputCheckAdmin &&
      formValues.inputAdminCode === CODE.ADMIN
    ) {
      formValues.inputRole = ROLE.ADMIN;
    } else {
      formValues.inputRole = ROLE.USER;
    }

    setFormErrors(validate(formValues));
    setIsSubmit(true);

    try {
      const data = {
        email: formValues.inputEmail,
        name: formValues.inputName,
        password: formValues.inputPassword,
        nickName: formValues.inputNickname,
        phoneNumber: formValues.inputPhone,
        role: formValues.inputRole,
      };

      await API.post('/api/users/register', '', data);
      navigate('/users/login');
    } catch (err: any) {
      console.error(err);
    }
  };

  useEffect(() => {
    console.log(formErrors);
    if (Object.keys(formErrors).length === 0 && isSubmit) {
      console.log(formValues);
    }
  }, [formErrors]);

  const validate = (values: any) => {
    const inputNameValue = values.inputName;
    const inputNicknameValue = values.inputNickname;
    const inputEmailValue = values.inputEmail;
    const inputPasswordValue = values.inputPassword;
    const inputPasswordConfirmValue = values.inputPasswordConfirm;
    const inputPhoneValue = values.inputPhone;
    const inputCheckOwnerValue = values.inputCheckOwner;
    const inputCheckAdminChecked = values.inputCheckAdmin;
    const inputAdminCodeValue = values.inputAdminCode;

    const isPasswordMinLength = inputPasswordValue.length >= 8;
    const isPasswordConfirmMinLength = inputPasswordConfirmValue.length >= 8;
    const isPhoneMinLength = inputPhoneValue.length >= 11;
    const isNameMinLength = inputNameValue < 2;
    const isNickNameMinLength = inputNameValue < 2;
    const isValidEmail = values.inputEmail;

    if (!inputNameValue) {
      errors.inputName = ERROR.NAME_INPUT;
    } else if (isNameMinLength) {
      errors.inputName = ERROR.NAME_MIN_LENGTH;
    }

    if (!inputNicknameValue) {
      errors.inputNickname = ERROR.NICKNAME_INPUT;
    } else if (isNickNameMinLength) {
      errors.inputNickname = ERROR.NICKNAME_MIN_LENGTH;
    }

    if (!inputEmailValue) {
      errors.inputEmail = ERROR.EMAIL_INPUT;
    }

    if (!inputPasswordValue) {
      errors.inputPassword = ERROR.PASSWORD_INPUT;
    } else if (!isPasswordMinLength) {
      errors.inputPassword = ERROR.PASSWORD_MIN_LENGTH;
    }

    if (!inputPasswordConfirmValue) {
      errors.inputPasswordConfirm = ERROR.PASSWORD_INPUT;
    } else if (!isPasswordConfirmMinLength) {
      errors.inputPasswordConfirm = ERROR.PASSWORD_MIN_LENGTH;
    } else if (inputPasswordConfirmValue !== inputPasswordValue) {
      errors.inputPasswordConfirm = ERROR.PASSWORD_SAME;
    }

    if (!inputPhoneValue) {
      errors.inputPhone = ERROR.PHONE_INPUT;
    } else if (!isPhoneMinLength) {
      errors.inputPhone = ERROR.PHONE_VALID;
    }

    if (inputCheckAdminChecked && !inputAdminCodeValue) {
      errors.inputAdminCode = ERROR.ADMIN_CODE_INPUT;
    } else if (inputCheckAdminChecked && inputAdminCodeValue !== CODE.ADMIN) {
      errors.inputAdminCode = ERROR.ADMIN_CODE_INPUT_VALID;
    }

    return errors;
  };

  const inputTextData = {
    user: [
      {
        htmlFor: 'inputName',
        labelTitle: LABELTITLE.NAME,
        type: 'text',
        id: 'inputName',
        name: 'inputName',
        value: formValues.inputName,
        maxLength: 8,
        autoComplete: undefined,
        onChange: handleChange,
        placeholder: PLACEHOLDER.NAME,
        error: formErrors.inputName,
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
    ],
    admin: [
      {
        htmlFor: 'inputAdminCode',
        labelTitle: LABELTITLE.AMDIN_CODE,
        type: 'password',
        id: 'inputAdminCode',
        name: 'inputAdminCode',
        value: formValues.inputAdminCode,
        maxLength: 4,
        autoComplete: undefined,
        onChange: handleChange,
        placeholder: PLACEHOLDER.AMDIN_CODE,
        error: formErrors.inputAdminCode,
      },
    ],
  };

  const inputSwitchData = {
    admin: [
      {
        htmlFor: 'inputCheckAdmin',
        title: LABELTITLE.ROLE_ADMIN,
        subTitle: '',
        id: 'inputCheckAdmin',
        name: 'inputCheckAdmin',
        checked: formValues.inputCheckAdmin,
        onChange: handleChange,
      },
    ],
    owner: [
      {
        htmlFor: 'inputCheckOwner',
        title: LABELTITLE.ROLE_OWNER,
        subTitle: LABELTITLE.ROLE_OWNER_SUB_TITLE,
        id: 'inputCheckOwner',
        name: 'inputCheckOwner',
        checked: formValues.inputCheckOwner,
        onChange: handleChange,
      },
    ],
  };

  return (
    <UI.Container>
      <Form onSubmit={handleSubmit}>
        <FormHeader title={PAGES.USER_REGISTER} />

        {inputTextData.user.map((item, index) => {
          return FormInputText(item, index);
        })}

        {!undefined && !formValues.inputCheckAdmin
          ? inputSwitchData.owner.map((item, index) => {
              return FormInputSwitch(item, index);
            })
          : null}

        {formValues.inputCheckOwner ? (
          <UI.Notice>레스토랑 설정은 마이페이지에서 가능합니다.</UI.Notice>
        ) : null}

        {!undefined && !formValues.inputCheckOwner
          ? inputSwitchData.admin.map((item, index) => {
              return FormInputSwitch(item, index);
            })
          : null}

        {formValues.inputCheckAdmin
          ? inputTextData.admin.map((item, index) => {
              return FormInputText(item, index);
            })
          : null}

        <FormFooter>
          <Button component={'primary'} size={'large'} block>
            {BUTTON.USER_RESIGNTER}
          </Button>
        </FormFooter>
      </Form>
    </UI.Container>
  );
};

export default UsersRegister;
