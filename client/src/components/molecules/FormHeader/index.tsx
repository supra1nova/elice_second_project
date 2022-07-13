import React from 'react';
import * as UI from './style';

interface Props {
  title?: React.ReactNode | string;
  children?: React.ReactNode | string;
}

const FormHeader = ({ title, children }: Props) => {
  return (
    <UI.Container>
      <UI.Heading>{title}</UI.Heading>
      {children}
    </UI.Container>
  );
};

export default FormHeader;
