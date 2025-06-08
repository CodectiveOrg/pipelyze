import { ComponentProps, ReactElement, ReactNode, useId } from "react";

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
  const fallbackId = useId();
  const id = otherProps.id || fallbackId;

  return (
    <div
      className={clsx(
        styles["text-field"],
        styles[size],
        error && styles.error,
      )}
    >
      <div className={styles["input-box"]}>
        <label htmlFor={id}>{label}</label>
        <fieldset>
          <legend>
            <span>{label}</span>
          </legend>

          {startAdornment && (
            <div className={clsx(styles.adornment, styles.start)}>
              {startAdornment}
            </div>
          )}

          <input {...otherProps} id={id} />

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
