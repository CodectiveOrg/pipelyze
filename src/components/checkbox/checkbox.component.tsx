"use client";

import { ComponentProps, ReactElement } from "react";

import clsx from "clsx";

import TypographyComponent from "@/components/typography/typography.component";

import { ColorType } from "@/types/color.type";

import IconComponent from "../icon/icon.component";

import styles from "./checkbox.module.css";

type Props = Omit<ComponentProps<"input">, "size"> & {
  color?: ColorType;
  size?: "small" | "normal";
  label?: string;
};

export default function CheckboxComponent({
  color = "primary",
  size = "normal",
  label,
  className,
  ...otherProps
}: Props): ReactElement {
  return (
    <label className={clsx(styles.checkbox, styles[size], color, className)}>
      <span className={styles.control}>
        <input
          type="checkbox"
          className={clsx(styles.disabled)}
          {...otherProps}
        />
        <IconComponent name="check-line" color="primary" className={styles["check-icon"]} style={{color:"#ffff"}} />
      </span>
      <TypographyComponent variant="body2">{label}</TypographyComponent>
    </label>
  );
}
