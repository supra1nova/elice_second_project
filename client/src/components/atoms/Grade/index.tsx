import React, { useEffect, useState } from 'react';
import * as UI from './style';
import * as API from '../../../api/api';

// ???? 왜 Number로 하면 에러??
export interface Props {
  regNumber: String;
}

const Grade = ({ regNumber }: Props) => {
  const [grade, setGrade] = useState(0);
  useEffect(() => {
    API.get(`/api/restaurants/${regNumber}`).then((res) => {
      setGrade(res.average.toFixed(1));
    });
  }, []);
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
