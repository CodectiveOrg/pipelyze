import clsx from "clsx";

import { PropsWithChildren } from "react";

import { ColorType } from "@/types/color.type";

import styles from "./avatar.module.css";

type AvatarProps = PropsWithChildren<{
  variant?: "circular" | "rounded" | "square";

  fontSize?: "24" | "32" | "48" | "56" | "64" | "80" | "128" | "40";
  color?: ColorType;
  width?: string;
  height?: string;
}>;
const Avatar: React.FC<AvatarProps> = ({
  variant,
  color,
  fontSize = "40",
  children,
}) => {
  const classNames = clsx(color && styles[color], variant && styles[variant]);

  return (
    <div
      className={classNames}
      style={{ width: `${fontSize}px`, height: `${fontSize}px` }}
    >
      {children}
    </div>
  );
};
export default Avatar;
