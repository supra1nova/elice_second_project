import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import * as API from '../../../api/api';
import Form from '../../../components/atoms/Form';
import FormHeader from '../../../components/molecules/FormHeader';
import FormInputText from './template/FormInputText';
import FormInputSwitch from './template/FormInputSwitch';
import FormFooter from '../../../components/molecules/FormFooter';
import Button from '../../../components/atoms/Button';
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
    inputRegistrationNumber: '',
    inputCheckAdmin: undefined,
    inputAdminCode: '',
    inputRole: 'user',
  };

  const [formValues, setFormValues] = useState<valueObject>(initialValue);
  const [formErrors, setFormErrors] = useState<valueObject>({});
  const [isSubmit, setIsSubmit] = useState(false);

  const handleChange = (e: any) => {
    const target = e.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;
    setFormValues({ ...formValues, [name]: value });
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();

    // if (formValues.inputCheckOwner) {
    //   formValues.inputRole = ROLE.OWNER;
    // }

    // if (
    //   formValues.inputCheckOwner &&
    //   formValues.inputAdminCode === CODE.ADMIN
    // ) {
    //   formValues.inputRole = ROLE.ADMIN;
    // }

    setFormErrors(validate(formValues));
    setIsSubmit(true);

    // try {
    //   const data = {
    //     email: formValues.inputEmail,
    //     name: formValues.inputName,
    //     password: formValues.inputPassword,
    //     nickName: formValues.inputNickname,
    //     phoneNumber: formValues.inputPhone,
    //     role: formValues.inputRole,
    //   };

    //   await API.post('/api/users/register', '', data);
    //   if (data.role === ROLE.OWNER) {
    //     navigate('/account');
    //   } else {
    //     navigate('/users/login');
    //   }
    //   setIsSubmit(true);
    // } catch (err: any) {
    //   console.error(err);
    // }
  };

  useEffect(() => {
    console.log(formErrors);
    if (Object.keys(formErrors).length === 0 && isSubmit) {
      console.log(formValues);
    }
  }, [formErrors]);

  const validate = (values: any) => {
    const errors: valueObject = {};

    const isinputNameValue = values.inputName;
    const isInputNicknameValue = values.inputNickname;
    const isInputEmailValue = values.inputEmail;
    const isInputPasswordValue = values.inputPassword;
    const isInputPasswordConfirmValue = values.inputPasswordConfirm;
    const isInputPhoneValue = values.inputPhone;
    const isInputCheckOwnerValue = values.inputCheckOwner;
    const isInputRegistrationNumberValue = values.inputRegistrationNumber;
    const isInputCheckAdminValue = values.inputCheckAdmin;
    const isInputCheckAdminChecked = values.inputCheckAdmin;
    const isInputAdminCodeValue = values.inputAdminCode;

    const isValidEmail = validateEmail(values.inputEmail);
    const isMinPasswordLength = isInputPasswordValue.length >= 8;
    const isMinPhoneLength = isInputPhoneValue.length >= 11;

    const isMinRegistrationNumberLength =
      isInputRegistrationNumberValue.length >= 11;
    const isMinAdminCodeLength = isInputCheckAdminValue.length === 4;

    if (!isinputNameValue) {
      errors.inputName = ERROR.NAME_INPUT;
    }

    if (!isInputNicknameValue) {
      errors.inputNickname = ERROR.NICKNAME_INPUT;
    }

    if (!isInputEmailValue) {
      errors.inputEmail = ERROR.EMAIL_INPUT;
    } else if (!isValidEmail) {
      errors.inputEmail = ERROR.EMAIL_VALID;
    }

    if (!isInputPasswordValue) {
      errors.inputPassword = ERROR.PASSWORD_INPUT;
    } else if (!isMinPasswordLength) {
      errors.inputPassword = ERROR.PASSWORD_MIN_LENGTH;
    }

    if (!isInputPasswordConfirmValue) {
      errors.inputPasswordConfirm = ERROR.PASSWORD_INPUT;
    } else if (!isMinPasswordLength) {
      errors.inputPasswordConfirm = ERROR.PASSWORD_SAME;
    }

    if (!isInputPhoneValue) {
      errors.inputPhone = ERROR.PHONE_INPUT;
    } else if (!isMinPhoneLength) {
      errors.inputPhone = ERROR.PHONE_VALID;
    }

    if (isInputCheckAdminChecked && isInputAdminCodeValue !== CODE.ADMIN) {
      errors.inputAdminCode = ERROR.ADMIN_CODE_INPUT_VALID;
    }

    // if (!isInputRegistrationNumberValue) {
    //   errors.inputRegistrationNumber = ERROR.OWNER_REGISTRATION_NUMBER_INPUT;
    // } else if (!isMinRegistrationNumberLength) {
    //   errors.inputRegistrationNumber = ERROR.OWNER_REGISTRATION_NUMBER_VALID;
    // }

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
        maxLength: undefined,
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
    owner: [
      {
        htmlFor: 'inputRegistrationNumber',
        labelTitle: LABELTITLE.OWNER_REGISTRATION_NUMBER,
        type: 'text',
        id: 'inputRegistrationNumber',
        name: 'inputRegistrationNumber',
        value: formValues.inputRegistrationNumber,
        maxLength: 11,
        autoComplete: undefined,
        onChange: handleChange,
        placeholder: PLACEHOLDER.OWNER_REGISTRATION_NUMBER,
        error: formErrors.inputRegistrationNumber,
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
            회원가입
          </Button>
        </FormFooter>
      </Form>
    </UI.Container>
  );
};

export default UsersRegister;
