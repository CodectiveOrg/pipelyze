import type { ReactNode } from "react";

import CheckboxComponent from "@/components/checkbox/checkbox.component";
import { GetFileExplorerDto } from "@/components/file-explorer/dto/get-file-explorer-dto";
import FileIcon from "@/components/file-explorer/icons/file/file.icon";
import FolderIcon from "@/components/file-explorer/icons/folder/folder.icon";
import formatDateToYMD from "@/components/file-explorer/utils/date-to-YMD.util";
import formatFileSize from "@/components/file-explorer/utils/file-size.util";
import formatTimeToHMA from "@/components/file-explorer/utils/time-to-HMA.util";
import IconButtonComponent from "@/components/icon-button/icon-button.component";

import styles from "./row.module.css";

type Props = {
  item: GetFileExplorerDto;
};

export default function RowComponent({ item }: Props): ReactNode {
  return (
    <div className={styles.row}>
      <CheckboxComponent />
      <div>
        {item.type === "Folder" ? <FolderIcon /> : <FileIcon />}
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
