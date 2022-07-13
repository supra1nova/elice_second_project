import styled, { css } from 'styled-components';
import { Link } from 'react-router-dom';

const ButtonStyle = css`
  position: relative;
  display: block;
`;

export const Button = styled.button`
  ${ButtonStyle}
`;

export const ButtonLink = styled(Link)`
  ${ButtonStyle}
`;
