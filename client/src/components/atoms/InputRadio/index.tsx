import React from 'react';
import * as UI from './style';

interface Props {
  id: string;
  type: string;
  name: string | undefined;
  htmlFor: string;
  checked: boolean | undefined;
  label: string;
  onChange: (e: any) => void;
}

const InputRadio = ({
  id,
  type,
  name,
  htmlFor,
  checked,
  label,
  onChange,
}: Props) => {
  return (
    <UI.Container>
      <UI.Label htmlFor={htmlFor}>
        <UI.LabelText>{label}</UI.LabelText>
        <UI.Input
          type={type}
          id={id}
          name={name}
          onChange={onChange}
          checked={checked}
        />
      </UI.Label>
    </UI.Container>
  );
};
InputRadio.defaultProps = {
  type: 'radio',
};

export default InputRadio;
