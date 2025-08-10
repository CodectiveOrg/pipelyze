import { ReactElement } from "react";

import DataGridHeaderComponent from "@/components/data-grid/components/data-grid-header/data-grid-header.component";
import DataGridRowComponent from "@/components/data-grid/components/data-grid-row/data-grid-row.component";
import { DataGridRowType } from "@/components/data-grid/types/data-grid-row.type";

import styles from "./data-grid.module.css";

type Props = {
  items: DataGridRowType[];
};

export default function DataGridComponent({ items }: Props): ReactElement {
  return (
    <div className={styles["data-grid"]}>
      <div className={styles.table}>
        <DataGridHeaderComponent />
        {items.map((item) => (
          <DataGridRowComponent key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
}
