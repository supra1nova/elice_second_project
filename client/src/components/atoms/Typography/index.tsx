import React from 'react';
import * as UI from './style';

interface Props {
  className?: string;
  children?: React.ReactElement | string;
}

const Typography = ({ className, children }: Props) => {
  return <UI.Container className={className}>{children}</UI.Container>;
};

export default Typography;
