import React from 'react';
import * as UI from './style';

interface Props {
  children?: React.ReactNode | string;
}

const FormSwitch = ({ children }: Props) => {
  return <UI.Container>{children}</UI.Container>;
};

export default FormSwitch;
