import styled, { css } from 'styled-components';

export const Label = styled.label`
  ${(props) => props.theme.font.subtitle1};
  color: ${(props) => props.theme.colors.black};
  flex-shrink: 0;
  + div {
    margin-top: 10px;
  }
`;
