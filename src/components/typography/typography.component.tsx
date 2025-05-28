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

type TypographyColorType =
  | ColorType
  | "text-primary"
  | "text-secondary"
  | "text-disabled";

type Props = PropsWithChildren<{
  variant: VariantType;
  color?: TypographyColorType;
  className?: string;
}>;

export default function TypographyComponent({
  variant,
  color = "text-primary",
  className,
  children,
}: Props): ReactElement {
  return (
    <div className={clsx(styles.typography, variant, styles[color], className)}>
      {children}
    </div>
  );
}
