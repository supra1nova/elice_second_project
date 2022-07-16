import styled, { css } from 'styled-components';

export const Container = styled.div`
  position: relative;
`;

export const JoinContainer = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: center;
  margin-top: 10px;
  text-align: center;
  p {
    margin-right: 10px;
    color: ${(props) => props.theme.colors.font2};
  }
`;
