import clsx from "clsx";

import { CSSProperties, ReactElement } from "react";

import { ColorType } from "@/types/color.type";

import styles from "./circular-progress.module.css";

type ProgressProps = {
  color?: ColorType;
  determinate: boolean;
  size: number;
  value?: number;
};

export default function CircularProgressComponent({
  color = "primary",
  size,
  determinate,
  value = 0,
}: ProgressProps): ReactElement {
  return (
    <div
      className={clsx(styles.progress, styles[color])}
      style={
        {
          "--filled-circle": 100 - value + "px",
          "--size": size + "rem",
        } as CSSProperties
      }
    >
      {determinate ? (
        <span className={styles["determinant-progress"]}>
          <svg viewBox="22 22 44 44">
            <circle
              cx="44"
              cy="44"
              r={100 / 2 / Math.PI}
              fill="none"
              strokeWidth="3.6"
            ></circle>
          </svg>
        </span>
      ) : (
        <span className={styles["indeterminate-progress"]}>
          <svg viewBox="22 22 44 44">
            <circle
              cx="44"
              cy="44"
              r={100 / 2 / Math.PI}
              fill="none"
              strokeWidth="3.6"
            ></circle>
          </svg>
        </span>
      )}
    </div>
  );
}
