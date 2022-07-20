import styled, { css } from 'styled-components';

export const Container = styled.div`
  position: relative;
  width: 100%;
`;

export const Text = styled.div``;

export const Textarea = styled.textarea`
  display: block;
  width: 100%;
  height: 200px;
  padding: 16px 20px;
  border: 1px solid ${(props) => props.theme.colors.line};
  ${(props) => props.theme.font.caption};
  resize: none;
`;

export const Label = styled.label`
  ${(props) => props.theme.font.subtitle1};
  color: ${(props) => props.theme.colors.black};
  + div {
    margin-top: 10px;
    padding-bottom: 16px;
  }
`;
