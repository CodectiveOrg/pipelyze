import CheckboxComponent from "@/components/checkbox/checkbox.component";
import IconButtonComponent from "@/components/icon-button/icon-button.component";

import FolderIcon from "../_components/folder.icon";
import { formatDateToYMD } from "../_utils/formatDateToYMD";
import { formatTimeToHMA } from "../_utils/formatTimeToHMA";
import { ColumnKey, RowType } from "../file-manager.component";

import styles from "../file-manager.module.css";

export default function renderCellContent(
  row: RowType,
  colKey: ColumnKey,
  index: number,
) {
  switch (colKey) {
    case "checkbox":
      return (
        <div key={index} className={styles["checkbox-cell"]}>
          <CheckboxComponent color="action" size="small" name={row.name} />
        </div>
      );
    case "name":
      return (
        <div key={index} className={styles["name-cell"]}>
          <FolderIcon type={row.type} />
          <span>{row.name}</span>
        </div>
      );
    case "size":
      return (
        <div key={index} className={styles["size-cell"]}>
          {row.size}
        </div>
      );
    case "type":
      return (
        <div key={index} className={styles["type-cell"]}>
          {row.type}
        </div>
      );
    case "modified":
      return (
        <div key={index} className={styles["modified-cell-row"]}>
          <div>{formatDateToYMD(row.modified)}</div>
          <div className={styles["modified-time-cell"]}>
            {formatTimeToHMA(row.modified)}
          </div>
        </div>
      );
    case "shared":
      return <div key={index} className={styles["shared-cell"]}></div>;
    case "liked":
      return (
        <div key={index} className={styles["container-icons"]}>
          <IconButtonComponent
            name="star-line"
            size="small"
            color={row.liked ? "primary" : "action"}
          />
          <IconButtonComponent name="more-2-line" size="small" color="action" />
        </div>
      );
    default:
      return (row as RowType)[colKey];
  }
}
