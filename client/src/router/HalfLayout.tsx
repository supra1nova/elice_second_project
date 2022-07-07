import React from 'react';
import { Outlet } from 'react-router-dom';
import styled from 'styled-components';

const Container = styled.div`
  background: red;
`;

function HalfLayout() {
  return (
    <Container>
      <Outlet />
    </Container>
  );
}

export default HalfLayout;
