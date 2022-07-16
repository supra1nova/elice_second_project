import styled, { css } from 'styled-components';

export const Label = styled.label`
  ${(props) => props.theme.font.subtitle1};
  color: ${(props) => props.theme.colors.black};
  + div {
    margin-top: 10px;
  }
`;
