import { ComponentProps, ReactElement } from "react";

import clsx from "clsx";

import IconComponent from "@/components/icon/icon.component";

import { ColorType } from "@/types/color.type";

import styles from "./icon-button.module.css";

type Props = ComponentProps<"button"> & {
  children?: ReactElement<typeof IconComponent>;
  name: string;
  color?: ColorType;
  size?: "small" | "medium" | "large";
  disabled?: boolean;
};

export default function IconButtonComponent({
  name,
  color = "inherit",
  size = "medium",
  disabled = false,
  className,
  ...otherProps
}: Props): ReactElement {
  return (
    <button
      disabled={disabled}
      className={clsx(styles["icon-button"], color, styles[size], className)}
      {...otherProps}
    >
      <IconComponent name={name} color={color} />
    </button>
  );
}
