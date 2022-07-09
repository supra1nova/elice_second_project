import React from 'react';
import * as UI from './style';
import Header from './Header';
import Contents from './Contents';

export interface Props {
  title?: string;
  subTitle?: string;
  children?: React.ReactElement | string;
}

export const Popup = ({ title, subTitle, children }: Props) => {
  return (
    <>
      <UI.Container>
        <UI.Content>
          <UI.Section>
            <Header title={title} subTitle={subTitle} />
            <Contents>{children}</Contents>
          </UI.Section>
        </UI.Content>
        <UI.Dimd />
      </UI.Container>
    </>
  );
};
