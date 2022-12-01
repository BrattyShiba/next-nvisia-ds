import * as Switch from "@radix-ui/react-switch";

interface ToggleProps {
  label: string;
  id: string;
  disabled?: boolean;
}

const Toggle = ({ ...props }: ToggleProps) => {
  return (
    <div className="switch">
      <label className="switch-label" htmlFor={props.id}>
        {props.label}
      </label>
      <Switch.Root
        className="switch-root"
        id={props.id}
        disabled={props.disabled}
      >
        <Switch.Thumb className="switch-thumb" />
      </Switch.Root>
    </div>
  );
};

export default Toggle;
