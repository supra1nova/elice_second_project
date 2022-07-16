import styled, { css } from 'styled-components';

export const Container = styled.p`
  position: relative;
  ${(props) => props.theme.font.caption};
  color: ${(props) => props.theme.colors.font1};
`;
