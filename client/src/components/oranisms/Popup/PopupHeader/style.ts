import styled, { css } from 'styled-components';

interface Props {
  primary: boolean;
}

export const Container = styled.div`
  position: relative;
  text-align: center;
  margin-bottom: 20px;
`;

export const Title = styled.div<any>`
  line-height: 1.43;
  ${(props) => props.theme.font.subtitle1};
  color: ${(props) => props.titleColor ? 
    props.theme.colors.fontMain : props.theme.colors.font1
  };
  white-space: pre-wrap;
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

export const Close = styled.div`
  position: absolute;
  right: -15px;
  top: -35px;
  width: 40px;
  height: 40px;
  padding: 13px 10px;
`;
