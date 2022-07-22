import styled from 'styled-components';

export const StyledLikeReview = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;

    div {
        ${(props) => props.theme.font.caption};
        color: ${(props) => props.theme.colors.font3};
        padding: 0 10px 0 5px;
    }
`