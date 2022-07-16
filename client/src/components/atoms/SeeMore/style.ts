import styled from 'styled-components';

export const Text = styled.span`
  ${(props) => props.theme.font.description2};
  color: ${(props) => props.theme.colors.fontMain};
`;
