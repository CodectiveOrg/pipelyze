import { ReactElement } from "react";

import DataGridHeaderComponent from "@/components/data-grid/components/data-grid-header/data-grid-header.component";
import DataGridRowComponent from "@/components/data-grid/components/data-grid-row/data-grid-row.component";
import { DataGridColumnType } from "@/components/data-grid/types/data-grid-column.type";

import styles from "./data-grid.module.css";

type Props<TRow> = {
  columns: DataGridColumnType<TRow>[];
  rows: TRow[];
};

export default function DataGridComponent<TRow>({
  columns,
  rows,
}: Props<TRow>): ReactElement {
  return (
    <div className={styles["data-grid"]}>
      <div className={styles.table}>
        <DataGridHeaderComponent columns={columns} />
        {rows.map((row, index) => (
          <DataGridRowComponent key={index} columns={columns} row={row} />
        ))}
      </div>
    </div>
  );
}
