"use client";

import { ComponentProps, ReactElement, useState } from "react";

import clsx from "clsx";

import { ColorType } from "@/types/color.type";

import styles from "./radio.module.css";

export type Size = "normal" | "small";

type Props = Omit<ComponentProps<"input">, "size"> & {
  color?: ColorType;
  size?: Size;
  label?: string;
};

export default function RadioComponent({
  color = "primary",
  size = "normal",
  label,
  className,
  ...otherProps
}: Props): ReactElement {
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
    <div className={styles.radio}>
      <label htmlFor="input">{label}</label>

      <div className={styles.radioContainer}>
        {pulse.map((pulse) => (
          <span key={pulse.id} className={clsx(styles.pulse)}></span>
        ))}

        <input
          type="radio"
          className={clsx(
            styles.radioBtn,
            className,
            styles[color],
            styles[size],
          )}
          onMouseDown={activePulse}
          {...otherProps}
        />
      </div>
    </div>
  );
}
