import type { ReactNode } from "react";

import CheckboxComponent from "@/components/checkbox/checkbox.component";
import IconButtonComponent from "@/components/icon-button/icon-button.component";

import FolderIcon from "../_components/folder.icon";
import { formatDateToYMD } from "../_utils/formatDateToYMD";
import { formatTimeToHMA } from "../_utils/formatTimeToHMA";
import data from "../data.json";

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
            <div>{size}</div>
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
                color="primary"
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
