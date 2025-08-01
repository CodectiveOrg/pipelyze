import CheckboxComponent from "@/components/checkbox/checkbox.component";
import IconButtonComponent from "@/components/icon-button/icon-button.component";

import { ColumnKey } from "../file-manager.component";

import styles from "../file-manager.module.css";

export default function renderHeaderContent(
  col: { label: string; key: ColumnKey },
  index: number,
) {
  switch (col.key) {
    case "checkbox":
      return (
        <div key={index} className={styles["checkbox-cell"]}>
          <CheckboxComponent color="action" size="small" name={col.key} />
        </div>
      );
    case "name":
      return (
        <div key={index} className={styles["name-cell"]}>
          <label>
            {col.label}
            <IconButtonComponent
              name="arrow-up-line"
              size="small"
              color="action"
            />
          </label>
        </div>
      );
    case "size":
      return (
        <div key={index} className={styles["size-cell"]}>
          {col.label}
        </div>
      );
    case "type":
      return (
        <div key={index} className={styles["type-cell"]}>
          {col.label}
        </div>
      );
    case "modified":
      return (
        <div key={index} className={styles["modified-cell"]}>
          {col.label}
        </div>
      );
    case "shared":
      return (
        <div key={index} className={styles["shared-cell"]}>
          {col.label}
        </div>
      );
    case "liked":
      return <div key={index} className={styles["container-icons"]}></div>;
    default:
      return <div key={index}>{col.label}</div>;
  }
}
