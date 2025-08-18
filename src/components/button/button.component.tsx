import React, { ReactNode } from "react";

import clsx from "clsx";

import IconComponent from "@/components/icon/icon.component";

import { ColorType } from "@/types/color.type";

import styles from "./button.module.css";

type CommonProps = {
  variant?: "contained" | "outlined" | "text";
  color?: ColorType;
  size?: "small" | "medium" | "large";
  disabled?: boolean;
  startIcon?: string;
  endIcon?: string;
};

type ButtonProps = React.ComponentPropsWithoutRef<"button"> &
  CommonProps & {
    href?: undefined;
  };

type AnchorProps = React.ComponentPropsWithoutRef<"a"> &
  CommonProps & {
    href?: string;
  };

export default function ButtonComponent(
  props: ButtonProps | AnchorProps,
): ReactNode {
  const {
    variant = "contained",
    color = "primary",
    size = "medium",
    disabled = false,
    startIcon,
    endIcon,
    children,
    className,
    ...otherProps
  } = props;

  const classNames = clsx(
    styles.button,
    styles[variant],
    styles[size],
    styles[color],
    className,
  );

  const content = (
    <>
      {startIcon && (
        <IconComponent name={startIcon} className={styles["start-icon"]} />
      )}
      {children}
      {endIcon && (
        <IconComponent name={endIcon} className={styles["end-icon"]} />
      )}
    </>
  );

  if ("href" in otherProps) {
    return (
      <a
        className={classNames}
        aria-disabled={disabled}
        {...(otherProps as AnchorProps)}
      >
        {content}
      </a>
    );
  }

  return (
    <button
      className={classNames}
      disabled={disabled}
      {...(otherProps as ButtonProps)}
    >
      {content}
    </button>
  );
}
