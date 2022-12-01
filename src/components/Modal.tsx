import * as Dialog from "@radix-ui/react-dialog";
import { PropsWithChildren } from "react";
import { Button } from "./Button";

interface ModalProps {
  buttonLabel: string;
  name: string;
  mode: "primary" | "secondary";
  disabled?: boolean;
}

const Modal = ({
  children,
  buttonLabel,
  name,
  mode,
  disabled,
  ...props
}: PropsWithChildren<ModalProps>) => {
  return (
    <Dialog.Root>
      <Dialog.Trigger asChild>
        <Button
          label={buttonLabel}
          name={name}
          mode={mode}
          disabled={disabled}
        />
      </Dialog.Trigger>
      <Dialog.Portal className="modal">
        <Dialog.Overlay className="modal-overlay" />
        {children}
      </Dialog.Portal>
    </Dialog.Root>
  );
};

interface ModalContentProps {
  closeModal: string;
  name: string;
  mode: "primary" | "secondary";
}

export const ModalContent = ({
  children,
  closeModal,
  name,
  mode,
  ...props
}: PropsWithChildren<ModalContentProps>) => {
  return (
    <Dialog.Content className="modal-content">
      {children}
      <Dialog.Close>
        <Button label={closeModal} name={name} mode={mode} />
      </Dialog.Close>
    </Dialog.Content>
  );
};

export default Modal;
