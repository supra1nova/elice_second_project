import React from 'react';
import Label from '../Label';
import * as UI from './style';

interface Props {
  name: string;
  options: any;
  labelTitle: string;
  id: string;
  htmlFor: string;
  onChange: (e: any) => void;
}
const Select = ({
  name,
  options,
  labelTitle,
  id,
  htmlFor,
  onChange,
}: Props) => {
  return (
    <UI.Container>
      <Label htmlFor={htmlFor} labelTitle={labelTitle}></Label>
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
