import React from 'react';
import * as UI from './style';
import Label from '../../atoms/Label';

interface Props {
  htmlFor: string;
  labelTitle: string;
  direction?: string;
  children: React.ReactNode | string;
}

const FormInput = ({ htmlFor, labelTitle, direction, children }: Props) => {
  return (
    <UI.Container direction={direction}>
      <Label htmlFor={htmlFor} labelTitle={labelTitle} />
      {children}
    </UI.Container>
  );
};

export default FormInput;
