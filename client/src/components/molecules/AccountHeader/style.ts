import styled, { css } from 'styled-components';

export const Container = styled.div`
  margin-bottom: 20px;
`;

export const Title = styled.h3`
  ${(props) => props.theme.font.title1};
  color: ${(props) => props.theme.colors.black};
`;
