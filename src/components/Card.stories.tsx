import { Meta, StoryFn } from "@storybook/react";
import Card from "./Card";

export default {
  title: "Nvisia/Card",
  component: Card,
} as Meta;

const Template: StoryFn = (args) => <Card {...args} />;

export const Default = Template.bind({});
Default.args = {};
