import styled, { css } from 'styled-components';

export const Container = styled.div`
  position: relative;
  max-width: 740px;
`;

export const FormItem = styled.div`
  display: flex;
  align-items: center;
`;

export const FormColumn = styled.div`
  width: calc(33% - 60px);
  display: flex;
  margin-right: 20px;
`;

export const FormInput = styled.div`
  width: 100%;
  div {
    padding-bottom: 0;
  }
  & + div {
    margin-left: 20px;
  }
  label {
    display: block;
    margin-bottom: 10px;
  }
`;

export const FormButton = styled.div`
  margin-top: 20px;
`;

export const DatePicker = styled.div`
  input {
    width: 100%;
    border: 1px solid ${(props) => props.theme.colors.line};
    height: 50px;
    padding: 16px 20px;
  }
`;

export const FormLabel = styled.div`
  ${(props) => props.theme.font.subtitle1};
  color: ${(props) => props.theme.colors.black};
  margin-bottom: 10px;
`;

export const FormError = styled.div`
  position: relative;
  height: 40px;

  p {
    position: absolute;
    left: 0;
    top: 10px;
  }
`;
