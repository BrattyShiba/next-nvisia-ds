import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import { InputField } from "../src/components/InputField";

export default {
  title: "InputField",
  component: InputField,
} as ComponentMeta<typeof InputField>;

const Template: ComponentStory<typeof InputField> = (args) => (
  <InputField {...args} />
);

// an alternative way - not sure which is "better"
// export const Primary: ComponentStory<typeof InputField> = () => <InputField label='Full Name' name='fullName'/>;

export const Primary = Template.bind({});
Primary.args = {
  label: "Full Name",
  name: "fullName",
};

export const Error = Template.bind({});
Error.args = {
  hasError: true,
  label: "Full Name",
  name: "fullName",
};

// TODO: figure out how to get styles to show up in Storybook - why they not styling?
