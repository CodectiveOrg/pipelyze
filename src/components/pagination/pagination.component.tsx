import { type ReactNode } from "react";

import clsx from "clsx";

import IconComponent from "../icon/icon.component";

import styles from "./pagination.module.css";

export default function PaginationComponent(): ReactNode {
  return (
    <div className={styles.pagination}>
      <div className={styles["rows-per-page"]}>
        <div>Rows per page:</div>
        <div className={styles.menu}>
          <div>5</div>
        </div>
      </div>
      <div className={styles.interval}>1–10 of 30</div>
      <div className={styles.actions}>
        <div className={styles.action}>
          <IconComponent name="left-fill" />
        </div>
        <div className={clsx(styles.action, styles.disabled)}>
          <IconComponent name="right-fill" color="inherit" />
        </div>
      </div>
    </div>
  );
}
