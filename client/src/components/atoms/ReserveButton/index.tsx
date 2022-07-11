import styled from 'styled-components';

export const ReserveButton = styled.button`
    ${(props) => props.theme.font.subtitle2};
    padding: 12px 20px;
    border-radius: 50px;
    color: #fff;
    background-color: ${(props) => props.theme.colors.main1};
    display: inline-block;

    + button {
        margin-left: 5px;
    }
`;
