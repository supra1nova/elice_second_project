import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0 40px;
`;

export const GridContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 8px;
  grid-row-gap: 20px;
  margin-top: 10px;
`;

export const Title = styled.p`
  color: ${(props) => props.theme.colors.font1};
  font-size: 24px;
  font-weight: 700;
  margin-top: 20px;
`;

export const SubTitle = styled.p`
  ${(props) => props.theme.font.caption};
  color: ${(props) => props.theme.colors.font2};
  margin-top: 10px;
`;
