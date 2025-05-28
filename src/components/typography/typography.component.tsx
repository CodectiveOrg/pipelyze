import clsx from "clsx";

import { PropsWithChildren, ReactElement } from "react";

import { ColorType } from "@/types/color.type";

import styles from "./typography.module.css";

type VariantType =
  | "h1"
  | "h2"
  | "h3"
  | "h4"
  | "h5"
  | "h6"
  | "subtitle1"
  | "subtitle2"
  | "body1"
  | "body2"
  | "caption"
  | "overline"
  | "button";

export type TypographyColorType =
  | ColorType
  | "text-primary"
  | "text-secondary"
  | "text-disabled";

type Props = PropsWithChildren<{
  variant: VariantType;
  className?: string;
  color?: TypographyColorType;
}>;

export default function TypographyComponent({
  variant,
  children,
  className,
  color = "text-primary",
}: Props): ReactElement {
  return (
    <div className={clsx(styles.typography, className, variant, styles[color])}>
      {children}
    </div>
  );
}
