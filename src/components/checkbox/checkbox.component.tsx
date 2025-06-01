import React, { ComponentProps } from "react";

import clsx from "clsx";

import { ColorType } from "@/types/color.type";

import styles from "./checkbox.module.css";

type CustomeProps = {
  basic?: "checked" | "unchecked";
  size?: "normal" | "small";
  color?: ColorType;
};

type Props = CustomeProps & ComponentProps<"input">;

export default function CheckboxComponent(props: Props) {
  const {
    basic = "unchecked",
    size = "normal",
    color = "primary",
    ...otherProps
  } = props;

  const classNames = clsx(styles.input, styles[size], styles[color]);

  return (
    <input
      type="checkbox"
      className={classNames}
      defaultChecked={basic === "checked"}
      {...otherProps}
    />
  );
}
