import React, { useState, useEffect, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import * as API from '../../../api/api';
import LNBLayout from '../../../components/molecules/LNBLayout';
import Avatar from '../../../components/molecules/Avatar';
import InputFileButton from '../../../components/atoms/InputFileButton';
import Form from '../../../components/atoms/Form';
import FormInputText from '../../../components/molecules/FormInputText';
import FormFooter from '../../../components/molecules/FormFooter';
import Button from '../../../components/atoms/Button';
import { USERS } from '../../../constants/lnb';
import { BUTTON } from '../../../constants/input';
import { LABELTITLE, PLACEHOLDER } from '../../../constants/input';
import { ERROR } from '../../../constants/error';
import * as UI from './style';

type valueObject = {
  [key: string]: any;
};

const UsersSignout = () => {
  const navigate = useNavigate();
  const initialValue = {
    inputName: '',
    inputNickname: '',
    inputEmail: '',
    inputPassword: '',
    inputPasswordConfirm: '',
    inputPhone: '',
  };

  const [formValues, setFormValues] = useState<valueObject>(initialValue);
  const [formErrors, setFormErrors] = useState<valueObject>({});

  const [image, setImage] = useState<valueObject>({
    image_file: '',
    preview_URL: '',
  });

  const [isSubmit, setIsSubmit] = useState(false);
  const errors: valueObject = {};

  useEffect(() => {
    API.userGet('/api/users/user').then((res) => {
      const data = {
        inputName: res.name,
        inputNickname: res.nickName,
        inputEmail: res.email,
        inputPhone: res.phoneNumber,
        inputPassword: '',
        inputPasswordConfirm: '',
      };
      setFormValues(data);
      setImage({ preview_URL: res.image });
    });
  }, []);

  useEffect(() => {
    console.log(formErrors);
    if (Object.keys(formErrors).length === 0 && isSubmit) {
      console.log(formValues);
    }
  }, [formErrors]);

  useEffect(() => {
    return () => {
      URL.revokeObjectURL(image.preview_URL);
    };
  }, []);

  const handleChange = (e: any) => {
    const target = e.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;
    setFormValues({ ...formValues, [name]: value });
  };

  const saveFileImage = (e: any) => {
    e.preventDefault();
    if (e.target.files[0]) {
      URL.revokeObjectURL(image.preview_URL);
      const preview_URL = URL.createObjectURL(e.target.files[0]);
      setImage(() => ({
        image_file: e.target.files[0],
        preview_URL: preview_URL,
      }));
    }
  };

  const deleteFileImage = () => {
    URL.revokeObjectURL(image.preview_URL);
    setImage({
      image_file: '',
      preview_URL: '',
    });
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    setFormErrors(validate(formValues));
    setIsSubmit(true);
    try {
      const data = {
        email: formValues.inputEmail,
        name: formValues.inputName,
        password: formValues.inputPassword,
        nickName: formValues.inputNickname,
        phoneNumber: formValues.inputPhone,
        currentPassword: formValues.inputPasswordCurrent,
      };

      await API.patch('/api/users', '', data);

      if (image.image_file) {
        const formData = new FormData();
        formData.append('image', image.image_file);
        formData.append('currentPassword', formValues.inputPasswordCurrent);
        await API.file('/api/users/image', '', formData);
      }
      navigate('/users/security');
      formValues.inputPasswordCurrent = '';
    } catch (err: any) {
      console.error(err);
    }
  };

  const validate = (values: any) => {
    const inputNameValue = values.inputName;
    const inputNicknameValue = values.inputNickname;
    const inputPhoneValue = values.inputPhone;
    const inputPasswordValue = values.inputPassword;
    const inputPasswordConfirmValue = values.inputPasswordConfirm;
    const inputPasswordCurrentValue = values.inputPasswordCurrent;

    const isPasswordMinLength = inputPasswordValue.length >= 8;
    const isPasswordConfirmMinLength = inputPasswordConfirmValue.length >= 8;
    const isPhoneMinLength = inputPhoneValue.length >= 11;
    const isNameMinLength = inputNameValue < 2;
    const isNickNameMinLength = inputNameValue < 2;

    if (inputNameValue && isNameMinLength) {
      errors.inputName = ERROR.NAME_MIN_LENGTH;
    }

    if (inputNicknameValue && isNickNameMinLength) {
      errors.inputNickname = ERROR.NICKNAME_MIN_LENGTH;
    }

    if (inputPasswordValue && !isPasswordMinLength) {
      errors.inputPassword = ERROR.PASSWORD_MIN_LENGTH;
    }

    if (inputPhoneValue && !isPhoneMinLength) {
      errors.inputPhone = ERROR.PHONE_VALID;
    }

    if (inputPasswordConfirmValue && !isPasswordConfirmMinLength) {
      errors.inputPasswordConfirm = ERROR.PASSWORD_MIN_LENGTH;
    } else if (inputPasswordConfirmValue !== inputPasswordValue) {
      errors.inputPasswordConfirm = ERROR.PASSWORD_SAME;
    }

    if (!inputPasswordCurrentValue) {
      errors.inputPasswordCurrent = ERROR.PASSWORD_CURRENT;
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
        value: formValues.inputName || '',
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
        value: formValues.inputNickname || '',
        maxLength: 10,
        autoComplete: undefined,
        onChange: handleChange,
        placeholder: PLACEHOLDER.NICKNAME,
        error: formErrors.inputNickname,
      },
      {
        htmlFor: 'inputPhone',
        labelTitle: LABELTITLE.PHONE,
        type: 'text',
        id: 'inputPhone',
        name: 'inputPhone',
        value: formValues.inputPhone || '',
        maxLength: 11,
        autoComplete: undefined,
        onChange: handleChange,
        placeholder: PLACEHOLDER.PHONE,
        error: formErrors.inputPhone,
      },
      {
        htmlFor: 'inputPassword',
        labelTitle: LABELTITLE.PASSWORD,
        type: 'password',
        id: 'inputPassword',
        name: 'inputPassword',
        value: formValues.inputPassword || '',
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
        value: formValues.inputPasswordConfirm || '',
        maxLength: undefined,
        autoComplete: undefined,
        onChange: handleChange,
        placeholder: PLACEHOLDER.PASSWORD_CONFIRM,
        error: formErrors.inputPasswordConfirm,
      },
      {
        htmlFor: 'inputPasswordCurrent',
        labelTitle: LABELTITLE.PASSWORD_CURRENT,
        type: 'password',
        id: 'inputPasswordCurrent',
        name: 'inputPasswordCurrent',
        value: formValues.inputPasswordCurrent || '',
        maxLength: undefined,
        autoComplete: undefined,
        onChange: handleChange,
        placeholder: PLACEHOLDER.PASSWORD_CURRENT,
        error: formErrors.inputPasswordCurrent,
      },
    ],
  };

  return (
    <LNBLayout items={USERS}>
      <UI.Container>
        <UI.Content>
          <UI.AvatarContainer>
            <Avatar userId={formValues.inputEmail} image={image.preview_URL} />

            <UI.AvatarLabel>프로필</UI.AvatarLabel>
            <UI.AvatarInput>
              <InputFileButton
                id='inputFileAvatarImage'
                htmlFor='inputFileAvatarImage'
                name='inputFileAvatarImage'
                accept='image/*'
                onChange={saveFileImage}
              />
              <Button
                component='disable'
                size='small'
                onClick={() => deleteFileImage()}
              >
                삭제
              </Button>
            </UI.AvatarInput>
          </UI.AvatarContainer>

          <Form onSubmit={handleSubmit}>
            {inputTextData.user.map((item, index) => {
              return FormInputText(item, index);
            })}

            <FormFooter>
              <Button component={'primary'} size={'large'} block>
                {BUTTON.USER_SECURITY_MODIFY}
              </Button>
            </FormFooter>
          </Form>
        </UI.Content>
      </UI.Container>
    </LNBLayout>
  );
};

export default UsersSignout;
