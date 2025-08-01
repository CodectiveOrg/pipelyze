import type { ReactNode } from "react";

import CheckboxComponent from "@/components/checkbox/checkbox.component";
import FolderIcon from "@/components/file-manager/components/icons/folder.icon";
import data from "@/components/file-manager/data.json";
import formatDateToYMD from "@/components/file-manager/utils/date-to-YMD.util";
import formatFileSize from "@/components/file-manager/utils/file-size.util";
import formatTimeToHMA from "@/components/file-manager/utils/time-to-HMA.util";
import IconButtonComponent from "@/components/icon-button/icon-button.component";

import styles from "./body.module.css";

export default function BodyComponent(): ReactNode {
  return (
    <div className={styles.body}>
      {data.map((item) => {
        const { id, name, size, type, modified } = item;

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
              <IconButtonComponent
                name="star-line"
                size="small"
                color="action"
              />
              <IconButtonComponent
                name="more-2-line"
                size="small"
                color="action"
              />
            </div>
          </div>
        );
      })}
    </div>
  );
}
