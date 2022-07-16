import styled, { css } from 'styled-components';

export const Container = styled.div`
  position: relative;
`;

export const Label = styled.label`
  display: inline-block;
  height: 33px;
  padding: 9px 16px;
  border-radius: 23px;
  box-sizing: border-box;
  ${(props) => props.theme.font.subtitle2};
  background-color: ${(props) => props.theme.colors.white};
  cursor: pointer;
  border: 1px solid ${(props) => props.theme.colors.main1};
`;
export const Input = styled.input`
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  border: 0;
`;
