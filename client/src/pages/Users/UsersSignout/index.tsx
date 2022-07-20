import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import * as API from '../../../api/api';
import LNBLayout from '../../../components/molecules/LNBLayout';
import FormInputText from '../../../components/molecules/FormInputText';
import PopupSignoutConfirm from './template/PopupSignoutConfirm';
import Button from '../../../components/atoms/Button';
import { USERS } from '../../../constants/lnb';
import { LABELTITLE, PLACEHOLDER } from '../../../constants/input';
import { BUTTON } from '../../../constants/input';
import { ERROR } from '../../../constants/error';
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
  const navigate = useNavigate();
  const initialValue = {
    inputEmail: '',
    inputPassword: '',
  };
  const [formValues, setFormValues] = useState<valueObject>(initialValue);
  const [formErrors, setFormErrors] = useState<valueObject>({});
  const [isSubmit, setIsSubmit] = useState(false);
  const [openPopupSignoutConfirm, setOpenPopupSignoutConfirm] = useState(false);

  const errors: valueObject = {};

  useEffect(() => {
    API.userGet('/api/users/user').then((res) => {
      const data = {
        inputEmail: res.email,
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

  const handleOpenPopupSignoutConfirm = (e: any) => {
    e.preventDefault();

    setFormErrors(validate(formValues));
    setIsSubmit(true);

    const isSucess = Object.keys(formErrors).length === 0;
    if (isSucess) {
      setOpenPopupSignoutConfirm(true);
    }
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

    try {
      const data = {
        email: formValues.inputEmail,
        password: formValues.inputPasswordCurrent,
      };
      await API.delete('/api/users', '', data);
      localStorage.removeItem('token');
      navigate('/');
    } catch (err: any) {
      console.error(err);
    }
  };

  const validate = (values: any) => {
    const inputPasswordCurrentValue = values.inputPasswordCurrent;
    if (!inputPasswordCurrentValue) {
      errors.inputPasswordCurrent = ERROR.PASSWORD_CURRENT;
    }

    return errors;
  };

  const inputTextData = [
    {
      htmlFor: 'inputPasswordCurrent',
      labelTitle: LABELTITLE.PASSWORD_CURRENT,
      type: 'password',
      id: 'inputPasswordCurrent',
      name: 'inputPasswordCurrent',
      value: formValues.inputPasswordCurrent || '',
      maxLength: 20,
      autoComplete: 'current-password',
      onChange: handleChange,
      placeholder: PLACEHOLDER.PASSWORD,
      error: formErrors.inputPasswordCurrent,
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
