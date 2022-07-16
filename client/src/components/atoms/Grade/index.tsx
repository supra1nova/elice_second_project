import React from 'react';
import * as UI from './style';

// ???? 왜 Number로 하면 에러??
export interface Props {
  grade?: String;
}

const Grade = ({ grade }: Props) => {
  return (
    <>
      <UI.Text>{grade}</UI.Text>
    </>
  );
};

Grade.defaultProps = {
  grade: 4.3,
};

export default Grade;
