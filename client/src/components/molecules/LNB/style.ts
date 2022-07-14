import styled, { css } from 'styled-components';

export const Container = styled.div`
  position: absolute;
  left: 0;
  top: 0;
  width: 234px;
  height: 100%;
  padding: 40px;
  border-right: 1px solid ${(props) => props.theme.colors.line};
`;
