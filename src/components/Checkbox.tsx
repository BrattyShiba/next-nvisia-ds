import * as Checkbox from "@radix-ui/react-checkbox";
import { FaCheck } from "react-icons/fa";

interface CheckboxProps {
  label: string;
  id: string;
  error?: boolean;
  value: string;
  onCheckedChange: () => void;
}

const CheckBox = ({ ...props }: CheckboxProps) => {
  return (
    <span
      className={`checkbox-container ${props.error ? "checkbox-error" : ""}`}
    >
      <Checkbox.Root
        className="checkbox"
        id={props.id}
        value={props.value}
        onCheckedChange={props.onCheckedChange}
      >
        <Checkbox.Indicator className="checkbox-indicator">
          <FaCheck />
        </Checkbox.Indicator>
      </Checkbox.Root>
      <label className="checkbox-label" htmlFor={props.id}>
        {props.label}
      </label>
    </span>
  );
};

export default CheckBox;
