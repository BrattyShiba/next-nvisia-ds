import * as Dialog from "@radix-ui/react-dialog";
import { PropsWithChildren } from "react";

const Modal = ({ children, ...props }: PropsWithChildren) => {
  return (
    <Dialog.Root>
      <Dialog.Trigger>
        <button>Button Text</button>
      </Dialog.Trigger>
      <Dialog.Portal>
        <Dialog.Overlay className="modal-overlay" />
        {children}
      </Dialog.Portal>
    </Dialog.Root>
  );
};

export const ModalContent = ({ children, ...props }: PropsWithChildren) => {
  return (
    <Dialog.Content className="modal-content">
      {children}
      <Dialog.Close>
        <button>Button Close</button>
      </Dialog.Close>
    </Dialog.Content>
  );
};

export default Modal;
