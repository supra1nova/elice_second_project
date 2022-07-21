import React from 'react';
import * as UI from './style';
interface Props {
  id: string;
  htmlFor: string;
  type: string;
  name: string;
  accept: string;
  multiple?: boolean | undefined;
  onChange: (e: any) => void;
}

const InputFileButton = ({
  id,
  type,
  name,
  accept,
  htmlFor,
  multiple,
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
        multiple={multiple}
      />
    </UI.Container>
  );
};

InputFileButton.defaultProps = {
  type: 'file',
  multiple: false,
};

export default InputFileButton;
