import styled from 'styled-components';

export const EXContainer = styled.button`
  height: 60px;
  width: 100%;
  display: flex;
  align-items: center;
  padding: 19px 40px;
  border-bottom: 1px solid ${(props) => props.theme.colors.line};
  position: fixed;
  background-color: #fff;
  z-index: 10;
`;

export const Container = styled.div`
  width: 280px;
  height: 40px;
  background: #f7f7f7;
  border: 1px solid #e5e5e5;
  border-radius: 50px;
  margin-left: 10px;
  display: flex;
  align-items: center;
`;

export const Text = styled.span`
  padding: 0 20px;
  color: ${(props) => props.theme.colors.font2};
`;
