import {
  MouseEvent,
  PropsWithChildren,
  type ReactNode,
  RefObject,
} from "react";

import IconButtonComponent from "@/components/icon-button/icon-button.component";
import TypographyComponent from "@/components/typography/typography.component";

import styles from "./modal.module.css";

type Props = PropsWithChildren<{
  ref: RefObject<HTMLDialogElement | null>;
  title: string;
  onClose: () => void;
}>;

export default function ModalComponent({
  ref,
  title,
  onClose,
  children,
}: Props): ReactNode {
  const handleClick = (e: MouseEvent<HTMLDialogElement>): void => {
    if (e.currentTarget === e.target) {
      handleClose();
    }
  };

  const handleClose = (): void => {
    ref?.current?.close();
  };

  return (
    <dialog
      ref={ref}
      className={styles.dialog}
      onClick={handleClick}
      onClose={onClose}
    >
      <div className={styles.modal}>
        <header>
          <TypographyComponent variant="h6">{title}</TypographyComponent>
          <IconButtonComponent name="close-line" onClick={handleClose} />
        </header>
        <div className={styles.content}>{children}</div>
      </div>
    </dialog>
  );
}
