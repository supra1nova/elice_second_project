import React from 'react';
import * as UI from './style';

interface Props {
  children?: React.ReactElement | string;
}

const Footer = ({ children }: Props) => {
  return <UI.Container>footer 자리</UI.Container>;
};

export default Footer;
