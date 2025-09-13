import { ReactElement } from "react";

import { DataGridColumnType } from "@/components/data-grid/types/data-grid-column.type";

import styles from "./data-grid-row.module.css";

type Props<TRow> = {
  columns: DataGridColumnType<TRow>[];
  row: TRow;
};

export default function DataGridRowComponent<TRow>({
  columns,
  row,
}: Props<TRow>): ReactElement {
  console.log(columns, row);

  return (
    <div className={styles["data-grid-row"]}>Look Logs in the Console</div>
  );
}
