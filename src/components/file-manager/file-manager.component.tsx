import React, { JSX } from "react";

import renderCellContent from "./_handler/renderCellContent";
import renderHeaderContent from "./_handler/renderHeaderContent";
import data from "./data.json";

import styles from "./file-manager.module.css";

export type RowType = {
  id: number;
  name: string;
  size: number;
  type: "Folder" | "jpg" | string;
  modified: string;
  shared: object[];
  liked: boolean;
};

export type ColumnKey =
  | "checkbox"
  | "name"
  | "size"
  | "type"
  | "modified"
  | "shared"
  | "liked";

export const columns: { label: string; key: ColumnKey }[] = [
  { label: "Checkbox", key: "checkbox" },
  { label: "Name", key: "name" },
  { label: "Size", key: "size" },
  { label: "Type", key: "type" },
  { label: "Modified", key: "modified" },
  { label: "Shared", key: "shared" },
  { label: "liked", key: "liked" },
];

export default function FileManagerComponent(): JSX.Element {
  return (
    <div className={styles["container"]}>
      {/* Header */}
      <div className={styles["container-head"]}>
        {columns.map((col, index) => renderHeaderContent(col, index))}
      </div>

      {/* Body */}
      <div className={styles["container-body"]}>
        {data.map((row: RowType) => (
          <div key={row.id} className={styles["container-row"]}>
            {columns.map((col, index) =>
              renderCellContent(row, col.key, index),
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
