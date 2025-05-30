"use client";

import { ReactElement, useState } from "react";

import clsx from "clsx";

import styles from "./radio.module.css";

export type Size = "normal" | "small";

export type Color =
  | "primary"
  | "secondary"
  | "info"
  | "success"
  | "warning"
  | "error"
  | "Disabled";

type Props = {
  color?: Color;
  size?: Size;
  checked?: boolean;
  disabled?: boolean;
  className?: string;
};

export default function RadioComponent({
  color,
  size = "normal",
  className,
  disabled,
  checked,
}: Props): ReactElement {
  
  const [pulse, setPulse] = useState([]);

  const handleClick = (e) => {
    const locationItem = e.currentTarget.getBoundingClientRect()

    const x = locationItem.width / 2;
    const y = locationItem.height / 2;

    const newPulse = {x,y}
  }

  return (
    <span className={clsx(styles.radioWrapper, disabled && styles.disabled)}>
      <input
        type="radio"
        className={clsx(
          styles.radio,
          className,
          styles[color],
          styles[size],
          isActive && styles.Active,
        )}
        checked={checked}
        disabled={disabled}
        onMouseDown={handleCick}
      />
    </span>
  );
}
