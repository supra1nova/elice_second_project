import React from 'react';
import Header from '../Header';
import Contents from '../Contents';
import * as UI from './style';

const Template = () => {
  return (
    <>
      <UI.Container>
        <UI.Content>
          <UI.Section>
            <Header />
            <Contents />
          </UI.Section>
        </UI.Content>
        <UI.Dimd />
      </UI.Container>
    </>
  );
};

export default Template;
