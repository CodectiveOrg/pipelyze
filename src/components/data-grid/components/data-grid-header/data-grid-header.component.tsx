import { ReactElement } from "react";

import { DataGridColumnType } from "@/components/data-grid/types/data-grid-column.type";

import styles from "./data-grid-header.module.css";

type Props = {
  columns: DataGridColumnType[];
};

export default function DataGridHeaderComponent({
  columns,
}: Props): ReactElement {
  console.log(columns);

  return <div className={styles["data-grid-header"]}></div>;
}
