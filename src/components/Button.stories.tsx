import { Meta, StoryFn } from "@storybook/react";
import { Button } from "./Button";

export default {
  title: "Nvisia/Button",
  component: Button,
} as Meta;

const Template: StoryFn = (args) => <Button label={""} {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  type: "button",
  label: "Button Label",
  mode: "primary",
  name: "button",
};

export const Secondary = Template.bind({});
Secondary.args = {
  type: "button",
  label: "Button Label",
  mode: "secondary",
  name: "button",
};

export const Disabled = Template.bind({});
Disabled.args = {
  type: "button",
  label: "Button Label",
  mode: "primary",
  name: "button",
  disabled: true,
};
