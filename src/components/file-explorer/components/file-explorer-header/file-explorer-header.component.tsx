import type { ReactNode } from "react";

import CheckboxComponent from "@/components/checkbox/checkbox.component";

import styles from "./file-explorer-header.module.css";

export default function FileExplorerHeaderComponent(): ReactNode {
  return (
    <div className={styles["file-explorer-header"]}>
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
