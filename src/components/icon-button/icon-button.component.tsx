import { ComponentProps, ReactElement } from "react";

import clsx from "clsx";

import IconComponent from "@/components/icon/icon.component";

import { ColorType } from "@/types/color.type";

import styles from "./icon-button.module.css";

type Props = ComponentProps<"button"> & {
  children?: ReactElement<typeof IconComponent>;
  name: string;
  color?: ColorType | undefined;
  disabled?: boolean;
};

export default function IconButtonComponent({
  color = "primary",
  name,
  disabled = false,
}: Props): ReactElement {
  return (
    <button
      disabled={disabled}
      className={clsx(styles["icon-button"], styles[color])}
    >
      <IconComponent name={name} />
    </button>
  );
}
