/*
for this we will install react date picker

npm install react-datepicker

if we see this code then 
see selected and onchange..
selected gives the selected date and onchange sets that date..
() => {
  const [startDate, setStartDate] = useState(new Date());
  return (
    <DatePicker selected={startDate} onChange={(date) => setStartDate(date)} />
  );
};

{form , field})=>{
                        const {setfieldValue}=form;
                        const {value}=field;
// setFieldValue is a function that gives field value to the formik state...
const value from field is any value that is being selected from the date picker..
                    return <ShowDate id={name} {...field} {...rest} selected={value} onChange={val=>setfieldValue(name , value)}/>
*/

import { ErrorMessage, Field } from 'formik';
import React from 'react'
import ReactDatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import TextError from './TextError';

const ShowDate = (props) => {
  const {label , name , ...rest}=props;
  
    return (
    <div>
        <label htmlFor={name}>{label}</label>
        <Field name={name}>
            {
                ({form , field})=>{
                        const {setFieldValue}=form;
                        const {value}=field;

                    return <ReactDatePicker id={name} {...field} {...rest} selected={value} onChange={val=>setFieldValue(name , val)}/>
                }
            }
        </Field>
        <ErrorMessage name={name} component={TextError}/>
    </div>
  )
}

export default ShowDate