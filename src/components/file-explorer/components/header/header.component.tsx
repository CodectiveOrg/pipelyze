import type { ReactNode } from "react";

import CheckboxComponent from "@/components/checkbox/checkbox.component";

import styles from "./header.module.css";

export default function HeaderComponent(): ReactNode {
  return (
    <div className={styles.header}>
      <CheckboxComponent />
      <div className={styles.name}>Name</div>
      <div>Size</div>
      <div>Type</div>
      <div>Modified</div>
      <div>Shared</div>
      <div></div>
    </div>
  );
}
