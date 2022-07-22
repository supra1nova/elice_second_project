import styled from 'styled-components';


export const StyledReviewBox = styled.div`
    padding: 20px 0 10px;
    display: flex;
    justify-content: space-between;
    align-items: center;
`
export const StyledReviwerProfile = styled.div`
    display: flex;
    align-items: center;
`
export const StyledOwnerReviwerProfile = styled.div`
    display: flex;
    align-items: center;
    width: 100%;
    justify-content: space-between;

    div {
        display: flex;
        align-items: center;
    }

    button {
        ${(props) => props.theme.font.description2};
        color: ${(props) => props.theme.colors.font3};
    }
`
export const StyledReviewerProfileName = styled.div`
    ${(props) => props.theme.font.subtitle2};
`
export const StyledReviewDate = styled.div`
    ${(props) => props.theme.font.description2};
    margin-top: 4px;
`
export const StyledNameDate = styled.div`
    margin-left: 10px;
`
export const StyledReviewRight = styled.div`
    display: flex;
    align-items: center;

    button {
        margin-left: 10px;
        ${(props) => props.theme.font.subtitle1};
        color: ${(props) => props.theme.colors.font3};
    }
`
export const StyledGPA = styled.div`
    color: ${(props) => props.theme.colors.fontMain};
`
export const StyledReviewInner = styled.div`
    padding-left: 60px;

    div > img {
        width: 80px;
        height: 80px;
        margin-right: 10px;
    }
`
export const StyledDescription = styled.div`
    ${(props) => props.theme.font.description2};
    color: ${(props) => props.theme.colors.font2}; 
    line-height: 20px;
    padding-bottom: 20px;
`
export const StyledOwnerReview = styled.div`
    background-color: ${(props) => props.theme.colors.main4};
    padding: 10px;
    margin: 20px 0 20px 60px;
`
export const StyledOwnerName = styled.div`
    ${(props) => props.theme.font.subtitle2};
    padding-left: 10px;
`
export const StyledOwnerDescription = styled.div`
    ${(props) => props.theme.font.description2};
    padding-left: 40px;
`
export const OwnerComment = styled.div`
    display: flex;
    align-items: center;

    form {
        padding-left: 10px;
        width: 100%;
    }

    form > input[type="text"] {
        padding: 6px 6px;
        display: inline-block;
        border: 1px solid #E5E5E5;
        width: calc(100% - 56px);
        height: 36px;
    }
    form > input[type="text"]:focus {
        outline: none !important;
        border: 1px solid #64AD57;
    }
    form > input[type="submit"] {
        ${(props) => props.theme.font.subtitle2};
        color: ${(props) => props.theme.colors.white}; 
        background-color: ${(props) => props.theme.colors.main1}; 
        border: 1px solid #64AD57;
        width: 56px;
        height: 36px;
        cursor: pointer;
    }

`