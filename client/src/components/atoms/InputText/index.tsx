import React from 'react';
import * as UI from './style';

interface Props {
  id: string;
  type: string;
  placeholder: string;
  autoComplete: string;
  maxLength?: number;
  name: string;
  value: string;
  onClick?: (e: any) => void;
  onChange: (e: any) => void;
}
const InputText = ({
  id,
  type,
  placeholder,
  autoComplete,
  maxLength,
  name,
  value,
  onClick,
  onChange,
}: Props) => {
  return (
    <UI.Container>
      <UI.Input
        type={type}
        id={id}
        onClick={onClick}
        onChange={onChange}
        placeholder={placeholder}
        autoComplete={autoComplete}
        name={name}
        value={value}
        maxLength={maxLength}
      />
    </UI.Container>
  );
};
InputText.defaultProps = {
  type: 'text',
  autoComplete: 'off',
};

export default InputText;
