/* eslint-disable react/display-name */
import { forwardRef, PropsWithChildren } from "react";
import { FaChevronDown, FaChevronUp, FaCheck } from "react-icons/fa";
import * as Select from "@radix-ui/react-select";
import { useTheme } from "../context/ThemeContext";
import styles from "./select.module.css";

interface SelectProps {
  defaultValue: string;
  error?: boolean;
  placeholderText?: string;
  label: string;
}

export const Dropdown = ({
  children,
  ...props
}: PropsWithChildren<SelectProps>) => {
  const { isDarkTheme } = useTheme();
  return (
    <div
      className={styles.dropdown}
      data-theme={`${isDarkTheme ? "dark-theme" : "light-theme"}`}
    >
      <Select.Root defaultValue={props.defaultValue}>
        <Select.Trigger
          className={`
          ${styles.select}
          ${props.error ? styles.error : ""}`}
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
          <Select.Content
            data-theme={`${isDarkTheme ? "dark-theme" : "light-theme"}`}
            className={styles.content}
          >
            <Select.ScrollUpButton>
              <FaChevronUp />
            </Select.ScrollUpButton>
            <Select.Viewport className={styles.viewport}>
              {children}
            </Select.Viewport>
            <Select.ScrollDownButton>
              <FaChevronDown />
            </Select.ScrollDownButton>
          </Select.Content>
        </Select.Portal>
      </Select.Root>
    </div>
  );
};
export const DropdownItem = forwardRef(
  ({ children, ...props }: any, forwardedRef) => {
    return (
      <Select.Item {...props} ref={forwardedRef} className={styles.selectItem}>
        <Select.ItemText>{children}</Select.ItemText>
        <Select.ItemIndicator>
          <FaCheck />
        </Select.ItemIndicator>
      </Select.Item>
    );
  }
);

export default Select;
