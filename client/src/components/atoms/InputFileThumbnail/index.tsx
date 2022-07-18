import React from 'react';
import * as UI from './style';
interface Props {
  id: string;
  htmlFor: string;
  type: string;
  name: string;
  accept: string;
  onChange: (e: any) => void;
}

const InputFileThumbnail = ({
  id,
  type,
  name,
  accept,
  htmlFor,
  onChange,
}: Props) => {
  return (
    <UI.Container>
      <UI.Label htmlFor={htmlFor}>업로드</UI.Label>
      <UI.Input
        type={type}
        id={id}
        onChange={onChange}
        name={name}
        accept={accept}
      />
    </UI.Container>
  );
};

InputFileThumbnail.defaultProps = {
  type: 'file',
};

export default InputFileThumbnail;
