import { CSSProperties, ReactElement } from "react";

import clsx from "clsx";

import { ColorType } from "@/types/color.type";

import styles from "./linear-progress.module.css";

type Props = {
  color?: ColorType;
  variant: "determinate" | "indeterminate";
  value?: number;
};

export default function LinearProgressComponent({
  color = "inherit",
  variant,
  value = 0,
}: Props): ReactElement {
  return (
    <div
      className={clsx(
        styles["linear-progress"],
        styles[color],
        variant === "determinate" ? styles.determinate : styles.indeterminate,
      )}
      style={{ "--progress-value": value - 100 + "%" } as CSSProperties}
    >
      {variant === "determinate" ? (
        <span className={styles.line}>
          <span className={styles.filled}></span>
        </span>
      ) : (
        <span className={styles.line}></span>
      )}
    </div>
  );
}
