import React from 'react';
import styled from 'styled-components';
import Typography from '../../atoms/Typography';
import * as UI from './style';

const StyledTypography = styled(Typography)`
  color: #fb5e64;
`;
interface Props {
  message?: string;
  className?: string;
  children?: React.ReactNode | string;
}

const FormError = ({ className, message, children }: Props) => {
  return (
    <UI.Container className={className}>
      <StyledTypography>{message}</StyledTypography>
      {children}
    </UI.Container>
  );
};

export default FormError;
