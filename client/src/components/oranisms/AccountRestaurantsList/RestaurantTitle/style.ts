import styled from 'styled-components';

export const InfoContainer = styled.div`
    margin: 0 40px;
`
export const RestaurantName = styled.h1`
    ${(props) => props.theme.font.title1};
    color: ${(props) => props.theme.colors.font1};
    display: inline-block;
`
export const TitleBox = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
`
export const GPA = styled.span`
    ${(props) => props.theme.font.title1};
    color: ${(props) => props.theme.colors.main1};
    padding-left: 10px;
`
export const Bottom = styled.div`
    padding-top: 15px;
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
`
export const Like = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;

    p {
        ${(props) => props.theme.font.caption};
        color: ${(props) => props.theme.colors.font2};
        padding-top: 5px;
    }
`