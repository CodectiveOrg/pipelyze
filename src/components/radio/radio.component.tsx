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
  const [ripples, setRipples] = useState<number[]>([]);

  const activePulse = () => {
    const id = Date.now();

    setRipples((prev) => [...prev, id]);

    setTimeout(() => {
      setRipples((prev) => prev.filter((prevPulse) => prevPulse !== id));
    }, 600);
  };

  return (
    <label className={clsx(styles.radio, styles[size], color, className)}>
      <div className={styles.control}>
        {ripples.map((pulse) => (
          <span key={pulse} className={clsx(styles.pulse)}></span>
        ))}
        <input type="radio" onClick={activePulse} {...otherProps} />
      </div>
      <span>{label}</span>
    </label>
  );
}
