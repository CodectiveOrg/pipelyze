"use client";

import {
  ComponentProps,
  ReactElement,
  useEffect,
  useRef,
  useState,
} from "react";

import clsx from "clsx";

import styles from "./text-field.module.css";

type Props = Omit<ComponentProps<"input">, "size" | "value" | "onChange"> & {
  label: string;
  size?: "normal" | "small";
};

export default function TextFieldComponent({
  label,
  size = "normal",
  ...otherProps
}: Props): ReactElement {
  const inputRef = useRef<HTMLInputElement>(null);
  const [isActive, setIsActive] = useState(false);

  const checkInput = () => {
    const input = inputRef.current;
    if (!input) return;

    const hasValue = input.value.trim() !== "";
    const hasPlaceholder = input.placeholder.trim() !== "";
    setIsActive(hasValue || hasPlaceholder);
  };

  useEffect(() => {
    checkInput();
  }, []);

  const handleFocus = () => setIsActive(true);
  const handleBlur = () => checkInput();

  return (
    <div className={clsx(styles.wrapper)}>
      <div className={clsx(styles["outlined-input"])}>
        <label
          className={clsx(styles.label, isActive && styles["label-focus"])}
        >
          {label}
        </label>

        <input
          ref={inputRef}
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
