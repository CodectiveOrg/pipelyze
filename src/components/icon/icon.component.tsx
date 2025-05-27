import clsx from "clsx";

import { icons } from "@iconify-json/mingcute";

import { Icon } from "@iconify/react";
import { IconProps } from "@iconify/react";
import { getIconData } from "@iconify/utils";

import { ColorType } from "@/types/color.type";

import styles from "./icon.module.css";

type Props = Omit<IconProps, "icon" | "ssr" | "color"> & {
  name: string;
  color?: ColorType;
};

export default function IconComponent({
  name,
  color = "inherit",
  inline = true,
  ...otherProps
}: Props) {
  const iconData = getIconData(icons, name);

  if (!iconData) {
    return (
      <svg height="1em" width="em" aria-hidden="true" viewBox="0 0 16 16"></svg>
    );
  }

  return (
    <Icon
      ssr
      icon={iconData}
      className={clsx(styles.icon, styles[color])}
      inline={inline}
      {...otherProps}
    />
  );
}
