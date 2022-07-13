import styled, { css } from 'styled-components';

interface Props {
  active: boolean;
}

// 이 컨테이너는 나중에 organism 단위에서 생성할 것
export const EXContainer = styled.div`
  height: 60px;
  display: flex;
  align-items: center;
  padding: 19px 40px;
  border-bottom: 1px solid ${(props) => props.theme.colors.line};

  > svg {
    min-width: 22px;
  }
`;

export const Container = styled.div`
  min-width: 763px;
  height: 40px;
  background: #f7f7f7;
  border: 1px solid #e5e5e5;
  border-radius: 50px;
  margin-left: 10px;
  display: flex;
  align-items: center;
  padding-right: 20px;
`;

export const Input = styled.input`
  border: none;
  border-radius: 50px;
  /* background-color: white; */
  /* box-shadow: 0px 4px 15px rgba(0, 0, 0, 0.1); */
  width: 200px;
  /* height: 40px; */
  padding: 0 20px;
  background: #f7f7f7;

  :focus {
    outline: none;
  }
`;

export const SelectBtn = styled.button`
  ${(props) => props.theme.font.caption};
  padding: 0 20px;
  text-align: left;

  ${(props: Props) =>
    props.active &&
    css`
      background: #ffffff;
      height: 40px;
      box-shadow: 0px 4px 15px rgba(0, 0, 0, 0.1);
      border-radius: 50px;
    `}
`;

export const BtnTItle = styled.p``;

export const BtnSubTtile = styled.p`
  color: ${(props) => props.theme.colors.font3};
`;

export const SearchBtn = styled.button`
  width: 43px;
  height: 27px;
  background: #64ad57;
  border-radius: 50px;
  ${(props) => props.theme.font.caption}
  color: white;
  margin-left: auto;
`;
