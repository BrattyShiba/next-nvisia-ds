import React from "react";

import { toTitleCase } from "../../utilities";

interface ButtonProps {
  disabled?: boolean;
  type?: "button" | "submit";
  label: string;
  mode?: "primary" | "secondary";
  name?: string,
  onClick?(): () => {}
}

export const Button = ({
  disabled,
  type = "button",
  label,
  mode = "primary",
  name,
  onClick,
  ...props
}: ButtonProps) => {
  function handleClick() {
    // any handling we want to do?
    if (onClick) {
      onClick();
    }
  }

  return (
    <div className="nvButton">
      <button
        type={type}
        className={`button ${mode} ${disabled ? "disabled" : ""}`}
        disabled={disabled}
        name={name || label}
        onClick={handleClick}
        {...props}
      >
        {toTitleCase(label)}
      </button>
    </div>
  )
}