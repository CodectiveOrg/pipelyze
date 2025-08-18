import { PropsWithChildren, type ReactNode, Ref, useRef } from "react";

import IconButtonComponent from "@/components/icon-button/icon-button.component";
import TypographyComponent from "@/components/typography/typography.component";

import styles from "./modal.module.css";

type Props = PropsWithChildren<{
  ref: Ref<HTMLDialogElement>;
  title: string;
  onClose: () => void;
}>;

export default function ModalComponent({
  ref,
  title,
  onClose,
  children,
}: Props): ReactNode {
  const dialogRef = useRef<HTMLDialogElement>(null);

  return (
    <dialog
      ref={(element) => {
        dialogRef.current = element;
        if (typeof ref === "function") {
          ref(element);
        } else {
          ref.current = element;
        }
      }}
      className={styles.dialog}
      onClose={onClose}
    >
      <div className={styles.modal}>
        <header>
          <TypographyComponent variant="h6">{title}</TypographyComponent>
          <IconButtonComponent name="close-line" />
        </header>
        <div className={styles.content}>{children}</div>
      </div>
    </dialog>
  );
}
