import styled, { css } from 'styled-components';

export const Container = styled.div`
  display: inline-block;
`;

export const Label = styled.label`
  position: relative;
  display: inline-block;
  height: 28px;
  width: 53px;
  input:checked + span {
    background: ${(props) => props.theme.colors.main3};
  }
  input:checked + span:before {
    left: calc(100% - 25px);
    background-color: ${(props) => props.theme.colors.main1};
  }
`;

export const Input = styled.input`
  opacity: 0;
  width: 0;
  height: 0;
`;

export const Toggle = styled.span`
  position: absolute;
  cursor: pointer;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  border-radius: 20px;
  background-color: ${(props) => props.theme.colors.bg};
  transition: 0.4s;
  &:before {
    content: '';
    position: absolute;
    top: 3px;
    left: 3px;
    width: 22px;
    height: 22px;
    background-color: ${(props) => props.theme.colors.point};
    border-radius: 50%;
    transition: 0.4s;
  }
`;
