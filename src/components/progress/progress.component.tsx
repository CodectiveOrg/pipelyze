"use client";

import clsx from "clsx";

import { ReactElement, useEffect } from "react";

import { ColorType } from "@/types/color.type";

import styles from "./progress.module.css";

type ProgressProps = {
  color?: ColorType;
  determinate: boolean;
  size: number;
  value?: number;
};

export default function ProgressComponent({
  color = "primary",
  size,
  determinate,
  value = 0,
}: ProgressProps): ReactElement {
  const initiatedValue: () => void = () => {
    document.documentElement.style.setProperty(
      "--filled-circle",
      100 - value + "px",
    );
    document.documentElement.style.setProperty("--size", size + "rem");
  };

  useEffect(() => {
    initiatedValue();
  }, []);

  return (
    <div className={clsx(styles.progress, styles[color])}>
      {determinate ? (
        <span className={styles["determinant-progress"]}>
          <svg viewBox="22 22 44 44">
            <circle
              cx="44"
              cy="44"
              r={100 / 2 / Math.PI}
              fill="none"
              stroke-width="3.6"
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
              stroke-width="3.6"
            ></circle>
          </svg>
        </span>
      )}
    </div>
  );
}
