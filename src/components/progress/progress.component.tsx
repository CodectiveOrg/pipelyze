import { ReactElement } from "react";

import styles from "./progress.module.css";

export default function ProgressComponent(): ReactElement {
  return (
    <div className={styles.progress}>
      <span role="progressbar">
        <svg viewBox="22 22 44 44">
          <circle
            cx="44"
            cy="44"
            r="20.2"
            fill="none"
            stroke-width="3.6"
          ></circle>
        </svg>
      </span>
    </div>
  );
}
