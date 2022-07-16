import React, { useState, useEffect } from 'react';
import * as API from '../../../api/api';
import LNBLayout from '../../../components/molecules/LNBLayout';
import FormInputText from '../../../components/molecules/FormInputText';
import PopupSignoutConfirm from './template/PopupSignoutConfirm';
import Button from '../../../components/atoms/Button';
import { USERS } from '../../../constants/lnb';
import { LABELTITLE, PLACEHOLDER } from '../../../constants/input';
import { BUTTON } from '../../../constants/input';
import * as UI from './style';

interface Props {
  open: boolean;
  onClose: any;
  onClick?: any;
}

type valueObject = {
  [key: string]: any;
};

const UsersSignout = () => {
  const initialValue = {
    inputPassword: '',
  };
  const [formValues, setFormValues] = useState<valueObject>(initialValue);
  const [formErrors, setFormErrors] = useState<valueObject>({});
  const [isSubmit, setIsSubmit] = useState(false);
  const [openPopupSignoutConfirm, setOpenPopupSignoutConfirm] = useState(false);

  const handleOpenPopupSignoutConfirm = (e: any) => {
    e.preventDefault();
    setOpenPopupSignoutConfirm(true);
  };

  const handleClosePopupSignoutConfirm = (e: any) => {
    e.preventDefault();
    setOpenPopupSignoutConfirm(!openPopupSignoutConfirm);
  };

  const handleChange = (e: any) => {
    const target = e.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;
    setFormValues({ ...formValues, [name]: value });
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    const currentPassword = formValues.inputPassword;
    const data = { currentPassword };
    console.log(data);
    try {
      await API.delete('/api/users/user', '', data);
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

  const inputTextData = [
    {
      htmlFor: 'inputPassword',
      labelTitle: LABELTITLE.PASSWORD_CURRENT,
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
  ];

  return (
    <>
      <LNBLayout items={USERS}>
        <UI.Container>
          <UI.Content>
            {inputTextData.map((item, index) => {
              return FormInputText(item, index);
            })}
            <UI.Submit>
              <Button
                component='disable'
                size='large'
                block
                onClick={handleOpenPopupSignoutConfirm}
              >
                {BUTTON.USER_MEMBER_DELETE}
              </Button>
            </UI.Submit>
          </UI.Content>
        </UI.Container>
      </LNBLayout>
      <PopupSignoutConfirm
        open={openPopupSignoutConfirm}
        onClose={handleClosePopupSignoutConfirm}
        onClick={handleSubmit}
      />
    </>
  );
};

export default UsersSignout;
