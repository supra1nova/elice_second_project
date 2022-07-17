import React, { useState, useEffect } from 'react';
import * as API from '../../../../api/api';
import PopupContainer from '../../../../components/oranisms/Popup/PopupContainer';
import PopupHeader from '../../../../components/oranisms/Popup/PopupHeader';
import PopupContents from '../../../../components/oranisms/Popup/PopupContents';
import PopupFooter from '../../../../components/oranisms/Popup/PopupFooter';
import { POPUP } from '../../../../constants/title';
import { ROLE } from '../../../../constants/member';

interface Props {
  open: boolean;
  onClose: any;
  onClick?: any;
}

type valueObject = {
  [key: string]: any;
};

const PopupSignoutConfirm = ({ open, onClose, onClick }: Props) => {
  const initialValue = {
    inputFileAvatarImage: '',
    inputName: '',
    inputNickname: '',
    inputPassword: '',
    inputPasswordConfirm: '',
    inputPhone: '',
    inputRole: ROLE.USER,
  };

  const [formValues, setFormValues] = useState<valueObject>(initialValue);
  const [formErrors, setFormErrors] = useState<valueObject>({});
  const [fileImage, setFileImage] = useState('');
  const [isSubmit, setIsSubmit] = useState(false);

  const errors: valueObject = {};

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    setFormErrors(validate(formValues));
    setIsSubmit(true);

    try {
      const data = {
        name: formValues.inputName,
        password: formValues.inputPassword,
        nickName: formValues.inputNickname,
        phoneNumber: formValues.inputPhone,
        image: formValues.inputFileAvatarImage,
        email: formValues.inputEmail,
      };
      console.log(data);

      await API.patch('/api/users', '', data);
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
    // const isInputNameValue = values.inputName;
    // const isInputNicknameValue = values.inputNickname;
    // const isInputEmailValue = values.inputEmail;
    // const isInputPasswordValue = values.inputPassword;
    // const isInputPasswordConfirmValue = values.inputPasswordConfirm;
    // const isInputPhoneValue = values.inputPhone;

    // const isValidEmail = validateEmail(values.inputEmail);

    // const isPasswordMinLength = isInputPasswordValue.length >= 8;
    // const isPhoneMinLength = isInputPhoneValue.length >= 11;
    // const isNameMinLength = isInputNameValue < 2;

    // if (!isInputNameValue) {
    //   errors.inputName = ERROR.NAME_INPUT;
    // } else if (isNameMinLength) {
    //   errors.inputName = ERROR.NAME_MIN_LENGTH;
    // }

    // if (!isInputNicknameValue) {
    //   errors.inputNickname = ERROR.NICKNAME_INPUT;
    // }

    // if (!isInputEmailValue) {
    //   errors.inputEmail = ERROR.EMAIL_INPUT;
    // } else if (!isValidEmail) {
    //   errors.inputEmail = ERROR.EMAIL_VALID;
    // }

    // if (!isInputPasswordValue) {
    //   errors.inputPassword = ERROR.PASSWORD_INPUT;
    // } else if (!isPasswordMinLength) {
    //   errors.inputPassword = ERROR.PASSWORD_MIN_LENGTH;
    // }

    // if (!isInputPasswordConfirmValue) {
    //   errors.inputPasswordConfirm = ERROR.PASSWORD_INPUT;
    // } else if (!isPasswordMinLength) {
    //   errors.inputPasswordConfirm = ERROR.PASSWORD_SAME;
    // }

    // if (!isInputPhoneValue) {
    //   errors.inputPhone = ERROR.PHONE_INPUT;
    // } else if (!isPhoneMinLength) {
    //   errors.inputPhone = ERROR.PHONE_VALID;
    // }

    return errors;
  };
  return (
    <PopupContainer open={open}>
      <PopupHeader
        title={POPUP.USER_MEMBER_DELETE}
        onClose={onClose}
      ></PopupHeader>
      <PopupFooter
        footerType={'checkType'}
        onClose={onClose}
        onClick={handleSubmit}
      />
    </PopupContainer>
  );
};

export default PopupSignoutConfirm;
