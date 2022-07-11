import styled, { css } from 'styled-components';

export const Container = styled.div`
  position: relative;
  text-align: center;
  button + button {
    margin-left: 10px;
  }
`;

export const Title = styled.div`
  color: ${(props) => props.theme.colors.font1};
  font-size: ${(props) => props.theme.fontSize.title}px;
`;

export const SubTitle = styled.div`
  color: ${(props) => props.theme.colors.font1};
  font-size: ${(props) => props.theme.fontSize.subTitle}px;
`;

export const Close = styled.button`
  position: absolute;
  right: 0;
  top: 0;
  width: 40px;
  height: 40px;
`;
