import React, { ReactElement } from "react";

import clsx from "clsx";

import { ColorType } from "@/types/color.type";

import styles from "./checkbox.module.css";

type Props = {
  basic?: "checked" | "unchecked";
  size?: "normal" | "small";
  color?: ColorType;
};

export default function CheckboxComponent({
  basic = "unchecked",
  size = "normal",
  color = "primary",
  ...otherProps
}: Props): ReactElement {
  return (
    <input
      type="checkbox"
      className={clsx(styles.checkbox, styles[size], styles[color])}
      defaultChecked={basic === "checked"}
      {...otherProps}
    />
  );
}
