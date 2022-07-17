import React from 'react';
import * as UI from './style';

interface Props {
  name: string;
  options: any;
}
const Select = ({ name, options }: Props) => {
  console.log(options);
  const handleChange = () => {};
  return (
    <UI.Container>
      <UI.Select name={name} onChange={handleChange}>
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
