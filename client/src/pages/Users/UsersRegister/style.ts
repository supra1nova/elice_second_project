import styled, { css } from 'styled-components';

export const Container = styled.div`
  position: relative;
`;

export const Notice = styled.div`
  padding: 20px;
  text-align: center;
  background: ${(props) => props.theme.colors.font1};
  color: ${(props) => props.theme.colors.white};
  ${(props) => props.theme.font.subtitle1}
`;
