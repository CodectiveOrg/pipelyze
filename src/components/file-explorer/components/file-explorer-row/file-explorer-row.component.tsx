import type { ReactNode } from "react";

import clsx from "clsx";

import FileExplorerThumbnailComponent from "@/components/file-explorer/components/file-explorer-thumbnail/file-explorer-thumbnail.component";
import { FileExplorerItemType } from "@/components/file-explorer/type/file-explorer-item.type";
import IconButtonComponent from "@/components/icon-button/icon-button.component";
import TypographyComponent from "@/components/typography/typography.component";

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
    <div className={clsx(styles["file-explorer-row"], "body2")}>
      <div className={clsx(styles.cell, styles.title)}>
        <FileExplorerThumbnailComponent extension={item.extension} />
        {item.title}
      </div>
      <div className={styles.cell}>{formatFileSize(item.size)}</div>
      <div className={styles.cell}>{item.extension}</div>
      <div className={clsx(styles.cell, styles.datetime)}>
        <div>{dateFormatter.format(item.modifiedAt)}</div>
        <TypographyComponent variant="caption" color="text-secondary">
          {hourMinuteFormatter.format(item.modifiedAt)}
        </TypographyComponent>
      </div>
      <div className={styles.cell}>
        <IconButtonComponent name="star-line" size="small" color="action" />
        <IconButtonComponent name="more-2-line" size="small" color="action" />
      </div>
    </div>
  );
}
