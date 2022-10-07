import { ErrorMessage, Field } from "formik";
import React from "react";
import TextError from "./TextError";

const RadioButton = (props) => {
  const { name, label, options, ...rest } = props;
  return (
    <div>
      <label>{label}</label>
      <Field name={name} {...rest}>
        {({ field }) => {
          console.log(field);
          return options.map((option) => {
            return (
              <React.Fragment key={option.key}>
                <input
                  type="radio"
                  id={option.value}
                  {...field}
                  value={option.value}
                  checked={field.value === option.value}
                />
                <label htmlFor={option.value}>{option.key}</label>
              </React.Fragment>
            );
          });
        }}
      </Field>
      <ErrorMessage name={name} component={TextError} />
    </div>
  );
};

export default RadioButton;
