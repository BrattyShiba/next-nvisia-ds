/* eslint-disable react/display-name */
import { forwardRef, PropsWithChildren } from "react";
import { FaChevronDown, FaChevronUp, FaCheck } from "react-icons/fa";
import * as Select from "@radix-ui/react-select";

interface SelectProps {
  defaultValue: string;
  error?: boolean;
  placeholderText?: string;
  label: string;
  disabled?: boolean;
}

export const Dropdown = ({
  children,
  ...props
}: PropsWithChildren<SelectProps>) => {
  return (
    <Select.Root defaultValue={props.defaultValue} disabled={props.disabled}>
      <Select.Trigger
        className={`dropdown ${props.error ? "dropdown-error" : ""}`}
        aria-label={props.label}
      >
        <Select.Value
          placeholder={
            props.defaultValue ? props.defaultValue : "Select an option"
          }
        />
        <Select.Icon>
          <FaChevronDown />
        </Select.Icon>
      </Select.Trigger>
      <Select.Portal>
        <Select.Content className="dropdown-content">
          <Select.ScrollUpButton>
            <FaChevronUp />
          </Select.ScrollUpButton>
          <Select.Viewport className="dropdown-viewport">
            {children}
          </Select.Viewport>
          <Select.ScrollDownButton>
            <FaChevronDown />
          </Select.ScrollDownButton>
        </Select.Content>
      </Select.Portal>
    </Select.Root>
  );
};
export const DropdownItem = forwardRef(
  ({ children, ...props }: any, forwardedRef) => {
    return (
      <Select.Item
        {...props}
        ref={forwardedRef}
        className="dropdown-content-selectItem"
      >
        <Select.ItemText>{children}</Select.ItemText>
        <Select.ItemIndicator>
          <FaCheck />
        </Select.ItemIndicator>
      </Select.Item>
    );
  }
);

export default Select;
