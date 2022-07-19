import React, { useState, useEffect } from 'react';
import DaumPostcode from 'react-daum-postcode';
import styled from 'styled-components';
import * as API from '../../../api/api';
import LNBLayout from '../../../components/molecules/LNBLayout';
import Button from '../../../components/atoms/Button';
import ButtonText from '../../../components/atoms/ButtonText';
import InputText from '../../../components/atoms/InputText';
import Select from '../../../components/atoms/Select';
import InputFileThumbnail from '../../../components/atoms/InputFileThumbnail';
import Textarea from '../../../components/atoms/Textarea';
import Typography from '../../../components/atoms/Typography';
import Form from '../../../components/atoms/Form';
import FormItem from '../../../components/molecules/FormItem';
import FormInputTextHorizontal from '../../../components/molecules/FormInputTextHorizontal';
import FormFooter from '../../../components/molecules/FormFooter';
import FormError from '../../../components/molecules/FromError';
import PostCodePopup from '../../../components/oranisms/PostCode/PostCodePopup';
import PopupSaveConfirm from './template/PopupSaveConfirm';
import { ACCOUNT } from '../../../constants/lnb';
import { BUTTON } from '../../../constants/input';
import { ROLE } from '../../../constants/member';
import { ERROR } from '../../../constants/error';
import {
  LABELTITLE,
  PLACEHOLDER,
  SELECT_CATEGORY_OPTIONS,
} from '../../../constants/input';
import * as UI from './style';

const StyleTypography = styled(Typography)`
  margin-bottom: 10px;
  ${(props) => props.theme.font.subtitle1};
  color: ${(props) => props.theme.colors.black};
`;

const StyleAddressContainer = styled.div`
  position: relative;
  margin: 26px 0 26px;
`;

const StyleInputFileContainer = styled.div``;

const StyleTextareaContainer = styled.div`
  position: relative;
  margin: 26px 0 26px;
`;

const StyleFormItem = styled(FormItem)`
  padding-bottom: 0;
  &:nth-child(3) {
    padding-bottom: 16px;
  }
`;

const StyleFormItemHorizontal = styled(StyleFormItem)`
  display: flex;
  align-items: center;
  & > div {
    padding-bottom: 0;
    margin-bottom: 0;
    margin-right: 20px;
  }
`;

type valueObject = {
  [key: string]: any;
};

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
  const [openPostCodePopup, setOpenPostCodePopup] = useState(false);
  const [formValues, setFormValues] = useState<valueObject>(initialValue);
  const [formErrors, setFormErrors] = useState<valueObject>({});
  const [fileImage, setFileImage] = useState('');
  const [isSubmit, setIsSubmit] = useState(false);
  const errors: valueObject = {};

  useEffect(() => {
    API.get('/api/restaurants/:REGNumber').then((res) => {
      // const email = res.email;
      // const ownerEmail = email;
      // formValues.inputOwnerEmail = ownerEmail || null;
      console.log(res);
    });
  }, []);

  useEffect(() => {
    console.log(formErrors);
    if (Object.keys(formErrors).length === 0 && isSubmit) {
      console.log(formValues);
    }
  }, [formErrors]);

  const handleOpenPopupSaveConfirm = (e: any) => {
    e.preventDefault();
    setOpenPopupSaveConfirm(true);
  };

  const handleClosePopupSaveConfirm = (e: any) => {
    e.preventDefault();
    setOpenPopupSaveConfirm(!openPopupSaveConfirm);
  };

  const handleOpenPostCodePopup = (e: any) => {
    e.preventDefault();
    setOpenPostCodePopup(true);
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

    setFormErrors(validate(formValues));
    setIsSubmit(true);

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
      console.error(err);
      // if (err.message === 'Request failed with status code 500') {
      //   alert('해당 정보를 입력해주세요');
      // }
    }
  };

  const handlePostCode = (data: any) => {
    let fullAddress = data.address;
    let extraAddress = '';

    if (data.addressType === 'R') {
      if (data.bname !== '') {
        extraAddress += data.bname;
      }
      if (data.buildingName !== '') {
        extraAddress +=
          extraAddress !== '' ? `, ${data.buildingName}` : data.buildingName;
      }
      fullAddress += extraAddress !== '' ? ` (${extraAddress})` : '';
    }
    formValues.inputPostNumber = data.zonecode;
    formValues.inputAddres1 = data.address;
    setOpenPostCodePopup(openPostCodePopup);
  };

  const validate = (values: any) => {
    const inputRestaurantNameValue = values.inputRestaurantName;
    const inputRestaurantOfficeValue = values.inputRestaurantOffice;
    const inputRestauranPhoneValue = values.inputRestauranPhone;
    const inputRegistrationNumberValue = values.inputRegistrationNumber;
    const inputSelectCategoryValue = values.inputSelectCategory;
    const inputPostNumberValue = values.inputPostNumber;
    const inputAddres1Value = values.inputAddres1;
    const inputAddres2Value = values.inputAddres2;
    const inputDescriptionValue = values.inputDescription;

    if (!inputRestaurantNameValue) {
      errors.inputRestaurantName = ERROR.RESTAURANT_NAME;
    }

    if (!inputRestaurantOfficeValue) {
      errors.inputRestaurantOffice = ERROR.RESTAURANT_OFFICE;
    }

    if (!inputRestauranPhoneValue) {
      errors.inputRestauranPhone = ERROR.PHONE_INPUT;
    }

    if (!inputRegistrationNumberValue) {
      errors.inputRegistrationNumber = ERROR.OWNER_REGISTRATION_NUMBER_INPUT;
    }

    if (!inputPostNumberValue || !inputAddres1Value || inputAddres2Value) {
      errors.address = ERROR.ADDRESS_INPUT;
    }

    if (!inputDescriptionValue) {
      errors.inputDescription = ERROR.DESCRIPTION_INPUT;
    }

    return errors;
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

  const inputAddressData = {
    owner: [
      {
        htmlFor: 'inputPostNumber',
        labelTitle: LABELTITLE.ADDRESS_POSTNUMBER,
        type: 'text',
        id: 'inputPostNumber',
        name: 'inputPostNumber',
        value: formValues.inputPostNumber || '',
        maxLength: 5,
        autoComplete: undefined,
        onChange: handleChange,
        placeholder: PLACEHOLDER.ADDRESS_POSTNUMBER,
        error: formErrors.inputPostNumber,
        readOnly: true,
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

            <StyleAddressContainer>
              <StyleFormItemHorizontal>
                {inputAddressData.owner.map((item, index) => {
                  return FormInputTextHorizontal(item, index);
                })}
                <ButtonText onClick={handleOpenPostCodePopup}>
                  우편번호 검색
                </ButtonText>
              </StyleFormItemHorizontal>
              <StyleFormItem>
                <InputText
                  type='text'
                  id='inputAddres1'
                  name='inputAddres1'
                  value={formValues.inputAddres1}
                  placeholder=''
                  readOnly
                  onChange={handleChange}
                />
              </StyleFormItem>
              <StyleFormItem>
                <InputText
                  type='text'
                  id='inputAddres2'
                  name='inputAddres2'
                  value={formValues.inputAddres2}
                  placeholder=''
                  onChange={handleChange}
                />
              </StyleFormItem>
              <FormError message={formErrors.address}></FormError>
            </StyleAddressContainer>

            <StyleInputFileContainer>
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
            </StyleInputFileContainer>

            <StyleTextareaContainer>
              <Textarea
                label={LABELTITLE.DESCRIPTION}
                htmlFor='inputDescription'
                id='inputDescription'
                name='inputDescription'
                placeholder=''
                value={formValues.inputDescription}
                onChange={handleChange}
              />
              <FormError message={formErrors.inputDescription}></FormError>
            </StyleTextareaContainer>

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
        <PostCodePopup open={openPostCodePopup}>
          <DaumPostcode onComplete={handlePostCode} />
        </PostCodePopup>
      </UI.Container>
    </LNBLayout>
  );
};

export default AccountRestaurants;
