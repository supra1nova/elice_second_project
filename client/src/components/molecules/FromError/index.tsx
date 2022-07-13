import React from 'react';
import Typography from '../../atoms/Typography';
import * as UI from './style';

interface Props {
  message?: string;
  children?: React.ReactNode | string;
}

const FormError = ({ message, children }: Props) => {
  return (
    <UI.Container>
      <Typography>{message}</Typography>
      {children}
    </UI.Container>
  );
};

export default FormError;
