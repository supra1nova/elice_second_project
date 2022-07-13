import styled, { css } from 'styled-components';
import { Link } from 'react-router-dom';
interface Props {
  component?: string;
  size?: string;
  block?: boolean | undefined;
}

const ButtonStyle = css<Props>`
  position: relative;
  display: ${(props: Props) => (props.block ? 'block' : 'inline-block')};
  width: ${(props: Props) => (props.block ? '100%' : 'auto')};
  text-align: center;
  border-radius: 23px;
  border-width: 1px;
  border-style: solid;
  ${(props: Props) => {
    switch (props.component) {
      case 'primary':
        return css`
          background-color: ${(props) => props.theme.colors.main1};
          color: ${(props) => props.theme.colors.white};
          border-color: ${(props) => props.theme.colors.main1};
        `;
      case 'info':
        return css`
          background-color: ${(props) => props.theme.colors.white};
          color: ${(props) => props.theme.colors.main1};
          border-color: ${(props) => props.theme.colors.main1};
        `;
      case 'disable':
        return css`
          background-color: ${(props) => props.theme.colors.line};
          color: ${(props) => props.theme.colors.font1};
          border-color: ${(props) => props.theme.colors.line};
        `;
      default:
        return css`
          background-color: ${(props) => props.theme.colors.white};
          color: ${(props) => props.theme.colors.font1};
          border-color: ${(props) => props.theme.colors.font2};
        `;
    }
  }}
  ${(props: Props) => {
    switch (props.size) {
      case 'small':
        return css`
          padding: 6px 16px;
          ${(props) => props.theme.font.subtitle2};
        `;
      case 'medium':
        return css`
          padding: 12px 20px;
          ${(props) => props.theme.font.subtitle2};
        `;
      case 'large':
        return css`
          padding: 14px 20px;
          ${(props) => props.theme.font.subtitle2};
        `;
      default:
        return css`
          padding: 12px 20px;
          ${(props) => props.theme.font.subtitle2};
        `;
    }
  }};
`;

export const Button = styled.button`
  ${ButtonStyle}
`;

export const ButtonLink = styled(Link)`
  ${ButtonStyle}
`;
