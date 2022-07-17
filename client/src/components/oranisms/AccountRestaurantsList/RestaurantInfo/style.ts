import styled from 'styled-components';

export const RestaurantInfo = styled.div`
border-top: 1px solid #E5E5E5;
border-bottom: 1px solid #E5E5E5;
margin: 20px 40px;
padding: 20px 0;
`
export const Info = styled.div`
display: flex;
align-items: flex-start;
padding-bottom: 14px;

&:last-child {
    padding-bottom: 0;
}
`
export const InfoTitle = styled.div`
    ${(props) => props.theme.font.description2};
    color: ${(props) => props.theme.colors.font3};
    width: 125px;
`
export const InfoDescription = styled.div`
    ${(props) => props.theme.font.description2};
    color: ${(props) => props.theme.colors.font1};
    display: flex;
`
export const InfoCaption = styled.div`
    ${(props) => props.theme.font.caption};
    color: ${(props) => props.theme.colors.font3};
    padding-top: 5px;
`
export const InfoPrice = styled.div`
    text-align: right;
    padding-left: 20px;
`
export const InfoMenu = styled.div`
    padding-bottom: 5px;
`
export const RestaurantReview = styled.div`
    margin: 0 40px;
    color: ${(props) => props.theme.colors.font1};
`