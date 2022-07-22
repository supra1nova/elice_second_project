import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0 40px;
  margin-bottom: 50px;
`;
export const Title = styled.p`
  font-size: 24px;
  font-weight: 700;
`;

export const SubTitle = styled.p`
  ${(props) => props.theme.font.caption};
  color: ${(props) => props.theme.colors.font2};
  margin-top: 10px;
`;

export const GridContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 10px;
  grid-column-gap: 30px;
  margin-top: 10px;
`;

export const FlexContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 10px;
`;

export const Divider = styled.div`
  width: 100%;
  border: 1px solid #f2f2f2;
  margin: 60px 0 30px 0;
  align-self: center;
`;
