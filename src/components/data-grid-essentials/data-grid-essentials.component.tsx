import { ReactElement } from "react";

import DataGridEssentialsHeaderComponent from "@/components/data-grid-essentials/components/data-grid-essentials-header/data-grid-essentials-header.component";
import DataGridEssentialsRowComponent from "@/components/data-grid-essentials/components/data-grid-essentials-row/data-grid-essentials-row.component";
import { DataGridEssentialsRowType } from "@/components/data-grid-essentials/types/data-grid-essentials-row.type";

import styles from "./data-grid-essentials.module.css";

type Props = {
  items: DataGridEssentialsRowType[];
};

export default function DataGridEssentialsComponent({
  items,
}: Props): ReactElement {
  return (
    <div className={styles["data-grid-essentials"]}>
      <div className={styles.table}>
        <DataGridEssentialsHeaderComponent />
        {items.map((item) => (
          <DataGridEssentialsRowComponent key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
}
