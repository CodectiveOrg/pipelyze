import { ComponentProps, ReactElement } from "react";

import clsx from "clsx";

import IconComponent from "@/components/icon/icon.component";

import TypographyComponent from "../typography/typography.component";

import styles from "./text-field.module.css";

type Props = Omit<ComponentProps<"input">, "size"> & {
  label?: string;
  size?: "normal" | "small";
  error?: boolean;
  errorText?: string;
  helper?: boolean;
  helperText?: string;
  startIcon?: ReactElement;
  endIcon?: ReactElement;
};

export default function TextFieldComponent({
  label,
  size = "normal",
  error,
  errorText,
  helper,
  helperText,
  ...otherProps
}: Props): ReactElement {
  const hasPlaceholder = !!otherProps.placeholder;

  const isDisabled = otherProps.disabled;

  return (
    <div className={clsx(styles.wrapper)}>
      <div className={clsx(styles["outlined-input"])}>
        <TypographyComponent
          variant="body1"
          className={clsx(
            styles.label,
            hasPlaceholder && styles["label-active"],
            error && styles["label-error"],
          )}
        >
          {label}
        </TypographyComponent>

        <input
          placeholder=" "
          className={clsx(styles.input, styles[size])}
          {...otherProps}
        />

        <fieldset
          className={clsx(styles.fieldset, isDisabled && styles.disabled)}
        >
          <legend className={styles.legend}>
            <span></span>
          </legend>
        </fieldset>
      </div>

      {error ? (
        <TypographyComponent
          variant="caption"
          color="error"
          className={clsx(styles["input-message"])}
        >
          {errorText}
        </TypographyComponent>
      ) : (
        helper && (
          <TypographyComponent
            variant="body1"
            color="inherit"
            className={clsx(styles["input-message"], styles["helper-text"])}
          >
            <IconComponent
              name="information-line"
              color="info"
              className={styles["helper-icon"]}
            />

            {helperText}
          </TypographyComponent>
        )
      )}
    </div>
  );
}
