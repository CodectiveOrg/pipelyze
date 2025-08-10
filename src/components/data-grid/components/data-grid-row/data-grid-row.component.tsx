import { ReactElement } from "react";

import { DataGridColumnType } from "@/components/data-grid/types/data-grid-column.type";
import { DataGridRowType } from "@/components/data-grid/types/data-grid-row.type";

import styles from "./data-grid-row.module.css";

type Props = {
  columns: DataGridColumnType[];
  row: DataGridRowType;
};

export default function DataGridRowComponent({
  columns,
  row,
}: Props): ReactElement {
  console.log(columns, row);

  return (
    <div className={styles["data-grid-row"]}>Look Logs in the Console</div>
  );
}
