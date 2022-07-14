import styled, { css } from 'styled-components';

export const Container = styled.div`
  position: fixed;
  left: 234px;
  top: 0;
  width: 234px;
  height: 100%;
  padding: 40px;
  border-right: 1px solid ${(props) => props.theme.colors.line};
`;
