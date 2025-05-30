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
  label?: string;
};

export default function RadioComponent({
  color,
  size = "normal",
  className,
  disabled,
  checked,
  label
}: Props): ReactElement {

  type pulse = {x:number,y:number,id:number}
  
  const [pulse, setPulse] = useState<pulse[]>([]);

  const handleClick = (e: React.MouseEvent<HTMLSpanElement>) => {
    const locationItem = e.currentTarget.getBoundingClientRect()

    const x = locationItem.width / 2;
    const y = locationItem.height / 2;

    let id=Date.now()
    const newPulse:pulse = {x,y,id}

    setPulse((prev)=>[...prev, newPulse])

    setTimeout(() => {
      setPulse((prev)=>prev.filter((prevPulse)=>prevPulse.id !== id))
    }, 600);
  }

  return (
    <div className={clsx(styles.radioWrapper, disabled && styles.disabled)}>
      <label htmlFor="radio">{label}</label>

      <div className={styles.radioContainer}>
        {pulse.map((pulse) => (
          <span
            key={pulse.id}
            className={clsx(styles.pulse)}
        ></span>
         ))}

        <input
          type="radio"
          className={clsx(
            styles.radio,
            className,
            styles[color],
            styles[size],
          )}
          checked={checked}
          disabled={disabled}
          onClick={handleClick}
        />
      </div>

    </div>
  );
}
