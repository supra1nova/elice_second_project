import React, { useState, useEffect } from 'react';
import PopupContainer from '../../../../components/oranisms/Popup/PopupContainer';
import PopupHeader from '../../../../components/oranisms/Popup/PopupHeader';
import PopupContents from '../../../../components/oranisms/Popup/PopupContents';
import PopupFooter from '../../../../components/oranisms/Popup/PopupFooter';
import FormItem from '../../../../components/molecules/FormItem';
import FormInput from '../../../../components/molecules/FormInput';
import FormError from '../../../../components/molecules/FromError';
import InputText from '../../../../components/atoms/InputText';
import { POPUP } from '../../../../constants/title';
import { LABELTITLE, PLACEHOLDER } from '../../../../constants/input';
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

  const handleSignoutConfirm = () => {
    console.log('aaaaaa');
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
          return (
            <FormItem key={`${item.id}-${index}`}>
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
      </PopupContents>
      <PopupFooter
        footerType={'checkType'}
        onClose={onClose}
        onClick={handleSignoutConfirm}
      />
    </PopupContainer>
  );
};

export default PopupCurrentPassword;
