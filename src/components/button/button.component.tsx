import clsx from "clsx";

import { ComponentProps, ReactElement } from "react";

import styles from "./button.module.css";

type ButtonProps = {
  variant?: "contained" | "outlined" | "text";
  disabled?: boolean;
  href?: string;
  onClick?: () => void;
  color?: "primary" | "inherit" | "info" | "success" | "warning" | "error";
  size?: "small" | "medium" | "large";
  startIcon?: React.ReactNode;
  endIcon?: React.ReactNode;
};

type Props = ComponentProps<"button"> & ButtonProps;

export default function ButtonComponent({
  variant = "contained",
  disabled = false,
  color = "primary",
  size = "medium",
  onClick,
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
      onClick={disabled ? undefined : onClick}
      {...rest}
    >
      {/*<IconComponent name={startIcon} />*/}
      {children}
      {/*<IconComponent name={endIcon} />*/}
    </button>
  );
}