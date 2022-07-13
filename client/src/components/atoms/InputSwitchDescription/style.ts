import styled, { css } from 'styled-components';

export const Container = styled.div``;

export const Title = styled.p`
  ${(props) => props.theme.font.subtitle2};
  color: ${(props) => props.theme.colors.font1};
`;

export const SubTitle = styled.p`
  margin-top: 10px;
  ${(props) => props.theme.font.description2};
  color: ${(props) => props.theme.colors.font1};
`;
