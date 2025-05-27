import { ReactElement } from "react";

import styles from "./linear-progress.module.css";

export default function LinearProgressComponent(): ReactElement {
  return (
    <div className={styles["linear-progress"]}>
      <span className={styles["progress-line"]} role="progressbar">
        <span className={styles["first-span"]}></span>
        <span className={styles["second-span"]}></span>
      </span>
    </div>
  );
}
