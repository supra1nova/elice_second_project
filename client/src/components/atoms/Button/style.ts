import styled, { css } from 'styled-components';

interface Props {
  style: string;
}

export const Button = styled.button`
  position: relative;
  ${(props) => {
    switch (props.style) {
      case 'dark':
        return css`
          background-color: black;
          color: white;
        `;
      default:
        return css`
          background-color: white;
          color: black;
        `;
    }
  }}
`;
