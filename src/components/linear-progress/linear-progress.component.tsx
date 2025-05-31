import clsx from "clsx";

import { ReactElement } from "react";

import { ColorType } from "@/types/color.type";

import styles from "./linear-progress.module.css";

type LinearProgressProps = {
  color?: ColorType;
  determinate: boolean;
  value?: number;
};

export default function LinearProgressComponent({
  color = "primary",
  determinate,
  value = 0,
}: LinearProgressProps): ReactElement {
  return (
    <div className={clsx(styles["linear-progress"], styles[color])}>
      {determinate ? (
        <span className={styles["determinate-progress-line"]}>
          <span
            className={styles["filled"]}
            style={{
              transform: `translateX(${value - 100}%)`,
            }}
          ></span>
        </span>
      ) : (
        <span className={styles["indeterminate-progress-line"]}></span>
      )}
    </div>
  );
}
