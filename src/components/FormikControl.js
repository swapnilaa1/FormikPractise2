import React from 'react'
import CheckBoxOptionOk from './CheckBoxOptionOk';
import Input from './Input';
import RadioButton from './RadioButton';
import Select from './Select';
import ShowDate from './ShowDate';
import { TextArea } from './TextArea';

function FormikControl(props) {
  const { control , ...rest} =props;
  switch(control){
    case 'input': return <Input {...rest}/>
    case 'textarea': return <TextArea {...rest}/>
    case 'select': return <Select {...rest}/>
    case 'radio': return <RadioButton {...rest}/>
    case 'checkbox': return <CheckBoxOptionOk {...rest}/>
    case 'date': return <ShowDate {...rest}/>
        
  }
    return (
    <div></div>
  )
}

export default FormikControl