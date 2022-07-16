import React from 'react';
import FormSwitch from '../FormSwitch';
import FormItem from '../FormItem';
import InputSwitchDescription from '../../atoms/InputSwitchDescription';
import InputSwitch from '../../atoms/InputSwitch';

const FormInputSwitch = (item: any, index: number) => {
  return (
    <FormItem key={`${item.id}-${index}`}>
      <FormSwitch>
        <InputSwitchDescription title={item.title} subTitle={item.subTitle} />
        <InputSwitch
          htmlFor={item.htmlFor}
          id={item.id}
          name={item.name}
          onChange={item.onChange}
          checked={item.checked}
        />
      </FormSwitch>
    </FormItem>
  );
};

export default FormInputSwitch;
