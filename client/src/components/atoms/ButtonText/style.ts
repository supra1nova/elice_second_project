import styled, { css } from 'styled-components';
import { Link } from 'react-router-dom';

interface Props {
  component?: string;
  size?: string;
}

const ButtonStyle = css<Props>`
  position: relative;
  display: inline-block;
  border-bottom-width: 1px;
  border-style: solid;
  ${(props: Props) => {
    switch (props.component) {
      case 'primary':
        return css`
          color: ${(props) => props.theme.colors.main1};
          border-color: ${(props) => props.theme.colors.main1};
        `;
      case 'info':
        return css`
          color: ${(props) => props.theme.colors.main1};
          border-color: ${(props) => props.theme.colors.main1};
        `;
      case 'disable':
        return css`
          color: ${(props) => props.theme.colors.font1};
          border-color: ${(props) => props.theme.colors.line};
        `;
      default:
        return css`
          color: ${(props) => props.theme.colors.font1};
          border-color: ${(props) => props.theme.colors.font2};
        `;
    }
  }}
  ${(props: Props) => {
    switch (props.size) {
      case 'small':
        return css``;
      case 'medium':
        return css``;
      case 'large':
        return css``;
      default:
        return css`
          ${(props) => props.theme.font.caption};
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
