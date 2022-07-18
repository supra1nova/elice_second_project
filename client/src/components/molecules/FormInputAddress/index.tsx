import React from 'react';
import FormInput from '../FormInput';
import FormItem from '../FormItem';
import FormError from '../FromError';
import InputText from '../../atoms/InputText';
import ButtonText from '../../atoms/ButtonText';
import * as UI from './style';

interface Props {
  postNum: any;
  address1: any;
  address2: any;
  onChange: (e: any) => void;
}

const FormInputAddress = ({ postNum, address1, address2, onChange }: Props) => {
  return (
    <UI.Container>
      <FormItem>
        <FormInput htmlFor='inputPostNumber' labelTitle='주소'>
          <InputText
            type='text'
            id='inputPostNumber'
            name='inputPostNumber'
            value={postNum}
            readOnly
          />
        </FormInput>
        <ButtonText>우편번호 검색</ButtonText>
      </FormItem>
      <FormItem>
        <InputText
          type='text'
          id='inputAddres1'
          name='inputAddres1'
          value={address1}
          placeholder=''
          onChange={onChange}
        />
      </FormItem>
      <FormItem>
        <InputText
          type='text'
          id='inputAddres2'
          name='inputAddres2'
          value={address2}
          placeholder=''
          onChange={onChange}
        />
      </FormItem>
    </UI.Container>
  );
};

export default FormInputAddress;
