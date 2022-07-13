import styled from 'styled-components';

export const EXContainer = styled.div`
  height: 60px;
  display: flex;
  align-items: center;
  padding: 19px 40px;
  border-bottom: 1px solid ${(props) => props.theme.colors.line};
`;

export const Container = styled.div`
  width: 329px;
  height: 40px;
  background: #f7f7f7;
  border: 1px solid #e5e5e5;
  border-radius: 50px;
  margin-left: 10px;
  display: flex;
  align-items: center;

  > button {
    margin-left: 7px;
  }
`;

export const Input = styled.input`
  border: none;
  border-radius: 50px;
  background-color: white;
  box-shadow: 0px 4px 15px rgba(0, 0, 0, 0.1);
  width: 200px;
  height: 40px;
  padding: 0 20px;

  :focus {
    outline: none;
  }
`;

export const FilterBtn = styled.button`
  width: 65px;
  height: 27px;
  background: #ffffff;
  border: 1px solid #e5e5e5;
  border-radius: 50px;
  ${(props) => props.theme.font.caption}
  color: ${(props) => props.theme.colors.font3}
`;

export const SearchBtn = styled.button`
  width: 43px;
  height: 27px;
  background: #64ad57;
  border-radius: 50px;
  ${(props) => props.theme.font.caption}
  color: white;
`;
