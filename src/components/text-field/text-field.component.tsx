"use client";

import { ComponentProps, ReactElement, useState } from "react";

import clsx from "clsx";

import styles from "./text-field.module.css";

type Props = Omit<ComponentProps<"input">, "size"> & {
  label: string;
  size?: "normal" | "small";
};

export default function TextFieldComponent({
  label,
  size = "normal",
  ...otherProps
}: Props): ReactElement {
  const [isActive, setIsActive] = useState<boolean>(() => {
    return otherProps.defaultValue !== "";
  });

  const handleFocus = () => setIsActive(true);
  const handleBlur = () => setIsActive(false);

  return (
    <div className={clsx(styles.wrapper)}>
      <div className={clsx(styles["outlined-input"])}>
        <label
          className={clsx(styles.label, isActive && styles["label-focus"])}
        >
          {label}
        </label>

        <input
          className={clsx(styles.input, styles[size])}
          onFocus={handleFocus}
          onBlur={handleBlur}
          {...otherProps}
        />

        <fieldset
          className={clsx(
            styles.fieldset,
            isActive && styles["fieldset-focus"],
          )}
        >
          <legend className={styles.legend}>
            <span></span>
          </legend>
        </fieldset>
      </div>
    </div>
  );
}
