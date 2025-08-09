import { type ReactNode, Ref } from "react";

import styles from "./dialog.module.css";

type Props = {
  ref: Ref<HTMLDialogElement>;
  children: ReactNode;
};

export default function DialogComponent({ ref, children }: Props): ReactNode {
  return (
    <dialog ref={ref} className={styles.dialog}>
      {children}
    </dialog>
  );
}
