import React from 'react';
import * as UI from './style';

interface Props {
  title: string;
  subTitle: string;
}

const InputSwitchDescription = ({ title, subTitle }: Props) => {
  return (
    <UI.Container>
      <UI.Title>{title}</UI.Title>
      <UI.SubTitle>{subTitle}</UI.SubTitle>
    </UI.Container>
  );
};

export default InputSwitchDescription;
