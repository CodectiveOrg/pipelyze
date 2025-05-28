import clsx from "clsx";

import { ComponentProps, ReactElement } from "react";

import IconComponent from "@/components/icon/icon.component";

import { ColorType } from "@/types/color.type";

import styles from "./icon-button.module.css";

type IconProps = {
  children?: ReactElement<typeof IconComponent>;
  name: string;
  color?: ColorType | undefined;
};

type Props = ComponentProps<"button"> & IconProps;

export default function IconButtonComponent({
  color = "primary",
  name,
  disabled,
}: Props): ReactElement {
  return (
    <button
      className={clsx(
        styles["icon-button"],
        disabled ? styles.disabled : styles[color],
      )}
    >
      <IconComponent name={name} />
    </button>
  );
}
