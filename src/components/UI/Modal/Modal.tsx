import { useEffect, useRef, ReactNode } from "react";
import { createPortal } from "react-dom";
import classes from "./Modal.module.css";

type ModalProps = {
  children: ReactNode;
  open: boolean;
  onClose?: () => void;
  className?: string;
};

export const Modal = ({
  children,
  open,
  onClose,
  className = "",
}: ModalProps) => {
  const refDialog = useRef<HTMLDialogElement>(null);

  useEffect(() => {
    const dialog = refDialog.current;

    if (open) dialog?.showModal();

    return () => dialog?.close();
  }, [open]);

  return createPortal(
    <dialog
      ref={refDialog}
      className={`${classes.modal} ${className}`}
      onClose={onClose}
    >
      {children}
    </dialog>,
    document.getElementById("modal") as HTMLElement,
  );
};
