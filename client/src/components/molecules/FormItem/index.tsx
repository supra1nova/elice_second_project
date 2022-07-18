import React from 'react';
import * as UI from './style';

interface Props {
  className?: string;
  children: React.ReactNode | string;
}

const FormItem = ({ className, children }: Props) => {
  return <UI.Container className={className}>{children}</UI.Container>;
};

export default FormItem;
