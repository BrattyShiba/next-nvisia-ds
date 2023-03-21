import { Meta, StoryFn } from "@storybook/react";
import Radios, { Radio } from "./Radio";

export default {
  title: "Nvisia/Radio",
  component: Radios,
  subcomponent: Radio,
} as Meta;

const Template: StoryFn = (args) => (
  <Radios label={""} {...args}>
    <Radio value="one" label="One" id="1" />
    <Radio value="two" label="Two" id="2" />
    <Radio value="three" label="Three" id="3" />
  </Radios>
);

export const Default = Template.bind({});
Default.args = {
  label: "Label",
  name: "name",
  value: "value",
};
