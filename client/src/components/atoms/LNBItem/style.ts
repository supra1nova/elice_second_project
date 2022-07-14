import styled, { css } from 'styled-components';

interface Props {
  active: boolean;
}

export const Container = styled.button`
  position: relative;
  ${(props) => props.theme.font.title1}
  ${(props: Props) => {
    if (props.active) {
      return css``;
    }
  }}
`;
