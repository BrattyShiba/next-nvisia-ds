import { Meta, StoryFn } from "@storybook/react";
import CheckBox from "./Checkbox";

export default {
  title: "Nvisia/Checkbox",
  component: CheckBox,
} as Meta;

const Template: StoryFn = (args) => (
  <CheckBox
    label={""}
    id={""}
    value={""}
    onCheckedChange={function (): void {}}
    {...args}
  />
);

export const Default = Template.bind({});
Default.args = {
  label: "Checkbox",
  id: "id",
};

export const Error = Template.bind({});
Error.args = {
  label: "Checkbox",
  id: "id",
  error: true,
};
