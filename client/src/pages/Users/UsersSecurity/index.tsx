import React, { useState, useEffect } from 'react';
import * as API from '../../../api/api';
import LNBLayout from '../../../components/molecules/LNBLayout';
import Avatar from '../../../components/molecules/Avatar';
import Form from '../../../components/atoms/Form';
import FormInputText from '../../../components/molecules/FormInputText';
import FormFooter from '../../../components/molecules/FormFooter';
import PopupCurrentPassword from './template/PopupCurrentPassword';
import Button from '../../../components/atoms/Button';
import { USERS } from '../../../constants/lnb';
import { BUTTON } from '../../../constants/input';
import { ROLE } from '../../../constants/member';
import { LABELTITLE, PLACEHOLDER } from '../../../constants/input';
import { ERROR } from '../../../constants/error';
import { validateEmail } from '../../../functions';
import * as UI from './style';
import InputFileButton from '../../../components/atoms/InputFileButton';
import Typography from '../../../components/atoms/Typography';

type valueObject = {
  [key: string]: any;
};

const UsersSignout = () => {
  const initialValue = {
    inputFileAvatarImage: '',
    inputName: '',
    inputNickname: '',
    inputPassword: '',
    inputPasswordConfirm: '',
    inputPhone: '',
    inputRole: ROLE.USER,
  };

  const [openPopupCurrentPassword, setOpenPopupCurrentPassword] =
    useState(false);
  const [formValues, setFormValues] = useState<valueObject>(initialValue);
  const [formErrors, setFormErrors] = useState<valueObject>({});
  const [fileImage, setFileImage] = useState('');
  const [isSubmit, setIsSubmit] = useState(false);

  const errors: valueObject = {};

  useEffect(() => {
    API.userGet('/api/users/user').then((res) => {
      const data = {
        inputFileAvatarImage: res.image,
        inputName: res.name,
        inputNickname: res.nickName,
        inputEmail: res.email,
        inputPhone: res.phoneNumber,
      };
      setFormValues(data);
    });
  }, []);

  const handleOpenPopupCurrentPassword = (e: any) => {
    e.preventDefault();
    setOpenPopupCurrentPassword(true);
  };

  const handleClosePopupCurrentPassword = (e: any) => {
    e.preventDefault();
    setOpenPopupCurrentPassword(!openPopupCurrentPassword);
  };

  const handleChange = (e: any) => {
    const target = e.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;
    setFormValues({ ...formValues, [name]: value });
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
    ],
  };

  const saveFileImage = (event: React.ChangeEvent<HTMLInputElement>) => {
    // @ts-ignore
    setFileImage(URL.createObjectURL(event.target.files[0]));
  };
  const deleteFileImage = () => {
    URL.revokeObjectURL(fileImage);
    setFileImage('');
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

          <Form onSubmit={handleOpenPopupCurrentPassword}>
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

        <PopupCurrentPassword
          open={openPopupCurrentPassword}
          onClose={handleClosePopupCurrentPassword}
        />
      </UI.Container>
    </LNBLayout>
  );
};

export default UsersSignout;
