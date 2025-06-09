import { ComponentProps, ReactElement, ReactNode, useId } from "react";

import clsx from "clsx";

import TypographyComponent from "../typography/typography.component";

import styles from "./text-field.module.css";

type Props = Omit<ComponentProps<"input">, "size"> & {
  label: string;
  size?: "small" | "normal";
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

  const placeholder = otherProps.placeholder || " ";

  const shouldFloat = !!(
    otherProps.value ||
    otherProps.defaultValue ||
    otherProps.placeholder
  );

  return (
    <div
      className={clsx(
        styles["text-field"],
        styles[size],
        shouldFloat && styles.float,
        error && styles.error,
      )}
    >
      <div className={styles["input-box"]}>
        <label htmlFor={id}>{label}</label>
        <fieldset>
          <legend>{label && <span>{label}</span>}</legend>
        </fieldset>
        <div className={styles.content}>
          {startAdornment && (
            <div className={clsx(styles.adornment, styles.start)}>
              {startAdornment}
            </div>
          )}

          <input {...otherProps} id={id} placeholder={placeholder} />

          {endAdornment && (
            <div className={clsx(styles.adornment, styles.end)}>
              {endAdornment}
            </div>
          )}
        </div>
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
