import { ComponentProps, ReactElement } from "react";

import clsx from "clsx";

import IconComponent from "@/components/icon/icon.component";

import { ColorType } from "@/types/color.type";

import styles from "./icon-button.module.css";

type Props = ComponentProps<"button"> & {
  children?: ReactElement<typeof IconComponent>;
  name: string;
  color?: ColorType;
  disabled?: boolean;
};

export default function IconButtonComponent({
  color = "inherit",
  name,
  disabled = false,
  className,
  ...otherProps
}: Props): ReactElement {
  return (
    <button
      disabled={disabled}
      className={clsx(styles["icon-button"], styles[color], className)}
      {...otherProps}
    >
      <IconComponent name={name} />
    </button>
  );
}
