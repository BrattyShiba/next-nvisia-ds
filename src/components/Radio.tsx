import React, { PropsWithChildren } from "react";
import * as RadioGroup from "@radix-ui/react-radio-group";

interface RadiosProps {
  defaultValue?: string;
  label: string;
}
interface RadioProps {
  value: string;
  id: string;
  label: string;
}

export const Radios = ({
  children,
  ...props
}: PropsWithChildren<RadiosProps>) => {
  return (
    <RadioGroup.Root
      className="radios-container"
      defaultValue={props.defaultValue}
      aria-label={props.label}
    >
      {children}
    </RadioGroup.Root>
  );
};

export const Radio = ({ ...props }: RadioProps) => {
  return (
    <div className="radios-group">
      <RadioGroup.Item
        className="radios-item"
        value={props.value}
        id={props.id}
      >
        <RadioGroup.Indicator className="radios-indicator" />
      </RadioGroup.Item>
      <label className="radios-label" htmlFor={props.id}>
        {props.label}
      </label>
    </div>
  );
};

export default Radios;
