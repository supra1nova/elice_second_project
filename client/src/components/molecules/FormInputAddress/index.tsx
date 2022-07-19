import React, { useEffect, useState } from 'react';
import DaumPostcode from 'react-daum-postcode';
import styled from 'styled-components';
import PostCodePopup from '../../oranisms/PostCode/PostCodePopup';
import FormInputTextHorizontal from '../FormInputTextHorizontal';
import FormItem from '../FormItem';
import FormError from '../FromError';
import InputText from '../../atoms/InputText';
import ButtonText from '../../atoms/ButtonText';
import * as UI from './style';

interface Props {
  postalCode: any;
  address1: any;
  address2: any;
  propsFunction: any;
}

const StyleFormItem = styled(FormItem)`
  padding-bottom: 0;
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

const FormInputAddress = ({
  postalCode,
  address1,
  address2,
  propsFunction,
}: Props) => {
  const initialValue = {
    inputPostNumber: '',
    inputAddres1: '',
    inputAddres2: '',
  };
  const [addressValue, setAddressValue] = useState(initialValue);

  const [openPostCodePopup, setOpenPostCodePopup] = useState(false);

  useEffect(() => {
    propsFunction(addressValue);
  }, [addressValue]);
  // 팝업창 열기

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
    setAddressValue({ ...addressValue, [name]: value });
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
    addressValue.inputPostNumber = data.zonecode;
    addressValue.inputAddres1 = data.address;
    setOpenPostCodePopup(openPostCodePopup);
  };

  return (
    <>
      <UI.Container>
        <StyleFormItemHorizontal>
          <FormInputTextHorizontal htmlFor='inputPostNumber' labelTitle='주소'>
            <InputText
              type='text'
              id='inputPostNumber'
              name='inputPostNumber'
              value={addressValue.inputPostNumber}
              readOnly={true}
            />
          </FormInputTextHorizontal>
          <ButtonText onClick={handleOpenPostCodePopup}>
            우편번호 검색
          </ButtonText>
        </StyleFormItemHorizontal>
        <StyleFormItem>
          <InputText
            type='text'
            id='inputAddres1'
            name='inputAddres1'
            value={addressValue.inputAddres1}
            placeholder=''
            onChange={handleChange}
          />
        </StyleFormItem>
        <StyleFormItem>
          <InputText
            type='text'
            id='inputAddres2'
            name='inputAddres2'
            value={addressValue.inputAddres2}
            placeholder=''
            onChange={handleChange}
          />
        </StyleFormItem>
      </UI.Container>
      <PostCodePopup open={openPostCodePopup}>
        <DaumPostcode onComplete={handlePostCode} />
      </PostCodePopup>
    </>
  );
};

export default FormInputAddress;
