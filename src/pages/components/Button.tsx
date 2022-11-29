import React from "react";

import { toTitleCase } from "../../utilities";

interface ButtonProps {
  disabled?: boolean;
  type?: "button" | "submit";
  label: string;
  mode?: "primary" | "secondary";
  name?: string,
  onClick?(): () => {},
  restProps?: any,
}

export const Button = ({
  disabled,
  type = "button",
  label,
  mode = "primary",
  name,
  onClick,
  restProps,
}: ButtonProps) => {
  function handleClick() {
    console.log(`button ${name} was clicked`);
    if (onClick) {
      onClick();
    }
  }
  // const titlecasedLabel = toTitleCase(label);

  return (
    <div className="nvButton">
      <button
        type={type}
        className={`button ${mode} ${disabled ? "disabled" : ""}`}
        disabled={disabled}
        name={name || label}
        onClick={handleClick}
        {...restProps}
      >
        {toTitleCase(label)}
      </button>
    </div>
  )
}