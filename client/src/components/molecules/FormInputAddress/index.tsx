import React from 'react';
import styled from 'styled-components';
import FormInput from '../FormInput';
import FormItem from '../FormItem';
import FormError from '../FromError';
import InputText from '../../atoms/InputText';
import ButtonText from '../../atoms/ButtonText';
import * as UI from './style';
import FormInputTextHorizontal from '../FormInputTextHorizontal';

interface Props {
  postalCode: any;
  address1: any;
  address2: any;
  onChange: (e: any) => void;
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
}: Props) => {
  return (
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
  );
};

export default FormInputAddress;
