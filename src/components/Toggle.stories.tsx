import { Meta, StoryFn } from "@storybook/react";
import Toggle from "./Toggle";

export default {
  title: "Nvisia/Toggle",
  component: Toggle,
} as Meta;

const Template: StoryFn = (args) => <Toggle {...args}></Toggle>;

export const Default = Template.bind({});
Default.args = {
  id: "Id",
  label: "Label",
};
export const Disabled = Template.bind({});
Disabled.args = {
  id: "Id",
  label: "Label",
  disabled: true,
};
