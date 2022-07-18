import React, { useState } from 'react';
import LNBLayout from '../../../components/molecules/LNBLayout';
import Button from '../../../components/atoms/Button';
import Form from '../../../components/atoms/Form';
import FormItem from '../../../components/molecules/FormItem';
import FormInputTextHorizontal from '../../../components/molecules/FormInputTextHorizontal';
import FormInputAddress from '../../../components/molecules/FormInputAddress';
import FormFooter from '../../../components/molecules/FormFooter';
import InputRadio from '../../../components/atoms/InputRadio';
import PopupSaveConfirm from './template/PopupSaveConfirm';
import { ACCOUNT } from '../../../constants/lnb';
import { BUTTON } from '../../../constants/input';
import { ROLE } from '../../../constants/member';
import {
  LABELTITLE,
  PLACEHOLDER,
  SELECT_CATEGORY_OPTIONS,
} from '../../../constants/input';
import * as UI from './style';
import Select from '../../../components/atoms/Select';
import InputFileThumbnail from '../../../components/atoms/InputFileThumbnail';
import InputText from '../../../components/atoms/InputText';
import ButtonText from '../../../components/atoms/ButtonText';

type valueObject = {
  [key: string]: any;
};

const AccountRestaurants = () => {
  const initialValue = {
    inputRestaurantName: '',
    inputRestaurantOffice: '',
    inputRestauranPhone: '',
    inputRegistrationNumber: '',
    inputCategorySelect: '',
    inputPostNumber: '',
    inputAddres1: '',
    inputAddres2: '',
    inputCategory: '',
    inputRestaurantImage: [],
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
    const value =
      target.type === 'checkbox' || target.type === 'radio'
        ? target.checked
        : target.value;
    const name = target.name;
    setFormValues({ ...formValues, [name]: value });
  };

  const inputTextData = {
    owner: [
      {
        htmlFor: 'inputRestaurantName',
        labelTitle: LABELTITLE.RESTAURANT_NAME,
        type: 'text',
        id: 'inputRestaurantName',
        name: 'inputRestaurantName',
        value: formValues.inputRestaurantName || '',
        maxLength: undefined,
        autoComplete: undefined,
        onChange: handleChange,
        placeholder: PLACEHOLDER.RESTAURANT_NAME,
        error: formErrors.inputRestaurantName,
      },
      {
        htmlFor: 'inputRestaurantOffice',
        labelTitle: LABELTITLE.RESTAURANT_OFFICE,
        type: 'text',
        id: 'inputRestaurantOffice',
        name: 'inputRestaurantOffice',
        value: formValues.inputRestaurantOffice || '',
        maxLength: undefined,
        autoComplete: undefined,
        onChange: handleChange,
        placeholder: PLACEHOLDER.RESTAURANT_OFFICE,
        error: formErrors.inputRestaurantOffice,
      },
      {
        htmlFor: 'inputRestauranPhone',
        labelTitle: LABELTITLE.RESTAURANT_PHONE,
        type: 'text',
        id: 'inputRestauranPhone',
        name: 'inputRestauranPhone',
        value: formValues.inputRestaurantOffice || '',
        maxLength: 12,
        autoComplete: undefined,
        onChange: handleChange,
        placeholder: PLACEHOLDER.RESTAURANT_PHONE,
        error: formErrors.inputRestauranPhone,
      },
      {
        htmlFor: 'inputRegistrationNumber',
        labelTitle: LABELTITLE.OWNER_REGISTRATION_NUMBER,
        type: 'text',
        id: 'inputRegistrationNumber',
        name: 'inputRegistrationNumber',
        value: formValues.inputRestaurantOffice || '',
        maxLength: 12,
        autoComplete: undefined,
        onChange: handleChange,
        placeholder: PLACEHOLDER.OWNER_REGISTRATION_NUMBER,
        error: formErrors.inputRegistrationNumber,
      },
    ],
  };

  const inputImageData = {
    owner: [
      {
        id: 'inputFileAvatarImage',
        htmlFor: 'inputFileAvatarImage',
        name: 'inputFileAvatarImage',
      },
    ],
  };

  console.log(formValues);

  const handleSubmit = () => {};
  return (
    <LNBLayout items={ACCOUNT.OWNER}>
      <UI.Container>
        <UI.Content>
          <Form onSubmit={handleSubmit}>
            {inputTextData.owner.map((item, index) => {
              return FormInputTextHorizontal(item, index);
            })}

            <Select
              name='inputCategorySelect'
              options={SELECT_CATEGORY_OPTIONS}
              onChange={handleChange}
            />

            <FormInputAddress
              postalCode={formValues.inputPostNumber}
              address1={formValues.inputAddres1}
              address2={formValues.inputAddres2}
              onChange={handleChange}
            />

            {inputImageData.owner.map((item, index) => {
              return (
                <InputFileThumbnail
                  key={`${item.id}-${index}`}
                  id={item.id}
                  htmlFor={item.htmlFor}
                  name={item.name}
                  accept='image/*'
                />
              );
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
