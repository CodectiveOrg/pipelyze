import { CSSProperties, ReactElement } from "react";

import clsx from "clsx";

import { ColorType } from "@/types/color.type";

import styles from "./linear-progress.module.css";

type VariantType = "determinate" | "indeterminate";

type Props = {
  color?: ColorType;
  variant: VariantType;
  value?: number;
};

export default function LinearProgressComponent({
  color = "primary",
  variant,
  value = 0,
}: Props): ReactElement {
  return (
    <div
      className={clsx(styles["linear-progress"], styles[color])}
      style={{ "--progress-value": value - 100 + "%" } as CSSProperties}
    >
      {variant === "determinate" ? (
        <span className={styles["determinate-progress-line"]}>
          <span className={styles["filled"]}></span>
        </span>
      ) : (
        <span className={styles["indeterminate-progress-line"]}></span>
      )}
    </div>
  );
}
