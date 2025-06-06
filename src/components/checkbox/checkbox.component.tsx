"use client";

import { ComponentProps, ReactElement, useState } from "react";

import clsx from "clsx";

import RippleComponent from "@/components/checkbox/components/ripple/ripple.component";
import TypographyComponent from "@/components/typography/typography.component";

import { ColorType } from "@/types/color.type";

import styles from "./checkbox.module.css";

type Props = Omit<ComponentProps<"input">, "size"> & {
  color?: ColorType;
  size?: "normal" | "small";
  label?: string;
};

export default function CheckBoxComponent({
  color = "primary",
  size = "normal",
  label,
  className,
  ...otherProps
}: Props): ReactElement {
  const [ripples, setRipples] = useState<number[]>([]);

  const isDisabled = otherProps.disabled;

  const activeRipple = () => {
    const id = Date.now();

    setRipples((prev) => [...prev, id]);

    setTimeout(() => {
      setRipples((prev) => prev.filter((prevRipple) => prevRipple !== id));
    }, 550);
  };

  return (
    <label className={clsx(styles.checkbox, styles[size], color, className)}>
      <div className={styles.control}>
        {ripples.map((ripple) => (
          <RippleComponent key={ripple} />
        ))}
        <input
          type="checkbox"
          onClick={activeRipple}
          className={clsx(isDisabled && styles.disabled)}
          {...otherProps}
        />
        <RippleComponent className={styles["active-ripple"]} />
      </div>
      <TypographyComponent variant="body2" color="inherit">
        {label}
      </TypographyComponent>
    </label>
  );
}
