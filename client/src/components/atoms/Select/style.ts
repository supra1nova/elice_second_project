import styled, { css } from 'styled-components';

export const Container = styled.div`
  position: relative;
  width: 100%;
  display: flex;
  align-items: center;
  background-image: url("data:image/svg+xml,%3Csvg width='12' height='8' viewBox='0 0 12 8' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M10.59 -1.85161e-06L6 4.94467L1.41 -2.46532e-07L2.66162e-07 1.52227L6 8L12 1.52227L10.59 -1.85161e-06Z' fill='%23A6A8A3'/%3E%3C/svg%3E%0A");
  background-repeat: no-repeat;
  background-position: calc(100% - 20px) 50%;
`;

export const Select = styled.select`
  display: inline-block;
  width: 100%;
  height: 50px;
  padding: 16px 20px;
  border: 1px solid ${(props) => props.theme.colors.line};
  ${(props) => props.theme.font.caption};
  appearance: none;
  background: transparent;
`;

export const Option = styled.option``;

export const Label = styled.label``;
