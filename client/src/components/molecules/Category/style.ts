import styled, { ThemeProps } from 'styled-components';

interface Props {
  active: boolean;
}

export const Container = styled.div`
  padding: 40px;
  height: 130px;
  display: flex;
  justify-content: space-around;
  /* button:not(:first-of-type) {
    margin-left: 30px;
  } */
`;

export const ItemWrapper = styled.button`
  /* min-width: 110px; */
  height: 49px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: ${(props) => props.theme.colors.font3};
  ${(props) => props.theme.font.caption}

  ${(props: Props) => (props.active ? 'font-weight: 700; color:black;' : '')}

  svg path {
    margin-bottom: 10px;
    fill: ${(props: Props) => (props.active ? 'black' : '')};
  }

  &.active {
    font-weight: bold;
    color: black;
  }
`;
