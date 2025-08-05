import { ReactElement } from "react";

import { Icon, IconProps } from "@iconify/react";

import clsx from "clsx";

import { useIconHook } from "@/components/icon/hooks/use-icon.hook";
import { IconCollection } from "@/components/icon/types/icon-collection.type";

import { ColorType } from "@/types/color.type";

import styles from "./icon.module.css";

type Props = Omit<IconProps, "icon" | "ssr" | "color"> & {
  collection?: IconCollection;
  name: string;
  color?: ColorType;
};

export default function IconComponent({
  collection = "mingcute",
  name,
  color = "inherit",
  inline = true,
  className,
  ...otherProps
}: Props): ReactElement {
  const iconData = useIconHook(collection, name);

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
