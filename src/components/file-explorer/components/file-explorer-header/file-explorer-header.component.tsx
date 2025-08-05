import type { ReactNode } from "react";

import clsx from "clsx";

import styles from "./file-explorer-header.module.css";

export default function FileExplorerHeaderComponent(): ReactNode {
  return (
    <div className={clsx(styles["file-explorer-header"], "subtitle2")}>
      <div className={styles.cell}>Title</div>
      <div className={styles.cell}>Size</div>
      <div className={styles.cell}>Type</div>
      <div className={styles.cell}>Modified</div>
      <div className={styles.cell}></div>
    </div>
  );
}
