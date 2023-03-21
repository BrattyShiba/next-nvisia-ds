import { Meta, StoryFn } from "@storybook/react";
import Hero from "./Hero";

export default {
  title: "Nvisia/Hero",
  component: Hero,
} as Meta;

const Template: StoryFn = (args) => (
  <Hero title={""} description={""} image={""} imageAlt={""} {...args}></Hero>
);

export const Default = Template.bind({});
Default.args = {
  title: "Heading",
  description: "Hero Description",
  image: "https://unsplash.it/1920/780",
  imageAlt: "imageAlt",
};
