import type { ReactNode } from "react";

import FileExplorerThumbnailComponent from "@/components/file-explorer/components/file-explorer-thumbnail/file-explorer-thumbnail.component";
import { FileExplorerItemType } from "@/components/file-explorer/type/file-explorer-item.type";
import IconButtonComponent from "@/components/icon-button/icon-button.component";

import {
  dateFormatter,
  formatFileSize,
  hourMinuteFormatter,
} from "@/utils/format.utils";

import styles from "./file-explorer-row.module.css";

type Props = {
  item: FileExplorerItemType;
};

export default function FileExplorerRowComponent({ item }: Props): ReactNode {
  return (
    <div className={styles["file-explorer-row"]}>
      <div>
        <FileExplorerThumbnailComponent extension={item.extension} />
        {item.title}
      </div>
      <div>{formatFileSize(item.size)}</div>
      <div>{item.extension}</div>
      <div>
        <div>{dateFormatter.format(item.modifiedAt)}</div>
        <div className={styles.time}>
          {hourMinuteFormatter.format(item.modifiedAt)}
        </div>
      </div>
      <div>
        <IconButtonComponent name="star-line" size="small" color="action" />
        <IconButtonComponent name="more-2-line" size="small" color="action" />
      </div>
    </div>
  );
}
