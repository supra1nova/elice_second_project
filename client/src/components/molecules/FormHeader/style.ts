import styled, { css } from 'styled-components';

export const Container = styled.div`
  position: relative;
  text-align: center;
  margin-bottom: 20px;
`;

export const Heading = styled.h3`
  ${(props) => props.theme.font.title1};
  color: ${(props) => props.theme.colors.black};
`;
