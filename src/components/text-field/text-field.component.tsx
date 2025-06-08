import { ComponentProps, ReactElement, ReactNode } from "react";

import clsx from "clsx";

import TypographyComponent from "../typography/typography.component";

import styles from "./text-field.module.css";

type Props = Omit<ComponentProps<"input">, "size"> & {
  label: string;
  size?: "normal" | "small";
  error?: boolean;
  helperText?: string;
  startAdornment?: ReactNode;
  endAdornment?: ReactNode;
};

export default function TextFieldComponent({
  label,
  size = "normal",
  error,
  helperText,
  startAdornment,
  endAdornment,
  ...otherProps
}: Props): ReactElement {
  return (
    <div
      className={clsx(
        styles["text-field"],
        styles[size],
        error && styles.error,
      )}
    >
      <div className={styles["input-box"]}>
        <TypographyComponent
          className={styles.label}
          variant="subtitle1"
          color="text-secondary"
        >
          {label}
        </TypographyComponent>
        <fieldset>
          <legend></legend>

          {startAdornment && (
            <div className={clsx(styles.adornment, styles.start)}>
              {startAdornment}
            </div>
          )}

          <input {...otherProps} />

          {endAdornment && (
            <div className={clsx(styles.adornment, styles.end)}>
              {endAdornment}
            </div>
          )}
        </fieldset>
      </div>
      {helperText && (
        <TypographyComponent
          className={styles["helper-text"]}
          variant="body1"
          color="inherit"
        >
          {helperText}
        </TypographyComponent>
      )}
    </div>
  );
}
