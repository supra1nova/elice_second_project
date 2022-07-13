import React from 'react';
import FormItem from '../../../../components/molecules/FormItem';
import FormSwitch from '../../../../components/molecules/FormSwitch';
import InputSwitchDescription from '../../../../components/atoms/InputSwitchDescription';
import InputSwitch from '../../../../components/atoms/InputSwitch';

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
