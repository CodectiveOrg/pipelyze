"use client";

import { type ReactNode, Ref, useEffect, useRef, useState } from "react";

import TypographyComponent from "@/components/typography/typography.component";

import { assertIsNode } from "@/utils/node.util";

import styles from "./dialog.module.css";

type Props = {
  ref: Ref<HTMLDialogElement>;
  title: string;
  open: boolean;
  children: ReactNode;
};

export default function DialogComponent({
  ref,
  title,
  open = false,
  children,
}: Props): ReactNode {
  const dialogRef = useRef<HTMLDialogElement>(null);
  const [show, setShow] = useState<boolean>(open);

  useEffect(() => {
    const checkIfClickedOutside = ({ target }: MouseEvent): void => {
      assertIsNode(target);
      if (show && dialogRef?.current && !dialogRef.current?.contains(target)) {
        dialogRef.current?.close();
        setShow((prev) => !prev);
      }
    };
    document.addEventListener("mousedown", checkIfClickedOutside);
    return (): void => {
      document.removeEventListener("mousedown", checkIfClickedOutside);
    };
  }, [show]);

  if (show) {
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
      >
        <header>
          <TypographyComponent variant="h6">{title}</TypographyComponent>
        </header>
        {children}
      </dialog>
    );
  } else {
    return <></>;
  }
}
