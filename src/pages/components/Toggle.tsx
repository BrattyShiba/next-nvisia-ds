import * as Switch from "@radix-ui/react-switch";

const Toggle = () => {
  return (
    <div className="switch">
      <label className="switch-label" htmlFor="toggle">
        Toggle Label
      </label>
      <Switch.Root className="switch-root" id="toggle">
        <Switch.Thumb className="switch-thumb" />
      </Switch.Root>
    </div>
  );
};

export default Toggle;
