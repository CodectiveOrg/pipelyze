import clsx from "clsx";

import { PropsWithChildren, ReactElement } from "react";

import { TypographyType, Variant } from "@/types/typography.type";

import styles from "./typography.module.css";

type Props = PropsWithChildren<{
  variant: Variant;
  className?: string;
  color: TypographyType;
}>;

export default function TypographyComponent({
  variant,
  children,
  className,
  color,
}: Props): ReactElement {
  return (
    <div className={clsx(className, variant, styles[color])}>{children}</div>
  );
}
