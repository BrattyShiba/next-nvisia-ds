import * as Switch from "@radix-ui/react-switch";

interface ToggleProps {
  label: string;
  id: string;
  disabled?: boolean;
  onClickEvent?: () => void;
}

const Toggle = ({ label, id, onClickEvent, ...props }: ToggleProps) => {
  function handleOnClickEvents() {
    if (onClickEvent) {
      onClickEvent();
    }
  }
  return (
    <div className="switch">
      <label className="switch-label" htmlFor={id}>
        {label}
      </label>
      <Switch.Root
        onCheckedChange={handleOnClickEvents}
        className="switch-root"
        id={id}
        disabled={props.disabled}
      >
        <Switch.Thumb className="switch-thumb" />
      </Switch.Root>
    </div>
  );
};

export default Toggle;
