import styled from 'styled-components';

export const StyledTitle = styled.div`
    display: flex;
    justify-content: space-between;
    ${(props) => props.theme.font.subtitle1};
    margin-bottom: 10px;

    div > span {
        ${(props) => props.theme.font.caption};
        color: ${(props) => props.theme.colors.font3};
        margin-left: 10px;
    }
`