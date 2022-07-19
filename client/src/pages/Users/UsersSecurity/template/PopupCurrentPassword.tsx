import React, { useState, useEffect } from 'react';
import * as API from '../../../../api/api';
import PopupContainer from '../../../../components/oranisms/Popup/PopupContainer';
import PopupHeader from '../../../../components/oranisms/Popup/PopupHeader';
import PopupContents from '../../../../components/oranisms/Popup/PopupContents';
import PopupFooter from '../../../../components/oranisms/Popup/PopupFooter';
import FormInputText from '../../../../components/molecules/FormInputText';
import { POPUP } from '../../../../constants/title';
import { PLACEHOLDER } from '../../../../constants/input';
import { ERROR } from '../../../../constants/error';

interface Props {
  open: boolean;
  onClose: any;
  onClick?: any;
  propsData: any;
}

type valueObject = {
  [key: string]: any;
};

const PopupCurrentPassword = ({ open, onClose, onClick, propsData }: Props) => {
  const initialValue = {
    inputPassword: '',
  };

  const [formValues, setFormValues] = useState<valueObject>(propsData);
  const [formErrors, setFormErrors] = useState<valueObject>({});
  const [isSubmit, setIsSubmit] = useState(false);

  console.log(formValues);

  const handleChange = (e: any) => {
    const target = e.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;
    setFormValues({ ...formValues, [name]: value });
  };

  const inputTextData = [
    {
      htmlFor: 'inputPassword',
      labelTitle: undefined,
      type: 'password',
      id: 'inputPassword',
      name: 'inputPassword',
      value: formValues.inputPassword,
      maxLength: 20,
      autoComplete: 'current-password',
      onChange: handleChange,
      placeholder: PLACEHOLDER.PASSWORD_CONFIRM,
      error: formErrors.inputPassword,
    },
  ];

  const handleSubmit = async () => {
    try {
      const data = {
        email: formValues.inputEmail,
        name: formValues.inputName,
        password: formValues.inputPassword,
        nickName: formValues.inputNickname,
        phoneNumber: formValues.inputPhone,
        image: formValues.inputFileAvatarImage,
      };

      await API.patch('/api/users/user', '', data);
    } catch (err: any) {
      console.error(err);
    }
  };

  return (
    <PopupContainer open={open} width={'600'}>
      <PopupHeader
        title={POPUP.USER_MEMBER_CURRENT_PASSWORD}
        onClose={onClose}
      ></PopupHeader>
      <PopupContents>
        {inputTextData.map((item, index) => {
          return FormInputText(item, index);
        })}
      </PopupContents>
      <PopupFooter
        footerType={'checkType'}
        onClose={onClose}
        onClick={handleSubmit}
      />
    </PopupContainer>
  );
};

export default PopupCurrentPassword;
