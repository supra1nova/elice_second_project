import React from 'react';
import * as S from './style';
import Close from '../../../assets/svg/Close';

export interface Props {
  title: string;
  subTitle: string;
}

const PopupHeader = ({ title, subTitle }: Props) => {
  return (
    <>
      <S.Title>{title}</S.Title>
      <S.SubTitle>{subTitle}</S.SubTitle>
      <S.Close>
        <Close />
      </S.Close>
    </>
  );
};

export default PopupHeader;
