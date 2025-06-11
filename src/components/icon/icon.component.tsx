import { ReactElement } from "react";

import { Icon, IconProps } from "@iconify/react";
import { getIconData } from "@iconify/utils";

import { icons } from "@iconify-json/mingcute";

import clsx from "clsx";

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
  className,
  ...otherProps
}: Props): ReactElement {
  const iconData = getIconData(icons, name);

  if (!iconData) {
    console.error(`Icon "${name}" is missing.`);

    return (
      <svg
        width="1em"
        height="1em"
        aria-hidden="true"
        viewBox="0 0 24 24"
      ></svg>
    );
  }

  return (
    <Icon
      ssr
      icon={iconData}
      className={clsx(styles.icon, color, className)}
      inline={inline}
      {...otherProps}
    />
  );
}
