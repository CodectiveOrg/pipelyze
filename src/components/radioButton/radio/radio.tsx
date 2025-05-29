'use client'

import clsx from "clsx";
import { ReactElement, useState } from "react";
import styles from './radio.module.css'

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
  color ?: Color;
  size ?: Size;
  checked ?: boolean;
  disabled ?: boolean;
  className ?: string;
}

export default function RadioComponent({ color, size='normal' , className, disabled, checked}: Props): ReactElement {

  const [isActive,setIsActive] = useState(false)

  const handleCick = () => {
    setTimeout(() => {
      setIsActive(true);
    }, 100);
    setIsActive(false);
  }

  return (
    <span className={clsx(styles.radioWrapper, disabled && styles.disabled, isActive && styles.Active)}>
      <input type="radio" 
      className={clsx(styles.radio, className, styles[color], styles[size])} 
      checked={checked}
      disabled={disabled}
      onMouseDown={handleCick}
      />
    </span>
  );
}



