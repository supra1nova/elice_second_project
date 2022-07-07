import React from 'react';
import * as S from './style';
import PopupHeader from '../../molecules/PopupHeader';

export interface Props {
  title: string;
  subTitle: string;
}

export const Popup = ({ title, subTitle }: Props) => {
  return (
    <>
      <S.Container>
        <S.Content>
          <S.Section>
            <PopupHeader title={title} subTitle={subTitle} />
          </S.Section>
        </S.Content>
        <S.Dimd />
      </S.Container>
    </>
  );
};
