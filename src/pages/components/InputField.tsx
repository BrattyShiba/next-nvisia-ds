import React, { ChangeEvent, useState } from "react";

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
  // Is it required that this input field be filled in, in order to proceed? defaults to true, since the idea is we wouldn't ask if we didn't need it.
  required?: boolean;
}

export const InputField = ({
  hasError = false,
  label,
  name,
  onBlur,
  onChange,
  required = true,
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

  return (
    <div className="input-field-container">
      <label className="visually-hidden" htmlFor={name}> 
        {label}
      </label>
      <input
        aria-describedby={`${name}-description`}
        className={ `input-field ${error ? "input-field-error" : props.disabled ? "input-field-disabled" : ""}` }
        name={name || label}
        onBlur={handleBlur}
        onChange={handleChange}
        placeholder={label}
        required={required}
        type="text"
        {...props}
      />
      <span className="visually-hidden" id={`${name}-description`} aria-live="assertive">{error ? `${label} field is required` : ""}</span>
    </div>
  );
}
