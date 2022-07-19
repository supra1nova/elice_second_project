import styled, { css } from 'styled-components';

interface Props {
    position?: string;
}

export const ButtonWrapper = styled.div`
   position: ${(props: Props) => props.position === undefined ? 'absolute' : 'static'};
   top: 10px;
   right: 10px;
   z-index: 95;
`;