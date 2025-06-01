import React from "react";

import clsx from "clsx";

import IconComponent from "@/components/icon/icon.component";

import { ColorType } from "@/types/color.type";

import styles from "./checkbox.module.css";

type Props = {
  basic?: "checked" | "unchecked";
  size?: "normal" | "small";
  customeIcon?: string;
  placement?: "top" | "right" | "bottom" | "left";
  colors?: ColorType;
  Indeterminate?: boolean;
};

export default function CheckboxComponent(props: Props) {
  const {
    basic = "unchecked",
    size = "normal",
    placement = "right",
    colors = "inherit",
    Indeterminate = false,
    customeIcon,
  } = props;

  const classNames = clsx(
    styles.input,
    styles[size],
    styles[placement],
    styles[colors],
  );


  if (customeIcon) {
    return (
      <IconComponent
        name={customeIcon}
        color={basic === "checked" ? "primary" : "inherit"}
      />
    );
  }

  return (
    <input
      type="checkbox"
      className={classNames}
      checked={basic === "checked"}
    />
  );
}
