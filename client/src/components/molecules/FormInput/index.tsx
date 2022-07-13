import React from 'react';
import * as UI from './style';
import Label from '../../atoms/Label';

interface Props {
  htmlFor?: string;
  labelTitle?: string;
  children?: React.ReactNode | string;
}

const FormInput = ({ htmlFor, labelTitle, children }: Props) => {
  return (
    <UI.Container>
      <Label htmlFor={htmlFor} labelTitle={labelTitle} />
      {children}
    </UI.Container>
  );
};

export default FormInput;
