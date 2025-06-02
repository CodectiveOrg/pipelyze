import { CSSProperties, ReactElement } from "react";

import clsx from "clsx";

import { ColorType } from "@/types/color.type";

import styles from "./circular-progress.module.css";

type Props = {
  color?: ColorType;
  variant: "determinate" | "indeterminate";
  size: number;
  value?: number;
};

export default function CircularProgressComponent({
  color = "inherit",
  size,
  variant,
  value = 0,
}: Props): ReactElement {
  return (
    <div
      className={clsx(
        styles.progress,
        styles[color],
        variant === "determinate" ? styles.determinate : styles.indeterminate,
      )}
      style={
        {
          "--filled-circle": 100 - value + "px",
          "--size": size + "rem",
        } as CSSProperties
      }
    >
      <span className={styles.rotor}>
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
    </div>
  );
}
