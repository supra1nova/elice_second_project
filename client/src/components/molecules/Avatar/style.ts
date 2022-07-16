import styled, { css } from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 20px;
`;
export const AvatarImage = styled.div`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  overflow: hidden;
  img {
    width: 100%;
    height: auto;
  }
`;
export const AvatarId = styled.div`
  margin-left: 10px;
  color: ${(props) => props.theme.colors.font1}
    ${(props) => props.theme.font.description1};
`;
