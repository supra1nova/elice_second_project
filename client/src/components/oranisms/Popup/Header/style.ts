import styled, { css } from 'styled-components';

interface Props {
  primary: boolean;
}

export const Container = styled.div`
  position: relative;
  text-align: center;
  margin-bottom: 40px;
`;

export const Title = styled.div`
  color: ${(props) => props.theme.colors.font1};
  font-size: ${(props) => props.theme.font.subtitle1}px;

  ${(props: Props) =>
    props.primary &&
    css`
      color: ${(props) => props.theme.colors.main1};
    `}
`;

export const SubTitle = styled.div`
  color: ${(props) => props.theme.colors.font1};
  font-size: ${(props) => props.theme.font.subtitle1}px;
`;

export const Close = styled.button`
  position: absolute;
  right: -15px;
  top: -35px;
  width: 40px;
  height: 40px;
  padding: 13px 10px;
`;
