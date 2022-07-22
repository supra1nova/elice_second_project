import styled, { css } from 'styled-components';

export const Container = styled.div`
  position: relative;
  max-width: 740px;
  margin-bottom: 40px;
`;

export const FormItem = styled.div`
  display: flex;
  align-items: start;
`;

export const FormColumn = styled.div`
  width: calc(100% - 120px);
  display: flex;
  > div:first-child {
    width: 60%;
  }
  > div:last-child {
    width: 40%;
    margin-bottom: 10px !important;
  }
  > div + div {
    margin-left: 20px;
  }
  label {
    width: 70px;
  }
  p {
    margin-left: -80px;
  }
`;

export const FormButton = styled.div`
  width: 110px;
  text-align: right;
  margin-top: 10px;
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
