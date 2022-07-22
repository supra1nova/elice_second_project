import styled from 'styled-components';

export const EXContainer = styled.div`
  height: 60px;
  display: flex;
  align-items: center;
  padding: 19px 40px;
  border-bottom: 1px solid ${(props) => props.theme.colors.line};
`;

export const Input = styled.input`
  border: none;
  border-radius: 50px;
  background-color: white;
  /* box-shadow: 0px 4px 15px rgba(0, 0, 0, 0.1); */
  width: 100%;
  height: 40px;
  padding: 0 20px;

  :focus {
    outline: none;
  }
`;
