import React from 'react';
import Button from '../../../atoms/Button';
import * as UI from './style';

interface Props {
  component?: React.ReactElement | string;
  size?: React.ReactElement | string;
  children?: React.ReactElement | string;
}

const Footer = ({ children }: Props) => {
  return (
    <UI.Container>
      <Button component={'primary'} size={'medium'}>
        버튼1
      </Button>
      <Button component={'default'} size={'small'}>
        버튼2
      </Button>
    </UI.Container>
  );
};

export default Footer;
