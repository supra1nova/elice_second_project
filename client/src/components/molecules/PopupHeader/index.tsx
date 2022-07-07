import React from 'react';
import * as UI from './style';
import Close from '../../../assets/svg/Close';

export interface Props {
  title: string;
  subTitle: string;
}

const PopupHeader = ({ title, subTitle }: Props) => {
  return (
    <>
      <UI.Title>{title}</UI.Title>
      <UI.SubTitle>{subTitle}</UI.SubTitle>
      <UI.Close>
        <Close />
      </UI.Close>
    </>
  );
};

export default PopupHeader;
