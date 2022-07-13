import React from 'react';
import * as UI from './style';

interface Props {
  id: string;
  type: string;
  name: string;
  value: string;
  htmlFor: string;
}

const InputSwitch = ({ id, type, name, value, htmlFor }: Props) => {
  return (
    <UI.Container>
      <UI.Label htmlFor={htmlFor}>
        <UI.Input type={type} id={id} name={name} value={value} />
        <UI.Toggle></UI.Toggle>
      </UI.Label>
    </UI.Container>
  );
};

InputSwitch.defaultProps = {
  type: 'checkbox',
};

export default InputSwitch;
