import React from 'react';
import * as UI from './style';

interface Props {
  name: string;
  options: any;
  label: string;
  id: string;
  htmlFor: string;
  onChange: (e: any) => void;
}
const Select = ({ name, options, label, id, htmlFor, onChange }: Props) => {
  return (
    <UI.Container>
      <UI.Label htmlFor={htmlFor}>{label}</UI.Label>
      <UI.Select id={id} name={name} onChange={onChange}>
        {options.map((option: any, index: number) => {
          return (
            <UI.Option key={`${option.value}-${index}`} value={option.value}>
              {option.name}
            </UI.Option>
          );
        })}
      </UI.Select>
    </UI.Container>
  );
};

export default Select;
