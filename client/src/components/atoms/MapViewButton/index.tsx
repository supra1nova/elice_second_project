import styled from 'styled-components';

export const MapViewButton = styled.button`
    ${(props) => props.theme.font.subtitle2};
    padding: 8px 20px;
    border-radius: 50px;
    color: ${(props) => props.theme.colors.font2};
    background-color: #fff;
    border: 1px solid #E5E5E5;
    display: inline-block;

    + button {
        margin-left: 5px;
    }
`;
