import React from 'react';
import styled from 'styled-components';
import FormInput from '../FormInput';
import FormItem from '../FormItem';
import FormError from '../FromError';
import InputText from '../../atoms/InputText';

const StyledFormError = styled(FormError)`
  margin-left: 150px;
`;

const FormInputTextHorizontal = (
  item: any,
  index: number,
  className?: string,
) => {
  return (
    <FormItem key={`${item.id}-${index}`} className={className}>
      <FormInput
        htmlFor={item.htmlFor}
        labelTitle={item.labelTitle}
        direction='horizontal'
      >
        <InputText
          type={item.type}
          id={item.id}
          name={item.name}
          value={item.value}
          maxLength={item.maxLength}
          autoComplete={item.autoComplete}
          onChange={item.onChange}
          placeholder={item.placeholder}
          readOnly={item.readOnly}
        />
      </FormInput>
      {item.error ? <StyledFormError message={item.error} /> : null}
    </FormItem>
  );
};

export default FormInputTextHorizontal;
