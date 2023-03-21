import { Meta, StoryFn } from "@storybook/react";
import { Dropdown, DropdownItem } from "./Dropdown";

export default {
  title: "Nvisia/Select",
  component: Dropdown,
  subcomponent: DropdownItem,
} as Meta;

const Template: StoryFn = (args) => (
  <Dropdown
    label={""}
    name={""}
    onValueChange={function (d: string, e: string): void {}}
    {...args}
  >
    <DropdownItem value="one">One</DropdownItem>
    <DropdownItem value="two">Two</DropdownItem>
    <DropdownItem value="three">Three</DropdownItem>
  </Dropdown>
);
export const Default = Template.bind({});
Default.args = {
  label: "Dropdown",
  name: "dropdown",
  onValueChange: () => {},
};

export const DefaultOption = Template.bind({});
DefaultOption.args = {
  label: "Dropdown",
  name: "dropdown",
  defaultValue: "two",
  onValueChange: () => {},
};

export const Error = Template.bind({});
Error.args = {
  label: "Dropdown",
  name: "dropdown",
  error: true,
  onValueChange: () => {},
};
export const Disabled = Template.bind({});
Disabled.args = {
  label: "Dropdown",
  name: "dropdown",
  disabled: true,
  onValueChange: () => {},
};
