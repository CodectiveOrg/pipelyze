import { ComponentProps, MouseEvent, ReactElement } from "react";

import clsx from "clsx";

import IconComponent from "@/components/icon/icon.component";

import { ColorType } from "@/types/color.type";

import styles from "./icon-button.module.css";

type Props = ComponentProps<"button"> & {
  children?: ReactElement<typeof IconComponent>;
  name: string;
  color?: ColorType | undefined;
  disabled?: boolean;
  onClick?: (e: MouseEvent) => void;
};

export default function IconButtonComponent({
  color = "primary",
  name,
  disabled = false,
  onClick,
  className,
}: Props): ReactElement {
  return (
    <button
      disabled={disabled}
      className={clsx(styles["icon-button"], styles[color], className)}
      onClick={onClick}
    >
      <IconComponent name={name} />
    </button>
  );
}
