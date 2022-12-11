import { Meta, StoryFn } from "@storybook/react";
import { Header } from "./Header";

export default {
  title: "Nvisia/Header",
  component: Header,
} as Meta;

const Template: StoryFn = (args) => <Header {...args} />;

export const Default = Template.bind({});
Default.args = {};
