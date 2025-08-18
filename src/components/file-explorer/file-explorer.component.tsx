import type { ReactNode } from "react";

import FileExplorerHeaderComponent from "@/components/file-explorer/components/file-explorer-header/file-explorer-header.component";
import FileExplorerRowComponent from "@/components/file-explorer/components/file-explorer-row/file-explorer-row.component";
import FileExplorerUploadFileComponent from "@/components/file-explorer/components/file-explorer-upload-file/file-explorer-upload-file.component";
import { FileExplorerItemType } from "@/components/file-explorer/type/file-explorer-item.type";

import styles from "./file-explorer.module.css";

type Props = {
  items: FileExplorerItemType[];
};

export default function FileExplorerComponent({ items }: Props): ReactNode {
  return (
    <div className={styles["file-explorer"]}>
      <FileExplorerUploadFileComponent />
      <div className={styles.table}>
        <FileExplorerHeaderComponent />
        {items.map((item) => (
          <FileExplorerRowComponent key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
}
