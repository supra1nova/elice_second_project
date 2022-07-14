import styled, { css } from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Container = styled(NavLink)`
  position: relative;
  ${(props) => props.theme.font.title1}
  &.active {
    color: red;
  }
`;
