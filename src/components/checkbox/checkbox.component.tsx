"use client";

import { ComponentProps, ReactElement } from "react";

import clsx from "clsx";

import TypographyComponent from "@/components/typography/typography.component";

import { ColorType } from "@/types/color.type";

import styles from "./checkbox.module.css";

type Props = Omit<ComponentProps<"input">, "size"> & {
  color?: ColorType;
  size?: "normal" | "small";
  label?: string;
};

export default function CheckBoxComponent({
  color = "primary",
  size = "normal",
  label,
  className,
  ...otherProps
}: Props): ReactElement {
  const isDisabled = otherProps.disabled;

  return (
    <label className={clsx(styles.checkbox, styles[size], color, className)}>
      <div className={styles.control}>
        <input
          type="checkbox"
          className={clsx(isDisabled && styles.disabled)}
          {...otherProps}
        />
      </div>
      <TypographyComponent variant="body2" color="inherit">
        {label}
      </TypographyComponent>
    </label>
  );
}
