import styled, { css } from 'styled-components';

interface Props {
  direction?: string;
}

export const Container = styled.div`
  position: relative;
  ${(props: Props) => {
    switch (props.direction) {
      case 'horizontal':
        return css`
          display: flex;
          align-items: center;
          label {
            width: 95px;
          }
          label + div {
            margin-top: 0;
          }
        `;
    }
  }}
`;
