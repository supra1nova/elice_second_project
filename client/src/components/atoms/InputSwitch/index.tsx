import React from 'react';
import * as UI from './style';

interface Props {
  id: string;
  type: string;
  name: string;
  htmlFor: string;
  checked: boolean | undefined;
  onChange: (e: any) => void;
}

const InputSwitch = ({ id, type, name, htmlFor, checked, onChange }: Props) => {
  return (
    <UI.Container>
      <UI.Label htmlFor={htmlFor}>
        <UI.Input
          type={type}
          id={id}
          name={name}
          onChange={onChange}
          checked={checked}
        />
        <UI.Toggle></UI.Toggle>
      </UI.Label>
    </UI.Container>
  );
};

InputSwitch.defaultProps = {
  type: 'checkbox',
  checked: false,
};

export default InputSwitch;
