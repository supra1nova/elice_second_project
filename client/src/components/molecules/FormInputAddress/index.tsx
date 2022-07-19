import React, { useState } from 'react';
import styled from 'styled-components';
import PostCodeContainer from '../../oranisms/PostCode/PostCodeContainer';
import PostCodeDom from '../../oranisms/PostCode/PostCodeDom';
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

  const [isPopupOpen, setIsPopupOpen] = useState(false);

  // 팝업창 열기
  const openPostCode = (e: any) => {
    e.preventDefault();
    setIsPopupOpen(true);
  };

  // 팝업창 닫기
  const closePostCode = () => {
    setIsPopupOpen(false);
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
              value={postalCode}
              readOnly
            />
          </FormInputTextHorizontal>
          <ButtonText onClick={openPostCode}>우편번호 검색</ButtonText>
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
      <div id='popupDom'>
        {isPopupOpen && (
          <PostCodeDom>
            <PostCodeContainer />
          </PostCodeDom>
        )}
      </div>
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
