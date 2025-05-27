import { ReactElement } from "react";

import styles from "./linear-progress.module.css";

export default function LinearProgressComponent(prop: {
  color: string;
  determinate: boolean;
}): ReactElement {
  return (
    <div className={styles["linear-progress"]}>
      {prop.determinate ? (
        <span className={styles["progress-line"]} role="progressbar">
          <span
            className={styles["inner-span"]}
            style={{ backgroundColor: prop.color }}
          ></span>
        </span>
      ) : (
        <span className={styles["progress-line"]} role="progressbar">
          <span
            className={styles["first-span"]}
            style={{ backgroundColor: prop.color }}
          ></span>
          <span
            className={styles["second-span"]}
            style={{ backgroundColor: prop.color }}
          ></span>
        </span>
      )}
    </div>
  );
}
