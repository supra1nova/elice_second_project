import styled, { css } from 'styled-components';
import Typography from '../../../components/atoms/Typography';

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-start;
`;

export const Content = styled.div`
  max-width: 420px;
  width: 100%;
`;

export const AvatarContainer = styled.div`
  margin-bottom: 20px;
`;

export const AvatarLabel = styled.div`
  ${(props) => props.theme.font.subtitle1};
  color: ${(props) => props.theme.colors.black};
  + div {
    margin-top: 10px;
  }
`;

export const AvatarInput = styled.div`
  display: flex;
  align-items: center;
  button {
    margin-left: 10px;
  }
`;
