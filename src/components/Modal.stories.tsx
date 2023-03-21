/* eslint-disable import/no-anonymous-default-export */
import { Meta, StoryFn } from "@storybook/react";
import Modal, { ModalContent } from "./Modal";

export default {
  title: "Nvisia/Modal",
  component: Modal,
  subcomponent: ModalContent,
} as Meta;

const Template: StoryFn = (args) => (
  <Modal buttonLabel={""} name={""} mode={"primary"} {...args}>
    <ModalContent closeModal={""} name={""} mode={"primary"} {...args}>
      <h2>Modal Window</h2>
      <h3>Excepteur sint occaecat cupidatat</h3>
      <p>
        Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
        officia
      </p>
    </ModalContent>
  </Modal>
);

export const Default = Template.bind({});
Default.args = {
  buttonLabel: "Open Modal",
  name: "modal",
  mode: "primary",
  closeModal: "Close",
};
export const Disabled = Template.bind({});
Disabled.args = {
  buttonLabel: "Open Modal",
  name: "modal",
  mode: "primary",
  closeModal: "Close",
  disabled: true,
};
