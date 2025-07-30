import React, { JSX } from "react";

import data from "./data.json";
import FolderIcon from "./folder.icon";

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

function formatDateToYMD(dateString: string) {
  const date = new Date(dateString);
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");
  return `${year}-${month}-${day}`;
}
function formatTimeToHMA(dateString: string) {
  const date = new Date(dateString);
  let hours = date.getHours();
  const minutes = String(date.getMinutes()).padStart(2, "0");
  const ampm = hours >= 12 ? "pm" : "am";
  hours = hours % 12;
  hours = hours ? hours : 12;
  return `${hours}:${minutes} ${ampm}`;
}

export default function FileManagerComponent(): JSX.Element {
  return (
    <div className={styles["container"]}>
      {/* Header */}
      <div className={styles["container-head"]}>
        {columns.map((col, idx) => (
          <div
            key={idx}
            className={`${styles["container-cell"]} ${styles["container-head-cell"]} ${
              col.key === "checkbox" ? styles["container-cell-checkbox"] : ""
            }`}
          >
            {col.key === "checkbox" ? (
              <input type="checkbox" className={styles["checkbox-input"]} />
            ) : (
              col.label
            )}
          </div>
        ))}
      </div>

      {/* Body */}
      <div className={styles["container-body"]}>
        {data.map((row: RowType) => (
          <div key={row.id} className={styles["container-row"]}>
            {columns.map((col, idx) => (
              <div
                key={idx}
                className={`${styles["container-cell"]} ${
                  col.key === "modified" ? styles["modified-cell"] : ""
                } ${col.key === "checkbox" ? styles["container-cell-checkbox"] : ""}`}
              >
                {col.key === "checkbox" ? (
                  <input type="checkbox" className={styles["checkbox-input"]} />
                ) : col.key === "name" && row.type === "Folder" ? (
                  <FolderIcon type={row.type} />
                ) : col.key === "shared" ? (
                  Array.isArray(row.shared) ? (
                    row.shared.length
                  ) : (
                    0
                  )
                ) : col.key === "modified" ? (
                  <>
                    <div>{formatDateToYMD(row.modified)}</div>
                    <div>{formatTimeToHMA(row.modified)}</div>
                  </>
                ) : col.key === "type" ? (
                  row.type
                ) : (
                  (row as RowType)[col.key]
                )}
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}
