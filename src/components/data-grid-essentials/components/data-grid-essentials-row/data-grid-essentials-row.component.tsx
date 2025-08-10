import { ReactElement } from "react";

import { DataGridEssentialsRowType } from "@/components/data-grid-essentials/types/data-grid-essentials-row.type";

import styles from "./data-grid-essentials-row.module.css";

type Props = {
  item: DataGridEssentialsRowType;
};

export default function DataGridEssentialsRowComponent({
  item,
}: Props): ReactElement {
  console.log(item);

  return (
    <div className={styles["data-grid-essentials-row"]}>
      Look Logs in the Console
    </div>
  );
}
