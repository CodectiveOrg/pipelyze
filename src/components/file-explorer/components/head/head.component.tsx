import type { ReactNode } from "react";

import CheckboxComponent from "@/components/checkbox/checkbox.component";

import styles from "./head.module.css";

export default function HeadComponent(): ReactNode {
  return (
    <div className={styles.head}>
      <div className={styles["first-cell"]}>
        <CheckboxComponent />
        <p className={styles.name}>Name</p>
      </div>
      <div>Size</div>
      <div>Type</div>
      <div>Modified</div>
      <div>Shared</div>
      <div></div>
    </div>
  );
}
