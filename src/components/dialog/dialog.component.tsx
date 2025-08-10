"use client";

import { type ReactNode, Ref, useEffect, useRef } from "react";

import TypographyComponent from "@/components/typography/typography.component";

import styles from "./dialog.module.css";

type Props = {
  ref: Ref<HTMLDialogElement>;
  title: string;
  open?: boolean;
  close: () => void;
  children: ReactNode;
};

export default function DialogComponent({
  ref,
  title,
  open = false,
  close,
  children,
}: Props): ReactNode {
  const dialogRef = useRef<HTMLDialogElement>(null);

  useEffect(() => {
    if (open) {
      dialogRef.current?.showModal();
    }
    return (): void => dialogRef.current?.close();
  }, [open]);

  return (
    <dialog
      ref={(element) => {
        dialogRef.current = element;
        if (typeof ref === "function") {
          ref(element);
        } else {
          if (ref?.current) ref.current = element;
        }
      }}
      className={styles.dialog}
      onClose={close}
    >
      <header>
        <TypographyComponent variant="h6">{title}</TypographyComponent>
      </header>
      {children}
    </dialog>
  );
}
