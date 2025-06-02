import { CSSProperties, ReactElement } from "react";

import Image from "next/image";

import clsx from "clsx";

import { useColorfulName } from "@/components/avatar/hooks/use-colorful-name";

import styles from "./avatar.module.css";

type Props = {
  variant?: "circular" | "rounded" | "square";
  size?: number;
} & (
  | {
      name: string;
      src?: never;
      alt?: never;
    }
  | {
      name?: never;
      src: string;
      alt: string;
    }
);

export default function AvatarComponent({
  variant = "circular",
  name,
  src,
  alt,
  size = 2.5,
}: Props): ReactElement {
  const { initials, color } = useColorfulName(name);

  return (
    <div
      className={clsx(styles.avatar, styles[variant], color)}
      style={{ "--size": `${size}rem` } as CSSProperties}
    >
      {name !== undefined ? initials : <Image src={src} alt={alt} fill />}
    </div>
  );
}
