import styled, { css } from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Container = styled(NavLink)`
  position: relative;
  display: block;
  padding: 0 20px;
  line-height: 1.43;
  margin-bottom: 20px;
  ${(props) => props.theme.font.description1}
  color: ${(props) => props.theme.colors.font1}
  &:last-child {
    margin-bottom: 0;
  }
  &.active {
    font-weight: bold;
    &:before {
      content: '';
      position: absolute;
      left: 0;
      top: 0;
      width: 2px;
      height: 100%;
      background: ${(props) => props.theme.colors.font1};
    }
  }
`;
