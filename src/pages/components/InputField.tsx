import React, { ChangeEvent, useState } from "react";

// import styles from './InputField.module.css';
// import styles from "../../styles/scss/inputField.scss";

interface InputFieldProps {
  // Whether or not there's an error with the input
  hasError?: boolean;
  // Whether or not the form field should be disabled - questionable accessibility
  disabled?: boolean;
  // What the form field is for - its label, so the end user knows what to enter into the field
  label: string;
  // Name of the form field. Submitted with the form as part of a name/value pair
  name: string;
  // Optional handler for blur event from field
   onBlur?: (e: ChangeEvent<HTMLInputElement>) => void;
  // Optional handler for change events in field
   onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
  // Is it required that this input field be filled in, in order to proceed?
  required?: boolean;
}

export const InputField = ({
  hasError = false,
  label,
  name,
  onBlur,
  onChange,
  required = false,
  ...props
}: InputFieldProps) => {
  // ?? not sure where we want to validate - in component, in parent, or both ( :D "it depends" on the form & requirements)
  const [error, setError] = useState(hasError);
  
  const handleBlur = (e: ChangeEvent<HTMLInputElement>) => {
    if (required && !e.target.value) {
      setError(true);
    } else {
      setError(false);
    }
    if (onBlur) {
      onBlur(e);
    }
  }

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    // don't show an error when someone's typing
    setError(false);
  }

  /** TODO: "moving form label" https://codepen.io/Bergability/pen/ByqyOP 
   * - does not work if an input field is not required (I have yet to figure out how to make it work - maybe it's possible)
   * - is not accessible via screen reader, as is
  */
  return (
    <div className="input-field-container">
      <input
        className={ `input-field ${error ? "input-field-error" : props.disabled ? "input-field-disabled" : ""}` }
        name={name}
        onBlur={handleBlur}
        onChange={handleChange}
        // placeholder={label} // cannot use w/the "moving label" approach
        required={required}
        type="text"
        {...props}
      />
      <label htmlFor={name}> 
        {label}
      </label>
    </div>
  );
}
