import React from 'react';
import Typography from '../../atoms/Typography';
import * as UI from './style';

interface Props {
  message?: string;
  className?: string;
  children?: React.ReactNode | string;
}

const FormError = ({ className, message, children }: Props) => {
  return (
    <UI.Container className={className}>
      <Typography>{message}</Typography>
      {children}
    </UI.Container>
  );
};

export default FormError;
