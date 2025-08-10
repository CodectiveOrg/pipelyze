import { ReactElement } from "react";

import DataGridHeaderComponent from "@/components/data-grid/components/data-grid-header/data-grid-header.component";
import DataGridRowComponent from "@/components/data-grid/components/data-grid-row/data-grid-row.component";
import { DataGridColumnType } from "@/components/data-grid/types/data-grid-column.type";
import { DataGridRowType } from "@/components/data-grid/types/data-grid-row.type";

import styles from "./data-grid.module.css";

type Props = {
  columns: DataGridColumnType[];
  rows: DataGridRowType[];
};

export default function DataGridComponent({
  columns,
  rows,
}: Props): ReactElement {
  return (
    <div className={styles["data-grid"]}>
      <div className={styles.table}>
        <DataGridHeaderComponent columns={columns} />
        {rows.map((row) => (
          <DataGridRowComponent key={row.id} columns={columns} row={row} />
        ))}
      </div>
    </div>
  );
}
