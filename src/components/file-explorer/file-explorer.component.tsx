import type { ReactNode } from "react";

import data from "@/components/file-explorer/data.json";

import HeaderComponent from "./components/header/header.component";
import RowComponent from "./components/row/row.component";

import styles from "./file-explorer.module.css";

export default function FileExplorerComponent(): ReactNode {
  return (
    <div className={styles["file-explorer"]}>
      <HeaderComponent />

      {data.map((item) => (
        <RowComponent key={item.id} item={item} />
      ))}
    </div>
  );
}
