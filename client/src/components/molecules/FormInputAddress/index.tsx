import React, { useState } from 'react';
import styled from 'styled-components';
import DaumPostcode from 'react-daum-postcode';
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
  onChange: (e: any) => void;
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
  onChange,
  propsFunction,
}: Props) => {
  const [data, setData] = useState({ name1: 'name1', name2: 'name2' });
  propsFunction(data);

  // const [address, setAddress] = useState(''); // 주소
  // const [addressDetail, setAddressDetail] = useState(''); // 상세주소

  // const [isOpenPost, setIsOpenPost] = useState(false);

  // const onChangeOpenPost = () => {
  //   setIsOpenPost(!isOpenPost);
  // };

  // const onCompletePost = (data: any) => {
  //   let fullAddr = data.address;
  //   let extraAddr = '';

  //   if (data.addressType === 'R') {
  //     if (data.bname !== '') {
  //       extraAddr += data.bname;
  //     }
  //     if (data.buildingName !== '') {
  //       extraAddr +=
  //         extraAddr !== '' ? `, ${data.buildingName}` : data.buildingName;
  //     }
  //     fullAddr += extraAddr !== '' ? ` (${extraAddr})` : '';
  //   }

  //   setAddress(data.zonecode);
  //   setAddressDetail(fullAddress);
  //   setIsOpenPost(false);
  // };

  // const postCodeStyle = {
  //   display: 'block',
  //   position: 'relative',
  //   top: '0%',
  //   width: '400px',
  //   height: '400px',
  //   padding: '7px',
  // };

  return (
    <>
      <UI.Container>
        <StyleFormItemHorizontal>
          <FormInputTextHorizontal htmlFor='inputPostNumber' labelTitle='주소'>
            <InputText
              type='text'
              id='inputPostNumber'
              name='inputPostNumber'
              value={postalCode}
              readOnly
            />
          </FormInputTextHorizontal>
          <ButtonText>우편번호 검색</ButtonText>
        </StyleFormItemHorizontal>
        <StyleFormItem>
          <InputText
            type='text'
            id='inputAddres1'
            name='inputAddres1'
            value={address1}
            placeholder=''
            onChange={onChange}
          />
        </StyleFormItem>
        <StyleFormItem>
          <InputText
            type='text'
            id='inputAddres2'
            name='inputAddres2'
            value={address2}
            placeholder=''
            onChange={onChange}
          />
        </StyleFormItem>
      </UI.Container>
      {/* {isOpenPost ? (
        <DaumPostcode
          style={postCodeStyle}
          autoClose
          onComplete={onCompletePost}
        />
      ) : null} */}
    </>
  );
};

export default FormInputAddress;
