import { ReactElement } from "react";

import { DataGridRowType } from "@/components/data-grid/types/data-grid-row.type";

import styles from "./data-grid-row.module.css";

type Props = {
  item: DataGridRowType;
};

export default function DataGridRowComponent({ item }: Props): ReactElement {
  console.log(item);

  return (
    <div className={styles["data-grid-row"]}>Look Logs in the Console</div>
  );
}
