import React, { useState } from 'react';
import LNBLayout from '../../../components/molecules/LNBLayout';
import Button from '../../../components/atoms/Button';
import Form from '../../../components/atoms/Form';
import FormInputTextHorizontal from '../../../components/molecules/FormInputTextHorizontal';
import FormFooter from '../../../components/molecules/FormFooter';
import PopupSaveConfirm from './template/PopupSaveConfirm';
import { ACCOUNT } from '../../../constants/lnb';
import { BUTTON } from '../../../constants/input';
import { ROLE } from '../../../constants/member';
import { LABELTITLE, PLACEHOLDER } from '../../../constants/input';
import * as UI from './style';

type valueObject = {
  [key: string]: any;
};

const AccountRestaurants = () => {
  const initialValue = {
    inputFileAvatarImage: '',
    inputName: '',
    inputNickname: '',
    inputPassword: '',
    inputPasswordConfirm: '',
    inputPhone: '',
    inputRole: ROLE.USER,
  };

  const [openPopupSaveConfirm, setOpenPopupSaveConfirm] = useState(false);
  const [formValues, setFormValues] = useState<valueObject>(initialValue);
  const [formErrors, setFormErrors] = useState<valueObject>({});
  const [fileImage, setFileImage] = useState('');
  const [isSubmit, setIsSubmit] = useState(false);

  const handleOpenPopupSaveConfirm = (e: any) => {
    e.preventDefault();
    setOpenPopupSaveConfirm(true);
  };

  const handleClosePopupSaveConfirm = (e: any) => {
    e.preventDefault();
    setOpenPopupSaveConfirm(!openPopupSaveConfirm);
  };

  const handleChange = (e: any) => {
    const target = e.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;
    setFormValues({ ...formValues, [name]: value });
  };

  const inputTextData = {
    owner: [
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
    ],
  };

  const handleSubmit = () => {};
  return (
    <LNBLayout items={ACCOUNT.OWNER}>
      <UI.Container>
        <UI.Content>
          <Form onSubmit={handleSubmit}>
            {inputTextData.owner.map((item, index) => {
              return FormInputTextHorizontal(item, index);
            })}
            <FormFooter>
              <Button
                component='primary'
                size='large'
                block
                onClick={handleOpenPopupSaveConfirm}
              >
                {BUTTON.SAVE_MODIFY_DATA}
              </Button>
            </FormFooter>
          </Form>
        </UI.Content>

        <PopupSaveConfirm
          open={openPopupSaveConfirm}
          onClose={handleClosePopupSaveConfirm}
        />
      </UI.Container>
    </LNBLayout>
  );
};

export default AccountRestaurants;
