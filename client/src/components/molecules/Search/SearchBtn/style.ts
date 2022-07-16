import styled from 'styled-components';

export const Container = styled.div`
  height: 60px;
  display: flex;
  align-items: center;
  padding: 19px 40px;
  border-bottom: 1px solid ${(props) => props.theme.colors.line};
`;

export const InputBtn = styled.button`
  border: none;
  width: 100%;
  margin-left: 10px;
  text-align: left;
`;
