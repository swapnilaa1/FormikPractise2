/*
lecture 31 : we have created a form using formik component and render props pattern where we are 
returning a Form Component.
lecture 32 : we created a formikControl component..
which will recieve a prop and depending on which prop recieved it will render that field..

lecture 33: here we will create a input field , which will contai 3 things
1.lable         simple html element 
2.input field   field component
3.errorMessage  errorMessage component..

for this we will pass 4 things as props..
1. control=input 
2. label=email
3. name=emial
4. type=email....

this props can warry according to the type .. could be text , password , 
control can be textArea etc

for this we will write the code in 3 files..
1. specific input type component .. Input.js in this case...//TextArea.js in next and so on..
2. FormilControl Component
3. FormikContainer Component

lecture 34 : here we will create TextArea Input..
that will have 3 things in it..

1.lable         simple html element  // discription in this case..
2.input field   field component // textArea in this case..
3.errorMessage  errorMessage component..

for creating this we will follow 3 steps which we followed in last lecture..

lecture 35:
*/

import React from "react";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import FormikControl from "./FormikControl";

function FormikContainer() {
  const dropDownOption =[
    {key:'Select an Option', value:''},
    {key:'option 1', value:'option1'},
    {key:'option 2', value:'option2'},
    {key:'option 3', value:'option3'}
  ];
  const radioOptions=[
    {key:'option 4', value:'option4'},
    {key:'option 5', value:'option5'},
    {key:'option 6', value:'option6'}
  ];
  const checkBoxOptions=[
    {key:'option 6', value:'option6'},
    {key:'option 7', value:'option7'},
    {key:'option 8', value:'option8'}
  ];

  const initialValues = {
    email: "",
    description: "",
    selectOption: '',
    radioOption: "",
    checkBoxOption:"",
    birthDate:null
  };
  
  const validationSchema = Yup.object({
    email: Yup.string().required("Required"),
    description: Yup.string().required("Required"),
    selectOption: Yup.string().required("Required"),
    radioOption: Yup.string().required("Required"),
    checkBoxOption :Yup.array().required("Required"),
    birthDate: Yup.date().required("Required").nullable()
  });
  const onSubmit = (values) => 
  {
    console.log("form values", values);
    console.log("saved values", JSON.parse(JSON.stringify(values)));
  }

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={onSubmit}
    >
      {(Formik) => (
        <Form className="from-group container ">
          <FormikControl
            control="input"
            type="email"
            label="Email"
            name="email"
          />
          <FormikControl
            control="textarea"
            label="Description"
            name="description"
          />
          <FormikControl
            control="select"
            label="select a option"
            name="selectOption"
            options={dropDownOption}

          />
          <FormikControl
            control="radio"
            label="Radio Topic"
            name="radioOption"
            options={radioOptions}
          />

          <FormikControl
            control="checkbox"
            label="Check Options"
            name="checkBoxOption"
            options={checkBoxOptions}
          />
          <FormikControl
            control="date"
            label="Pick a date"
            name="birthDate"
           // options={checkBoxOptions}
          />
          <button className="btn btn-primary" type="submit">
            Submit
          </button>
        </Form>
      )}
    </Formik>
  );
}

export default FormikContainer;
