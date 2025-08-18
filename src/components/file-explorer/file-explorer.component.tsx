import type { ReactNode } from "react";

import FileExplorerHeaderComponent from "@/components/file-explorer/components/file-explorer-header/file-explorer-header.component";
import FileExplorerRowComponent from "@/components/file-explorer/components/file-explorer-row/file-explorer-row.component";
import { FileExplorerItemType } from "@/components/file-explorer/type/file-explorer-item.type";

import styles from "./file-explorer.module.css";

export default async function FileExplorerComponent(): Promise<ReactNode> {
  const res = await fetch(
    "http://localhost:3000/api/dataset?page=1&pageSize=2",
  );
  const data = await res.json();
  const dataset: FileExplorerItemType[] = await data.result.datasets;

  return (
    <div className={styles["file-explorer"]}>
      <div className={styles.table}>
        <FileExplorerHeaderComponent />
        {dataset.map((item) => (
          <FileExplorerRowComponent key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
}
