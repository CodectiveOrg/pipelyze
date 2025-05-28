// import clsx from "clsx";
import clsx from "clsx";

import { ReactElement } from "react";

import { ColorType } from "@/types/color.type";

import styles from "./linear-progress.module.css";

type ProgressProps = {
  color?: ColorType;
  determinate: boolean;
  size: number;
  value: number;
};

export default function LinearProgressComponent({
  color = "primary",
  determinate,
  value,
}: ProgressProps): ReactElement {
  return (
    <div className={styles["linear-progress"]}>
      {determinate ? (
        <span className={styles["progress-line"]}>
          <span
            className={clsx(styles["inner-span"], styles[color])}
            style={{
              transform: "translateX(" + (value - 100) + "%)",
            }}
          ></span>
        </span>
      ) : (
        <span className={styles["progress-line"]}>
          <span
            className={styles["first-span"]}
            style={{ backgroundColor: color }}
          ></span>
          <span
            className={styles["second-span"]}
            style={{ backgroundColor: color }}
          ></span>
        </span>
      )}
    </div>
  );
}
