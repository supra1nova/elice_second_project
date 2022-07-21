import React, { useState, useEffect } from 'react';
import DaumPostcode from 'react-daum-postcode';
import styled from 'styled-components';
import * as API from '../../../api/api';
import LNBLayout from '../../../components/molecules/LNBLayout';
import Button from '../../../components/atoms/Button';
import ButtonText from '../../../components/atoms/ButtonText';
import InputText from '../../../components/atoms/InputText';
import Select from '../../../components/atoms/Select';
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
import InputFileButton from '../../../components/atoms/InputFileButton';
import FileTumbnail from '../../../components/atoms/FileTumbnail';

const StyleTypography = styled(Typography)`
  margin-bottom: 10px;
  ${(props) => props.theme.font.subtitle1};
  color: ${(props) => props.theme.colors.black};
`;

const StyleAddressContainer = styled.div`
  position: relative;
  margin: 26px 0 26px;
`;

const StyleInputFileImage = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  > p {
    margin-bottom: 0;
  }
  & label {
    width: 100px;
    text-align: center;
    background: ${(props) => props.theme.colors.main1};
    color: ${(props) => props.theme.colors.white};
  }
`;

const StyleInputFileContainer = styled.div``;

const StyleInputFilePreview = styled.div`
  display: flex;

  > div {
    margin-right: 10px;
    margin-top: 26px;
  }
  > div:last-child {
    margin-right: 0;
  }
  img {
    min-height: 100px;
  }
`;

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

const AccountRestaurantsCreate = () => {
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
  const [address, setAddress] = useState<valueObject>({
    inputPostNumber: '',
    inputAddres1: '',
  });
  const [image, setImage] = useState<any>({
    image_file: [],
    preview_URL: [],
  });
  const [isSubmit, setIsSubmit] = useState(false);

  const errors: valueObject = {};

  useEffect(() => {
    return () => {
      URL.revokeObjectURL(image.preview_URL);
    };
  }, []);

  useEffect(() => {
    setFormValues(formValues);
    console.log(formValues);
  }, [formValues]);

  const handleClosePopupSaveConfirm = (e: any) => {
    e.preventDefault();
    setOpenPopupSaveConfirm(!openPopupSaveConfirm);
  };

  const handleOpenPostCodePopup = (e: any) => {
    e.preventDefault();
    setOpenPostCodePopup(true);
  };

  const saveFileImage = (e: any) => {
    e.preventDefault();

    const imageLists = e.target.files; // 파일 객체 불러옴

    let imageUrlLists = [...image.preview_URL];
    let imageFileLists = [...image.image_file];

    for (let i = 0; i < imageLists.length; i++) {
      URL.revokeObjectURL(imageLists[i]);
      const currentImageUrl = URL.createObjectURL(imageLists[i]);
      const currentImageFile = e.target.files[i];
      imageUrlLists.push(currentImageUrl);
      imageFileLists.push(currentImageFile);
    }

    if (imageUrlLists.length > 6) {
      imageUrlLists = imageUrlLists.slice(0, 6);
      imageFileLists = imageFileLists.slice(0, 6);
    }

    setImage({ image_file: imageFileLists, preview_URL: imageUrlLists });
  };

  const deleteFileImage = (id: any) => {
    URL.revokeObjectURL(image.preview_URL);
    const deleteImage = image.preview_URL.filter(
      (item: any, index: any) => index !== id,
    );
    setImage({ image_file: deleteImage, preview_URL: deleteImage });
  };

  const handleChange = (e: any) => {
    const target = e.target;
    const value =
      target.type === 'checkbox' || target.type === 'radio'
        ? target.checked
        : target.value;
    const name = target.name;
    setFormValues({ ...formValues, [name]: value });

    if (target.type === 'select-one') {
      const index = target.options.selectedIndex;
      const text = target.options[index].text;
      setFormValues({ ...formValues, [name]: text });
    }
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    setAddress(address);
    setFormErrors(validate(formValues));
    setIsSubmit(true);

    try {
      const data = {
        REGNumber: formValues.inputRegistrationNumber,
        name: formValues.inputRestaurantName,
        address1: address.inputAddres1,
        address2: formValues.inputAddres2,
        postalcode: address.inputPostNumber,
        phoneNumber: formValues.inputRestauranPhone,
        category: formValues.inputSelectCategory,
        description: formValues.inputDescription,
        ownerEmail: formValues.inputOwnerEmail,
      };

      console.log(data);

      await API.post('/api/restaurants/', '', data);

      if (image.image_file) {
        const formData = new FormData();
        for (let i = 0; i < image.image_file.length; i++) {
          formData.append('image', image.image_file[i]);
        }
        formData.append('REGNumber', formValues.inputRegistrationNumber);
        await API.filePost('/api/restaurantImages', '', formData);
      }

      setOpenPopupSaveConfirm(true);
    } catch (err: any) {
      console.error(err);
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

    setAddress({
      inputPostNumber: data.zonecode,
      inputAddres1: data.address,
    });

    setOpenPostCodePopup(openPostCodePopup);
  };

  const validate = (values: any) => {
    const inputRestaurantNameValue = values.inputRestaurantName;
    const inputRestaurantOfficeValue = values.inputRestaurantOffice;
    const inputRestauranPhoneValue = values.inputRestauranPhone;
    const inputRegistrationNumberValue = values.inputRegistrationNumber;
    const inputSelectCategoryValue = values.inputSelectCategory;
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
        value: address.inputPostNumber || '',
        maxLength: 5,
        autoComplete: undefined,
        placeholder: PLACEHOLDER.ADDRESS_POSTNUMBER,
        onChange: handleChange,
        error: formErrors.inputPostNumber,
        readOnly: true,
      },
    ],
  };

  return (
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
                value={address.inputAddres1}
                placeholder=''
                onChange={handleChange}
                readOnly
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
            <StyleInputFileImage>
              <StyleTypography>{LABELTITLE.RESTAURANT_IMAGE}</StyleTypography>
              <InputFileButton
                id='inputFileAvatarImage'
                htmlFor='inputFileAvatarImage'
                name='inputFileAvatarImage'
                accept='image/*'
                onChange={saveFileImage}
                multiple
              />
            </StyleInputFileImage>
            {image.preview_URL ? (
              <StyleInputFilePreview>
                {image.preview_URL.map((image: any, id: any) => {
                  return (
                    <FileTumbnail
                      image={image}
                      key={id}
                      onClick={() => {
                        deleteFileImage(id);
                      }}
                    />
                  );
                })}
              </StyleInputFilePreview>
            ) : null}
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
  );
};

export default AccountRestaurantsCreate;
