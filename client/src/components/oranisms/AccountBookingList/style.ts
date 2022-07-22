import styled, { css } from 'styled-components';

export const Container = styled.div`
  position: relative;
  margin-bottom: 40px;
`;

export const StyledText = styled.div`
    ${(props) => props.theme.font.caption};
    color: ${(props) => props.theme.colors.font2};
`
