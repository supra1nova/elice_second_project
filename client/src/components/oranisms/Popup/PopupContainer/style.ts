import styled, { css } from 'styled-components';

interface Props {
  open: boolean;
  // width: string;
}

export const Container = styled.div`
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  height: 100vh;
  display: ${(props: Props) => (props.open ? 'block' : 'none')};
  ${(props: Props) => {
    if (props.open) {
      return css`
        opacity: 1;
        visibility: visible;
        transition: opacity 0.5s ease-out, visibility 0.5s ease-out;
      `;
    } else {
      return css`
        opacity: 0;
        visibility: hidden;
        transition: opacity 0.5s ease-out, visibility 0.5s ease-out 0.5s;
      `;
    }
  }}
`;

export const Content = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  z-index: 10;
`;

export const Section = styled.section`
  position: relative;
  min-width: 350px;
  padding: 40px 20px;
  border-radius: 5px;
  background: #fff;
`;

// width: ${(props: Props) => (props.width ? `${props.width}px` : 'auto')};

export const Dimd = styled.div`
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  z-index: 1;
`;
