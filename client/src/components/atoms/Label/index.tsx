import React from 'react';
import * as UI from './style';

interface Props {
  htmlFor?: string;
  labelTitle?: string;
  children?: React.ReactNode | string;
}
const Label = ({ htmlFor, labelTitle, children }: Props) => {
  return <UI.Label htmlFor={htmlFor}>{labelTitle}</UI.Label>;
};

export default Label;
