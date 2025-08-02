import type { ReactNode } from "react";

import data from "@/components/file-explorer/data.json";

import HeadComponent from "./components/head/head.component";
import RowComponent from "./components/row/row.component";

import styles from "./file-explorer.module.css";

export default function FileExplorerComponent(): ReactNode {
  return (
    <div className={styles["file-explorer"]}>
      <HeadComponent />
      <div className={styles.body}>
        {data.map((item, index) => (
          <RowComponent key={index} data={item} />
        ))}
      </div>
    </div>
  );
}
