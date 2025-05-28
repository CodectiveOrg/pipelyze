import clsx from "clsx";

import { ComponentProps, ReactElement } from "react";

import IconComponent from "@/components/icon/icon.component";

import styles from "./button.module.css";

type ButtonProps = {
  variant?: "contained" | "outlined" | "text";
  disabled?: boolean;
  href?: string;
  color?: "inherit" | "primary" | "info" | "success" | "warning" | "error";
  size?: "small" | "medium" | "large";
  startIcon?: React.ReactNode;
  endIcon?: React.ReactNode;
};

type Props = ComponentProps<"button"> & ButtonProps;

export default function ButtonComponent({
  variant = "contained",
  disabled,
  color = "primary",
  size = "medium",
  startIcon,
  endIcon,
  children,
  ...rest
}: Props): ReactElement {
  return (
    <button
      className={clsx(
        styles.button,
        styles[variant],
        styles[size],
        disabled ? styles.disabled : styles[color],
      )}
      {...rest}
    >
      <IconComponent name={"startIcon"} />
      {children}
      <IconComponent name={"endIcon"} />
    </button>
  );
}