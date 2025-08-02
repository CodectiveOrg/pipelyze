import type { ReactNode } from "react";

import CheckboxComponent from "@/components/checkbox/checkbox.component";
import FolderIcon from "@/components/file-explorer/components/icons/folder.icon";
import { GetFileExplorerDto } from "@/components/file-explorer/dto/get-file-explorer-dto";
import formatDateToYMD from "@/components/file-explorer/utils/date-to-YMD.util";
import formatFileSize from "@/components/file-explorer/utils/file-size.util";
import formatTimeToHMA from "@/components/file-explorer/utils/time-to-HMA.util";
import IconButtonComponent from "@/components/icon-button/icon-button.component";

import styles from "./row.module.css";

export default function RowComponent({
  data,
}: {
  data: GetFileExplorerDto;
}): ReactNode {
  const { id, name, size, type, modified } = data;

  return (
    <div key={id} className={styles.row}>
      <div className={styles["first-cell"]}>
        <CheckboxComponent></CheckboxComponent>
        {type === "Folder" ? <FolderIcon /> : null}
        {name}
      </div>
      <div>{formatFileSize(size)}</div>
      <div>{type}</div>
      <div>
        <div>{formatDateToYMD(modified)}</div>
        <div className={styles.time}>{formatTimeToHMA(modified)}</div>
      </div>
      <div className={styles["last-cell"]}>
        Shared
        <IconButtonComponent name="star-line" size="small" color="action" />
        <IconButtonComponent name="more-2-line" size="small" color="action" />
      </div>
    </div>
  );
}
