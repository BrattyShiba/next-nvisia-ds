import { Meta, StoryFn } from "@storybook/react";
import AccordionElement, { AccordionItem } from "./Accordion";

export default {
  title: "Nvisia/Accordion",
  component: AccordionElement,
  subcomponent: AccordionItem,
} as Meta;

const Template: StoryFn = (args) => (
  <AccordionElement {...args}>
    <AccordionItem
      value="item 1"
      trigger="Accordion Title"
      content="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quisquam doloribus et fuga. Voluptates nobis porro assumenda, magnam accusantium doloremque recusandae aperiam, perspiciatis aut at amet veritatis cum numquam dolor ea?"
    />
    <AccordionItem
      value="item 2"
      trigger="Accordion Title"
      content="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quisquam doloribus et fuga. Voluptates nobis porro assumenda, magnam accusantium doloremque recusandae aperiam, perspiciatis aut at amet veritatis cum numquam dolor ea?"
    />
  </AccordionElement>
);

export const Default = Template.bind({});
Default.args = {};
