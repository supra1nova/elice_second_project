import styled from 'styled-components';

export const StyledRestaurantInfo = styled.div`
border-top: 1px solid #E5E5E5;
border-bottom: 1px solid #E5E5E5;
margin: 20px 40px;
padding: 20px 0;
`
export const StyledInfo = styled.div`
display: flex;
align-items: flex-start;
padding-bottom: 14px;

&:last-child {
    padding-bottom: 0;
}
`
export const StyledInfoTitle = styled.div`
    ${(props) => props.theme.font.description2};
    color: ${(props) => props.theme.colors.font3};
    width: 125px;
`
export const StyledInfoDescription = styled.div`
    ${(props) => props.theme.font.description2};
    color: ${(props) => props.theme.colors.font1};
    display: flex;
`
export const StyledInfoCaption = styled.div`
    ${(props) => props.theme.font.caption};
    color: ${(props) => props.theme.colors.font3};
    padding-top: 5px;
`
export const StyledInfoPrice = styled.div`
    text-align: right;
    padding-left: 20px;
`
export const StyledInfoMenu = styled.div`
    padding-bottom: 5px;
`
export const StyledRestaurantReview = styled.div`
    margin: 0 40px;
    color: ${(props) => props.theme.colors.font1};
`
export const StyledInfoContainer = styled.div`
    margin: 0 40px;
`
export const StyledRestaurantName = styled.h1`
    ${(props) => props.theme.font.title1};
    color: ${(props) => props.theme.colors.font1};
    display: inline-block;
`
export const StyledTitleBox = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
`
export const StyledGPA = styled.span`
    ${(props) => props.theme.font.title1};
    color: ${(props) => props.theme.colors.main1};
    padding-left: 10px;
`
export const StyledBottom = styled.div`
    padding-top: 15px;
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
`
export const StyledLike = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;

    p {
        ${(props) => props.theme.font.caption};
        color: ${(props) => props.theme.colors.font2};
        padding-top: 5px;
    }
`