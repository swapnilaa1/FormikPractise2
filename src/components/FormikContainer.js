import React from 'react';
import { Formik , Form} from 'formik';
import * as Yup from 'yup';

function FormikContainer() {
const initialValues={};
const validationSchema=Yup.object({});
const onSubmit= values=>console.log("form values" , values);

  return (
    <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={onsubmit}>

        {
            Formik=> <Form>
                <button type='submit'>Submit</button>
            </Form>
        }
    </Formik>
  )
}

export default FormikContainer