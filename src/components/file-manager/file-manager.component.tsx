import React, { JSX } from "react";

import CheckboxComponent from "../checkbox/checkbox.component";
import IconButtonComponent from "../icon-button/icon-button.component";
import data from "./data.json";
import FolderIcon from "./folder.icon";
import { formatDateToYMD } from "./utils/formatDateToYMD";
import { formatTimeToHMA } from "./utils/formatTimeToHMA";

import styles from "./file-manager.module.css";

type RowType = {
  id: number;
  name: string;
  size: number;
  type: "Folder" | "jpg" | string;
  modified: string;
  shared: object[];
};

type ColumnKey = "checkbox" | "name" | "size" | "type" | "modified" | "shared";

const columns: { label: string; key: ColumnKey }[] = [
  { label: "Checkbox", key: "checkbox" },
  { label: "Name", key: "name" },
  { label: "Size", key: "size" },
  { label: "Type", key: "type" },
  { label: "Modified", key: "modified" },
  { label: "Shared", key: "shared" },
];

function renderHeaderContent(col: { label: string; key: ColumnKey }) {
  switch (col.key) {
    case "checkbox":
      return (
        <div className={styles["checkbox-cell"]}>
          <CheckboxComponent color="action" size="small" />
        </div>
      );
    case "name":
      return (
        <div className={styles["name-cell"]}>
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
      return <div className={styles["size-cell"]}>{col.label}</div>;
    case "type":
      return <div className={styles["type-cell"]}>{col.label}</div>;
    default:
      return col.label;
  }
}
function renderCellContent(row: RowType, colKey: ColumnKey) {
  switch (colKey) {
    case "checkbox":
      return (
        <div className={styles["checkbox-cell"]}>
          <CheckboxComponent color="action" size="small" />
        </div>
      );
    case "name":
      return (
        <div className={styles["name-cell"]}>
          <FolderIcon type={row.type} />
          <span>{row.name}</span>
        </div>
      );
    case "size":
      return <div className={styles["size-cell"]}>{row.size}</div>;
    case "type":
      return <div className={styles["type-cell"]}>{row.type}</div>;
    case "modified":
      return (
        <div className={styles["modified-cell"]}>
          <div>{formatDateToYMD(row.modified)}</div>
          <div className={styles["modified-time-cell"]}>
            {formatTimeToHMA(row.modified)}
          </div>
        </div>
      );
    case "shared":
      return null;

    default:
      return (row as RowType)[colKey];
  }
}

export default function FileManagerComponent(): JSX.Element {
  return (
    <div className={styles["container"]}>
      {/* Header */}
      <div className={styles["container-head"]}>
        {columns.map((col, idx) => (
          <div key={idx} className={`${styles["container-cell"]} `}>
            {renderHeaderContent(col)}
          </div>
        ))}
        <div className={styles["container-icons"]} />
      </div>

      {/* Body */}
      <div className={styles["container-body"]}>
        {data.map((row: RowType) => (
          <div key={row.id} className={styles["container-row"]}>
            {columns.map((col, idx) => (
              <div key={idx} className={`${styles["container-cell"]}`}>
                {renderCellContent(row, col.key)}
              </div>
            ))}
            <div className={styles["container-icons"]}>
              <IconButtonComponent
                name="star-line"
                size="small"
                color="action"
              />
              <IconButtonComponent
                name="more-2-line"
                size="small"
                color="action"
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
