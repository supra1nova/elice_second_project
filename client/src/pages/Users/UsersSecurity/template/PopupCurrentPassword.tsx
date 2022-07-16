import React, { useState, useEffect } from 'react';
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
}

type valueObject = {
  [key: string]: any;
};

const PopupCurrentPassword = ({ open, onClose, onClick }: Props) => {
  const initialValue = {
    inputPassword: '',
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

  useEffect(() => {
    console.log(formErrors);
    if (Object.keys(formErrors).length === 0 && isSubmit) {
      console.log(formValues);
    }
  }, [formErrors]);

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
        onClick={onClick}
      />
    </PopupContainer>
  );
};

export default PopupCurrentPassword;
