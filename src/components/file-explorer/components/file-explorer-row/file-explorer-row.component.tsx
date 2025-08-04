import type { ReactNode } from "react";

import { FileExplorerItemType } from "@/components/file-explorer/type/file-explorer-item.type";
import IconButtonComponent from "@/components/icon-button/icon-button.component";
import IconComponent from "@/components/icon/icon.component";

import { formatFileSize } from "@/utils/number.utils";
import { formatDateToYMD, formatTimeToHMA } from "@/utils/time.util";

import styles from "./file-explorer-row.module.css";

type Props = {
  item: FileExplorerItemType;
};

export default function FileExplorerRowComponent({ item }: Props): ReactNode {
  return (
    <div className={styles["file-explorer-row"]}>
      <div>
        <IconComponent
          name={item.type === "Folder" ? "folder-fill" : "file-fill"}
        />
        {item.name}
      </div>
      <div>{formatFileSize(item.size)}</div>
      <div>{item.type}</div>
      <div>
        <div>{formatDateToYMD(item.modified)}</div>
        <div className={styles.time}>{formatTimeToHMA(item.modified)}</div>
      </div>
      <div>Shared</div>
      <div>
        <IconButtonComponent name="star-line" size="small" color="action" />
        <IconButtonComponent name="more-2-line" size="small" color="action" />
      </div>
    </div>
  );
}
