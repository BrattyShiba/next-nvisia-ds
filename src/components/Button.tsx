import React from "react";

import { toTitleCase } from "../utilities";

interface ButtonProps {
  disabled?: boolean;
  type?: "button" | "submit";
  label: string;
  mode?: "primary" | "secondary";
  name?: string;
  onClickEvent?: () => void;
}

export const Button = ({
  disabled = false,
  type = "button",
  label,
  mode = "primary",
  name,
  onClickEvent,
  ...props
}: ButtonProps) => {
  function handleClick() {
    // any handling we want to do?
    if (onClickEvent) {
      onClickEvent();
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
  );
};
