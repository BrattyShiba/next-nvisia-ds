import { Meta, StoryFn } from "@storybook/react";
import { InputField } from "./InputField";

export default {
  title: "Nvisia/InputField",
  component: InputField,
} as Meta;

const Template: StoryFn = (args) => <InputField {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  label: "Full Name",
  name: "fullName",
};
export const Disabled = Template.bind({});
Disabled.args = {
  label: "Full Name",
  name: "fullName",
  disabled: true,
};

export const Error = Template.bind({});
Error.args = {
  hasError: true,
  label: "Full Name",
  name: "fullName",
};
