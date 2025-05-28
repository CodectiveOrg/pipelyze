"use client";

import clsx from "clsx";

import { useState } from "react";

import { Color, Size } from "@/types/radioButton.type";

import styles from "./radio.module.css";

type props = {
  size: Size;
  color: Color;
};

export default function RadioComponent({ size, color }: props): ReactElement {
  const [isActive, setIsActive] = useState(false);

  return (
    <span>
      <input
        type="radio"
        className={clsx(size, color, isActive && styles.Active, styles.radio)}
      />
    </span>
  );
}
