import styled, { css } from 'styled-components';

export const Container = styled.div`
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  height: 100vh;
`;

export const Content = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  z-index: 10;
`;

export const Section = styled.section`
  position: relative;
  min-width: 350px;
  padding: 40px 20px;
  border-radius: 5px;
  background: #fff;
`;

export const Dimd = styled.div`
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  z-index: 1;
`;
