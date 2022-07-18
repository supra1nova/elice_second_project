import React from 'react';
import * as UI from './style';

interface Props {
  label: string;
  htmlFor: string;
  id: string;
  name: string;
  placeholder: string;
  value: string;
  onChange?: (e: any) => void;
}
const Textarea = ({
  label,
  htmlFor,
  id,
  placeholder,
  value,
  name,
  onChange,
}: Props) => {
  return (
    <UI.Container>
      <UI.Label htmlFor={htmlFor}>{label}</UI.Label>
      <UI.Text>
        <UI.Textarea
          placeholder={placeholder}
          id={id}
          value={value}
          name={name}
          onChange={onChange}
        />
      </UI.Text>
    </UI.Container>
  );
};
Textarea.defaultProps = {
  placeholder: '',
};

export default Textarea;
