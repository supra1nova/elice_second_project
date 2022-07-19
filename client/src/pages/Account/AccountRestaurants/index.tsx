import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import * as API from '../../../api/api';
import LNBLayout from '../../../components/molecules/LNBLayout';
import Button from '../../../components/atoms/Button';
import Form from '../../../components/atoms/Form';
import FormItem from '../../../components/molecules/FormItem';
import FormInputTextHorizontal from '../../../components/molecules/FormInputTextHorizontal';
import FormInputAddress from '../../../components/molecules/FormInputAddress';
import FormFooter from '../../../components/molecules/FormFooter';
import Select from '../../../components/atoms/Select';
import InputFileThumbnail from '../../../components/atoms/InputFileThumbnail';
import Textarea from '../../../components/atoms/Textarea';
import Typography from '../../../components/atoms/Typography';
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

type valueObject = {
  [key: string]: any;
};

const StyleTypography = styled(Typography)`
  margin-bottom: 10px;
  ${(props) => props.theme.font.subtitle1};
  color: ${(props) => props.theme.colors.black};
`;

const AccountRestaurants = () => {
  const initialValue = {
    inputRestaurantName: '',
    inputRestaurantOffice: '',
    inputRestauranPhone: '',
    inputRegistrationNumber: '',
    inputSelectCategory: '',
    inputPostNumber: '',
    inputAddres1: '',
    inputAddres2: '',
    inputRestaurantImage: [],
    inputDescription: '',
    inputOwnerEmail: '',
  };

  const [openPopupSaveConfirm, setOpenPopupSaveConfirm] = useState(false);
  const [formValues, setFormValues] = useState<valueObject>(initialValue);
  const [formErrors, setFormErrors] = useState<valueObject>({});
  const [fileImage, setFileImage] = useState('');
  const [isSubmit, setIsSubmit] = useState(false);

  useEffect(() => {
    API.userGet('/api/users/user').then((res) => {
      const email = res.email;
      const ownerEmail = email;
      formValues.inputOwnerEmail = ownerEmail || null;
    });
  }, []);

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

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    try {
      const data = {
        REGNumber: formValues.inputRegistrationNumber,
        name: formValues.inputRestaurantName,
        address1: formValues.inputAddres1,
        address2: formValues.inputAddres2,
        postalcode: formValues.inputPostNumber,
        phoneNumber: formValues.inputRestauranPhone,
        category: formValues.inputSelectCategory,
        description: formValues.inputDescription,
        ownerEmail: formValues.inputOwnerEmail,
      };
      await API.post('/api/restaurants/', '', data);
      setOpenPopupSaveConfirm(true);
    } catch (err: any) {
      if (err.message === 'Request failed with status code 500') {
        alert('해당 정보를 입력해주세요');
      }
    }
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
        value: formValues.inputRestauranPhone || '',
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
        value: formValues.inputRegistrationNumber || '',
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

  const [result, setResult] = useState({});
  const propsFunction = (data: any) => {
    setResult(data);
  };

  console.log(result);

  return (
    <LNBLayout items={ACCOUNT.OWNER}>
      <UI.Container>
        <UI.Content>
          <Form onSubmit={handleSubmit}>
            {inputTextData.owner.map((item, index) => {
              return FormInputTextHorizontal(item, index);
            })}

            <Select
              name='inputSelectCategory'
              options={SELECT_CATEGORY_OPTIONS}
              onChange={handleChange}
              id='inputSelectCategory'
              htmlFor='inputSelectCategory'
              labelTitle={LABELTITLE.RESTAURANT_CATEGORY}
            />

            <FormInputAddress
              postalCode={formValues.inputPostNumber}
              address1={formValues.inputAddres1}
              address2={formValues.inputAddres2}
              propsFunction={propsFunction}
            />

            <FormItem>
              <StyleTypography>{LABELTITLE.RESTAURANT_IMAGE}</StyleTypography>
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
            </FormItem>

            <Textarea
              label={LABELTITLE.DESCRIPTION}
              htmlFor='inputDescription'
              id='inputDescription'
              name='inputDescription'
              placeholder=''
              value={formValues.inputDescription}
              onChange={handleChange}
            />

            <FormFooter>
              <Button component='primary' size='large' block>
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
