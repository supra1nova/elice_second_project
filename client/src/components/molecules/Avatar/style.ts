import styled, { css } from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 20px;
`;
export const AvatarImage = styled.div``;
export const AvatarId = styled.div`
  margin-left: 10px;
  color: ${(props) => props.theme.colors.font1}
    ${(props) => props.theme.font.description1};
`;
