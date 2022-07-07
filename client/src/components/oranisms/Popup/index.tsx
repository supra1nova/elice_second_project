import React from 'react';
import * as UI from './style';
import PopupHeader from '../../molecules/PopupHeader';

export interface Props {
  title: string;
  subTitle: string;
}

export const Popup = ({ title, subTitle }: Props) => {
  return (
    <>
      <UI.Container>
        <UI.Content>
          <UI.Section>
            <PopupHeader title={title} subTitle={subTitle} />
          </UI.Section>
        </UI.Content>
        <UI.Dimd />
      </UI.Container>
    </>
  );
};
