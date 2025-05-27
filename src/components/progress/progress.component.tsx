import { ReactElement } from "react";

import styles from "./progress.module.css";

export default function ProgressComponent(prop: {
  color: string;
  size: number;
}): ReactElement {
  return (
    <div className={styles.progress}>
      <span
        style={{
          color: prop.color,
          inlineSize: `${prop.size}rem`,
          blockSize: `${prop.size}rem`,
        }}
        role="progressbar"
      >
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
