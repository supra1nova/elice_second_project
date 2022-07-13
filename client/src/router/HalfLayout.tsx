import React from 'react';
import { Outlet } from 'react-router-dom';
import styled from 'styled-components';

const AppContainer = styled.div`
  position: relative;
  width: 100%;
  min-height: 100vh;
  background: #f4f6f3;
`;

const HalfContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  padding: 10rem 0;
`;

const HalfContainerOutlet = styled.div`
  width: 580px;
  padding: 40px 20px;
  border-radius: 5px;
  background: #fff;
  margin: 0 auto;
`;

function HalfLayout() {
  return (
    <AppContainer>
      <HalfContainer>
        <HalfContainerOutlet>
          <Outlet />
        </HalfContainerOutlet>
      </HalfContainer>
    </AppContainer>
  );
}

export default HalfLayout;
