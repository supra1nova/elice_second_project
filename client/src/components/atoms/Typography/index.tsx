import React from 'react';
import * as UI from './style';

interface Props {
  children?: React.ReactElement | string;
}

const Typography = ({ children }: Props) => {
  return <UI.Container>{children}</UI.Container>;
};

export default Typography;
