import styled from 'styled-components';

export const RestaurantInfo = styled.div`
  border-top: 1px solid #e5e5e5;
  border-bottom: 1px solid #e5e5e5;
  margin: 20px 40px;
  padding: 20px 0;
`;
export const Info = styled.div`
  display: flex;
  align-items: flex-start;
  padding-bottom: 14px;

  &:last-child {
    padding-bottom: 0;
  }
`;
export const InfoTitle = styled.div`
  ${(props) => props.theme.font.description2};
  color: ${(props) => props.theme.colors.font3};
  width: 125px;
  flex-shrink: 0;
`;
export const InfoDescription = styled.div`
  ${(props) => props.theme.font.description2};
  color: ${(props) => props.theme.colors.font1};
  display: flex;
  width: 100%;
  flex-direction: column;
`;

export const InfoDescriptionItem = styled.div`
  display: flex;
  width: 100%;
  max-width: 400px;
  align-items: center;
  & + div {
    margin-top: 10px;
  }
`;

export const InfoCaption = styled.div`
  ${(props) => props.theme.font.caption};
  color: ${(props) => props.theme.colors.font3};
`;
export const InfoPrice = styled.div`
  text-align: right;
  padding-left: 20px;
`;
export const InfoMenu = styled.div`
  width: 200px;
`;
export const RestaurantReview = styled.div`
  margin: 0 40px;
  color: ${(props) => props.theme.colors.font1};
`;
