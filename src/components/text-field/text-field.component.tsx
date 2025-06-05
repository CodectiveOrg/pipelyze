import { ComponentProps, ReactElement } from "react";

import clsx from "clsx";

import styles from "./text-field.module.css";

type Props = Omit<ComponentProps<"input">, "size"> & {
  label?: string;
  size?: "normal" | "small";
  // error?: boolean;
  // helper?: boolean
};

export default function TextFieldComponent({
  label,
  size = "normal",
  // error,
  // helper,
  ...otherProps
}: Props): ReactElement {
  return (
    <div className={clsx(styles.wrapper)}>
      <div className={clsx(styles["outlined-input"])}>
        <input
          placeholder=" "
          className={clsx(styles.input, styles[size])}
          {...otherProps}
        />
        <label className={clsx(styles.label)}>{label}</label>

        <fieldset className={clsx(styles.fieldset)}>
          <legend className={styles.legend}>
            <span></span>
          </legend>
        </fieldset>
      </div>
      {/* {(error && <span className={clsx(styles["span-error"])}>{error}</span>) || (helper && <span>{helper}</span>)}  */}
    </div>
  );
}
