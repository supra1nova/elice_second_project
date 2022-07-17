import React from 'react';
import * as UI from './style';

interface Props {
  children: React.ReactNode | string;
}

const FormItem = ({ children }: Props) => {
  return <UI.Container>{children}</UI.Container>;
};

export default FormItem;
