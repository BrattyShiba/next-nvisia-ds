import React, { ChangeEvent, useState } from "react";

import styles from './InputField.module.css';

interface InputFieldProps {
  /**
   * Whether or not there's an error with the input
   */
  hasError?: boolean;
  /**
   * whether or not the form field should be disabled - questionable accessibility
   */
  disabled?: boolean;
  /**
   * What the form field is for - its label, so the end user knows what to enter into the field
   */
  label: string;
  /**
   * Name of the form field. Submitted with the form as part of a name/value pair
   */
  name: string;
  /**
   * Optional handler for blur event from field
   */
   onBlur?: (e: ChangeEvent<HTMLInputElement>) => void;
  /**
   * Optional handler for change events in field
   */
   onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
  /**
   * Is it required that this input field be filled in, in order to proceed?
   */
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

  // TODO: add "moving form label" for somewhat better accessibility. see: https://codepen.io/Bergability/pen/ByqyOP - Thanks, Oliver!
  return (
    <div className={styles.nvInputField}>
      <label className="visually-hidden" htmlFor={name}> 
        {label}
      </label>
      <input
        className={error? `${styles.error}` : ''}
        name={name}
        onBlur={handleBlur}
        onChange={handleChange}
        placeholder={label}
        required={required}
        type='text'
        {...props}
      />
    </div>
  );
}
