import React, { useState, useEffect, useCallback } from 'react';
import axios from 'axios';
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
  const initialValue = {
    inputFileAvatarImage: '',
    inputName: '',
    inputNickname: '',
    inputEmail: '',
    inputPassword: '',
    inputPasswordConfirm: '',
    inputPhone: '',
  };

  const [formValues, setFormValues] = useState<valueObject>(initialValue);
  const [formErrors, setFormErrors] = useState<valueObject>({});
  const [fileImage, setFileImage] = useState(formValues.inputAvatar);
  const [isSubmit, setIsSubmit] = useState(false);

  const errors: valueObject = {};

  useEffect(() => {
    API.userGet('/api/users/user').then((res) => {
      console.log(res);
      const data = {
        inputName: res.name,
        inputNickname: res.nickName,
        inputEmail: res.email,
        inputPhone: res.phoneNumber,
        inputPassword: '',
        inputPasswordConfirm: '',
        inputAvatar: res.image,
      };
      setFormValues(data);
    });
  }, []);

  useEffect(() => {
    console.log(formErrors);
    if (Object.keys(formErrors).length === 0 && isSubmit) {
      console.log(formValues);
    }
  }, [formErrors]);

  const handleChange = (e: any) => {
    const target = e.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;
    setFormValues({ ...formValues, [name]: value });
  };

  const saveFileImage = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      // @ts-ignore
      setFileImage(URL.createObjectURL(event.target.files[0]));
    },
    [],
  );

  const deleteFileImage = () => {
    URL.revokeObjectURL(fileImage);
    setFileImage('');
  };

  const formData = new FormData();
  formData.append('file', fileImage); // 보통 image로 보냄?? 근데 현재 저는 body에 form-type 을 file로 지정해서 보냈다고 하셔서 일단 file로?

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
      console.log(data);
      const image = {
        file: fileImage,
        currentPassword: formValues.inputPasswordCurrent,
      };
      await API.patch('/api/users', '', data);
      // await API.patch('/api/users', '', image);

      // if (fileImage) {
      //   axios({
      //     baseURL: 'http://localhost:3000',
      //     url: '/api/users/image',
      //     method: 'patch',
      //     data: formData,
      //     headers: {
      //       'Content-Type': 'multipart/form-data',
      //       Authorization: `Bearer ${localStorage.getItem('token')}`,
      //     },
      //   })
      //     .then((response) => {
      //       console.log(response.data);
      //     })
      //     .catch((error) => {
      //       console.error(error);
      //     });
      // }
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
        value: formValues.inputNickname || '',
        maxLength: undefined,
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
            <Avatar userId='userIDDDD' image={fileImage} />

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
