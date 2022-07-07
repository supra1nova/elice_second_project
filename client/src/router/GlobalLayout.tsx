import React from 'react';
import { Outlet } from 'react-router-dom';
import { Gnb } from '../components/oranisms/Gnb';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
`;

const GlobalLayout = () => {
  return (
    <Container>
      <Gnb />
      <Outlet />
    </Container>
  );
};

export default GlobalLayout;
