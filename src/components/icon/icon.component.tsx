import clsx from "clsx";

import { Icon } from "@iconify/react";
import { IconProps } from "@iconify/react";
import { getIconData } from "@iconify/utils";

import { icons } from "@iconify-json/codicon";

import { ColorType } from "@/types/color.type";

import styles from "./icon.module.css";

type Props = Omit<IconProps, "icon" | "ssr" | "color"> & {
  color?: ColorType;
  name: string;
};

export default function IconComponent({
  name,
  color = "inherit",
  inline = true,
  ...otherProps
}: Props) {
  const iconData = getIconData(icons, name);

  if (!iconData) {
    return <svg></svg>;
  }

  return (
    <Icon
      ssr
      icon={iconData}
      className={clsx(styles.icon, styles[color])}
      color={color}
      inline={inline}
      {...otherProps}
    />
  );
}
