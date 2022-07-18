import React from 'react';
import * as UI from './style';

interface Props {
  name: string;
  options: any;
  onChange: (e: any) => void;
}
const Select = ({ name, options, onChange }: Props) => {
  console.log(options);
  return (
    <UI.Container>
      <UI.Select name={name} onChange={onChange}>
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
