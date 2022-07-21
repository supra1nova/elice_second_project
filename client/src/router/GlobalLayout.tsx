import React from 'react';
import { Outlet } from 'react-router-dom';
import { Gnb } from '../components/oranisms/GNB/Gnb';
import styled from 'styled-components';

const AppContainer = styled.div`
  position: relative;
  width: 100%;
  min-height: 100vh;
  background: #fff;
`;

const GlobalContainer = styled.div``;

const GlobalContainerOutlet = styled.div`
  position: relative;
  margin-left: 233px;
`;

const GlobalLayout = () => {
  return (
    <AppContainer>
      <GlobalContainer>
        <Gnb />
        <GlobalContainerOutlet>
          <Outlet />
        </GlobalContainerOutlet>
      </GlobalContainer>
    </AppContainer>
  );
};

export default GlobalLayout;
