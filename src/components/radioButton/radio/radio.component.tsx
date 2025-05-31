"use client";

import { ReactElement, useContext, useState } from "react";

import clsx from "clsx";

import { MyContext } from "../radioGroupe/radioGroup.component";

import styles from "./radio.module.css";

export type Placement = "start" | "end" | "top" | "bottom";

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
  disabled?: boolean;
  className?: string;
  label?: string;
  placement?: Placement;
  value: string;
};

export default function RadioComponent({
  color = "primary",
  size = "normal",
  className,
  disabled,
  label,
  placement = "start",
  value: radioValue,
}: Props): ReactElement {
  const context = useContext(MyContext);
  const [childValue, setChildValue] = useState<string>('');

  const isChecked = context
    ? context.value === radioValue
    : childValue === radioValue;

  const handleChange = () => {
    if (context) {
      context.onChange(radioValue);
    } else {
      setChildValue(radioValue);
    }
  };

  type Pulse = { x: number; y: number; id: number };
  const [pulse, setPulse] = useState<Pulse[]>([]);

  const activePulse = (e: React.MouseEvent<HTMLInputElement>) => {
    const locationItem = e.currentTarget;
    const x = locationItem.width / 2;
    const y = locationItem.height / 2;
    const id = Date.now();
    const newPulse: Pulse = { x, y, id };
    setPulse((prev) => [...prev, newPulse]);
    setTimeout(() => {
      setPulse((prev) => prev.filter((prevPulse) => prevPulse.id !== id));
    }, 600);
  };

  return (
    <div
      className={clsx(
        styles.radio,
        disabled && styles.disabledLabel,
        styles[placement],
      )}
    >
      <label htmlFor="input">{label}</label>

      <div className={styles.radioContainer}>
        {pulse.map((pulse) => (
          <span key={pulse.id} className={clsx(styles.pulse)}></span>
        ))}

        <input
          type="radio"
          name="radioBtn"
          value={label}
          checked={isChecked}
          onChange={handleChange}
          className={clsx(
            styles.radioBtn,
            className,
            styles[color],
            styles[size],
          )}
          disabled={disabled}
          onMouseDown={activePulse}
        />
      </div>
    </div>
  );
}
